import { useState, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProject, addProject, editProject, getOperationsTree } from "../../../redux/actions/projectActions";
import { getGroups, getSeasons, getClassTypes, getInjectionTypes, getTags, getUnits } from "../../../redux/actions/miscAction";
import { allValidations } from "../../../utils/formValidations";
import { showFormErrors } from "../../../utils/commonFunctions";
import { getOperations } from "../../../redux/actions/operationActions";
import { getTools } from "../../../redux/actions/toolAction";
import { v4 as uuidv4 } from 'uuid';
import { getCategories, getMaterials } from "../../../redux/actions/materialAction";
import { showToast } from "../../../redux/actions/toastAction";

export default function ToolContainer() {
    const history = useHistory();
    const location = useLocation();

    const dispatch = useDispatch();
    const { id } = useParams();

    const { groups, classTypes, injectionTypes, seasons } = useSelector((state) => state?.misc);
    let { allOperations } = useSelector((state) => state?.operations);
    let { allTools } = useSelector((state) => state?.tools);
    allOperations = allOperations.map((item) => ({ code: item.code, name: item.name, _id: item._id }));
    allTools = allTools.map((item) => ({ code: item.code, _id: item._id }));

    let allTags = useSelector((state) => state?.misc.tags);
    allTags = allTags.map((item) => item.name);
    let { allMaterials, allCategories } = useSelector((state) => state?.material);
    allMaterials = allMaterials.filter(item => item.type === 'RAW');

    const allUnits = useSelector((state) => state?.misc.units);
    const [showSemiProducedMaterialDialog, setShowSemiProducedMaterialDialog] = useState(false);

    const labelingIgnoreFields = ["noOflabels", "labels"];

    useEffect(() => {
        dispatch(getTags());
        dispatch(getSeasons());
        dispatch(getInjectionTypes());
        dispatch(getClassTypes());
        dispatch(getGroups());
        dispatch(getOperations());
        dispatch(getTools());
        dispatch(getMaterials());
        dispatch(getCategories());
        dispatch(getUnits());
    }, [dispatch]);

    //If using to View or edit
    useEffect(() => {
        if (id) {
            dispatch(
                getProject(id, (data) => {
                    setProject((prev) => ({
                        ...prev,
                        injectionType: data?.injectionType,
                        injectionTool: data?.injectionTool,
                        season: data?.season,
                        classType: data?.classType,
                        group: data?.group,
                        description: data?.description,
                        name: data?.name,
                        status: data?.status,
                        profiles: data?.profiles,
                    }));
                })
            );
        }
    }, [id, dispatch]);
    const [loading, setLoading] = useState(false);
    const [formType, setFormType] = useState("ADD");
    let completeForm = {
        profile: {},
        profile: {},
        operation: {},
        material: {}
    };

    const [project, setProject] = useState(
        location.state?.project ? { ...location.state.project } :
            location.state?.completeForm.project ?
                { ...location.state?.completeForm.project } : {
                    name: "",
                    injectionType: {},
                    injectionTool: "",
                    season: {},
                    classType: {},
                    group: {},
                    status: "",
                    description: "",
                    profiles: [],
                });

    const handleChange = ({ name, value }) => {
        if (formType === "ADD" || "EDIT") {
            const formErrors = allValidations(name, value, project);
            setProject((prev) => ({ ...prev, [name]: value, formErrors }));
        }
    };

    const onClickAddInjectionTool = async () => {
        if (formType === "ADD" || "EDIT") {
            if (showFormErrors(project, setProject)) {
                await saveStateData();
                history.push({ pathname: "/projects/add/add-tool", state: { fromProjects: true, project, completeForm, id: id, editProfileId: editProfileId } });
            }
        }
    };

    const onClickAddProfileTool = async () => {
        if (formType === "ADD" || "EDIT") {
            await saveStateData();
            history.push({ pathname: "/projects/add/add-tool", state: { fromOperations: true, operation, completeForm, id: id, editProfileId: editProfileId } });
        }
    };

    const saveStateData = async () => {
        return completeForm = {
            project: { ...project },
            profile: { ...profile },
            operation: { ...operation },
            material: { ...material }
        };
    };

    const [editProfileId, setEditProfileId] = useState(location.state?.editProfileId ? location.state?.editProfileId : null);
    const [profile, setProfile] = useState(
        location.state?.completeForm.profile ?
            { ...location.state?.completeForm.profile } :
            {
                color: "",
                description: "",
                images: [],
                operations: [],
            });

    const handleProfileChange = ({ name, value }) => {
        if (formType === "ADD" || "EDIT") {
            const formErrors = allValidations(name, value, profile);
            setProfile((prev) => ({ ...prev, [name]: value, formErrors }));
        }
    };

    const [editOperationId, setEditOperationId] = useState(null);
    const [operation, setOperation] = useState(location.state?.operation ? { ...location.state.operation } :
        location.state?.completeForm.operation ?
            { ...location.state?.completeForm.operation } : {
                id: "",
                position: {},
                data: {},
                type: "operationNode",
                updatable: true,
                operation: {},
                parentId: "",
                processName: "",
                tool: "",
                capacityPerHour: "",
                label: "",
                noOflabels: "",
                labels: [],
                materials: [],
                semiProducedMaterial: {}
            });


    const [semiProducedMaterial, setSemiProducedMaterial] = useState({
        name: "",
        category: "",
        unit: "",
        operation: {},
        processName: "",
        tool: "",
        capacityPerHour: "",
        label: {},
        noOflabels: "",
        labels: [],
        rawMaterial: null
    });

    const handleOperationChange = ({ name, value }) => {
        if (formType === "ADD" || "EDIT") {
            if (name === 'label' && value === 'None') {
                operation.formErrors = {
                    ...operation.formErrors,
                    noOflabels: '',
                    labels: ''
                }
            }
            const formErrors = allValidations(name, value, operation);
            setOperation((prev) => ({ ...prev, [name]: value, formErrors }));
        }
    };

    const [material, setMaterial] = useState({
        materialTags: [],
        qty: "",
        description: "",
        rawMaterial: null,
        unit: ''
    });

    const handleMaterialChange = ({ name, value }) => {
        if (formType === "ADD" || "EDIT") {
            if (value) {
                const formErrors = allValidations(name, value, material);
                setMaterial((prev) => ({ ...prev, [name]: value, formErrors }));
            }
        }
    };

    const handleSemiProducedMatChange = ({ name, value }) => {
        if (formType === "ADD" || "EDIT") {
            if (value) {
                const formErrors = allValidations(name, value, semiProducedMaterial, ["rawMaterial"]);
                setSemiProducedMaterial((prev) => ({ ...prev, [name]: value, formErrors }));
            }
        }
    };

    const onSubmit = () => {
        if (showFormErrors(project, setProject)) {
            if (id) {
                dispatch(editProject(setLoading, id, project, history));
            } else {
                dispatch(addProject(setLoading, project, history));
            }
        }
    };

    const onProfileSave = () => {
        if (showFormErrors(profile, setProfile, ["sizes"])) {
            if (editProfileId) {
                project.profiles[editProfileId - 1] = profile;
                setProject({ ...project });
                setProfile({ color: "", description: "", images: [], operations: [] });
                setEditProfileId(null);
            } else {
                let newPro = { ...project };
                newPro.profiles.push(profile);
                setProject({ ...newPro });
                setProfile({ color: "", description: "", images: [], operations: [] });
                setEditProfileId(null);
            }
        }
    };
    const onEditProfile = async (index) => {
        setProfile({ ...project.profiles[index] });
        setEditProfileId(index + 1);
    };
    const onAddOperation = () => {
        let ignoreFields = ["id", "position", "data", "type", "tool"];
        if (operation.label === 'None') {
            ignoreFields = [...ignoreFields, ...labelingIgnoreFields];
        };
        if (showFormErrors(operation, setOperation, ignoreFields)) {
            if (editOperationId) {
                profile.operations[editOperationId - 1] = {
                    ...operation,
                }
                setProfile({ ...profile });
                setOperation({
                    id: "",
                    position: {},
                    data: {},
                    type: "operationNode",
                    updatable: true,
                    parentId: "",
                    operation: {},
                    processName: "",
                    tool: "",
                    capacityPerHour: "",
                    label: {},
                    noOflabels: "",
                    labels: [],
                    materials: [],
                });
                setEditOperationId(null);
            } else {
                // setSemiProducedMaterial((prev) => ({
                //     ...prev,
                //     operation: operation.operation,
                //     processName: operation.processName,
                //     tool: operation.tool,
                //     capacityPerHour: operation.capacityPerHour,
                //     label: operation.label,
                //     noOflabels: operation.noOflabels,
                //     labels: operation.labels,
                //     rawMaterial: operation.rawMaterial
                // }));
                // setShowSemiProducedMaterialDialog(true);
                const id = uuidv4();
                setProfile({
                    ...profile, operations: [...profile.operations, {
                        ...operation, id: id,
                        position: {
                            x: 0,
                            y: 0
                        },
                        data: {
                            id: id,
                            operationCode: operation.operation.code,
                            operationType: operation.operation.name,
                            processName: operation.processName,
                            tool: operation.tool,
                            label: operation.label,
                        },
                        type: "operationNode",
                        updatable: true,
                    }]
                });
                setOperation({
                    id: "",
                    position: {},
                    data: {},
                    updatable: true,
                    type: "operationNode",
                    parentId: "",
                    operation: {},
                    processName: "",
                    tool: "",
                    capacityPerHour: "",
                    label: {},
                    noOflabels: "",
                    labels: [],
                    materials: [],
                });
            }
            setSemiProducedMaterial(null);
        }
    };

    // const onAddOrCancelSemiProducedMaterial = () => {
    //     if (showFormErrors(semiProducedMaterial, setSemiProducedMaterial, ["rawMaterial"])) {
    //         setShowSemiProducedMaterialDialog(false);
    //         if (showFormErrors(operation, setOperation, ["id", "position", "data", "type", "rawMaterial"])) {

    //             if (editOperationId) {
    //                 profile.operations[editOperationId - 1] = {
    //                     ...operation,
    //                 }
    //                 setProfile({ ...profile });
    //                 setOperation({
    //                     id: "",
    //                     position: {},
    //                     data: {},
    //                     type: "operationNode",
    //                     updatable: true,
    //                     parentId: "",
    //                     operation: {},
    //                     processName: "",
    //                     tool: "",
    //                     capacityPerHour: "",
    //                     label: {},
    //                     noOflabels: "",
    //                     labels: [],
    //                     materials: [],
    //                     semiProducedMaterial: {}
    //                 });
    //                 setEditOperationId(null);
    //             } else {
    //                 const id = uuidv4();
    //                 setProfile({
    //                     ...profile, operations: [...profile.operations, {
    //                         ...operation, id: id,
    //                         position: {
    //                             x: 0,
    //                             y: 0
    //                         },
    //                         data: {
    //                             id: id,
    //                             operationCode: operation.operation.code,
    //                             operationType: operation.operation.name,
    //                             processName: operation.processName,
    //                             tool: operation.tool,
    //                             label: operation.label,
    //                         },
    //                         type: "operationNode",
    //                         updatable: true,
    //                         semiProducedMaterial: { ...semiProducedMaterial }
    //                     }]
    //                 });
    //                 setOperation({
    //                     id: "",
    //                     position: {},
    //                     data: {},
    //                     updatable: true,
    //                     type: "operationNode",
    //                     parentId: "",
    //                     operation: {},
    //                     processName: "",
    //                     tool: "",
    //                     capacityPerHour: "",
    //                     label: {},
    //                     noOflabels: "",
    //                     labels: [],
    //                     materials: [],
    //                     semiProducedMaterial: {}
    //                 });
    //             }
    //             setSemiProducedMaterial(null);
    //         }
    //     }
    // };

    const onEditOperation = (id) => {
        const op = profile.operations.find(item => item.id === id);
        setOperation({ ...op });
        const index = profile.operations.indexOf(op);
        setEditOperationId(index + 1);
    };

    const onAddMaterial = () => {
        if (showFormErrors(material, setMaterial, ["rawMaterial", "unit"])) {
            setOperation({ ...operation, materials: [...operation.materials, material] });
            setMaterial({ materialTags: [], qty: "", description: "" });
        }
    };

    const deleteMaterial = (i) => {
        let newArr = operation.materials;
        newArr.splice(i, 1);
        setOperation({ ...operation, materials: newArr });
    };

    const editMaterial = (i) => {
        setMaterial({ materialTags: [operation.materials[i].tag], ...operation.materials[i] });
    };

    //need to remove operations id also
    const onAdoptProfile = (index) => {
        let newProf = { ...project.profiles[index] };
        if (newProf.operations.length) {
            newProf.operations.forEach((item) => delete item._id);
        }
        delete newProf._id;
        setProfile({ ...newProf });
    };

    const handleNodeEdges = (source, target) => {
        let operationsClone = [...profile.operations];
        operationsClone = operationsClone.map(item => {
            if (item.id === target) {
                item.parentId = source;
                item.updatable = true;
            }
            return item;
        });
        setProfile({ ...profile, operations: operationsClone });
    };

    const getTreeTable = (data) => {
        return data.map((item) => ({ ...item, key: item?._id, label: item?.name, children: getTreeTable(item.subcategories) }));
    };

    return {
        project,
        profile,
        operation,
        material,
        handleChange,
        setFormType,
        handleProfileChange,
        handleOperationChange,
        handleMaterialChange,
        history,
        loading,
        onSubmit,
        onProfileSave,
        onAddMaterial,
        deleteMaterial,
        editMaterial,
        groups,
        classTypes,
        injectionTypes,
        seasons,
        onAddOperation,
        editOperationId,
        onEditOperation,
        editProfileId,
        onEditProfile,
        onAdoptProfile,
        allOperations,
        allTools,
        allTags,
        onClickAddInjectionTool,
        onClickAddProfileTool,
        handleNodeEdges,
        profile,
        setProfile,
        allMaterials,
        setOperation,
        semiProducedMaterial,
        setSemiProducedMaterial,
        showSemiProducedMaterialDialog,
        setShowSemiProducedMaterialDialog,
        allCategories,
        allUnits,
        getTreeTable,
        // onAddOrCancelSemiProducedMaterial,
        handleSemiProducedMatChange
    };
}
