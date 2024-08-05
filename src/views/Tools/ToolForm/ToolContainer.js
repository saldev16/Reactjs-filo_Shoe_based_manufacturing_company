import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { confirmPopup } from "primereact/confirmpopup";
import { addTool, getTool, deleteTool, editSubTool, editTool, deleteSubTool } from "../../../redux/actions/toolAction";
import { getOperations } from "../../../redux/actions/operationActions";
import { getGroups, getSeasons, getToolTypes, getClassTypes, getInjectionTypes } from "../../../redux/actions/miscAction";
import { allValidations } from "../../../utils/formValidations";
import { showFormErrors } from "../../../utils/commonFunctions";
import { getMachines } from "../../../redux/actions/machineActions";

export default function ProjectContainer() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();

    let { allOperations } = useSelector((state) => state?.operations);

    let { allMachines } = useSelector((state) => state?.machines);

    const { groups, classTypes, toolTypes, seasons, injectionTypes } = useSelector((state) => state?.misc);
    
    allOperations = allOperations.map((item) => ({ _id: item._id, name: item?.name, code: item?.code }));

    useEffect(() => {
        dispatch(getOperations(() => {}));
        dispatch(getToolTypes());
        dispatch(getSeasons());
        dispatch(getClassTypes());
        dispatch(getGroups());
        dispatch(getMachines());
        dispatch(getInjectionTypes());
    }, [dispatch]);

    //If using to View or edit

    const getToolData = () => {
        if (id) {
            dispatch(
                getTool(id, (data) => {
                    setTool((prev) => ({
                        ...prev,
                        subTool: data?.subTool,
                        code: data?.code,
                        operation: data?.operation,
                        toolType: data?.toolType,
                        season: data?.season,
                        classType: data?.classType,
                        group: data?.group,
                        injectionType: data?.injectionType,
                        description: data?.description,
                        notes: data.notes,
                        names: data?.names,
                        images: data?.images,
                        files: data?.files,
                    }));
                })
            );
        }
    };

    useEffect(() => {
        getToolData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const [formType, setFormType] = useState("ADD");
    const [subTool, setSubTool] = useState(null);

    const [tool, setTool] = useState({
        operation: {},
        toolType: {},
        season: {},
        classType: {},
        group: {},
        injectionType: "",
        description: "",
        notes: "",
        names: [],
        images: [],
        files: [],
    });

    const locations = [ "Inventery Grid", "Machine", "User" ];

    useEffect(() => {
        if (!tool?.toolType?.isMold) {
            setTool((prev) => ({ ...prev, injectionType: "" }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tool?.toolType]);

    const getCode = () => {
        let code = `${tool?.operation?.code || " "}-${tool?.toolType?.code || " "}-${tool?.season?.code || " "}-${
            tool?.classType?.code || " "
        }-${tool?.group?.code || " "}`;
        if (tool?.code) {
            code = tool?.code;
        }
        return code;
    };

    const [loading, setLoading] = useState(false);

    const handleChange = ({ name, value }) => {
        if (formType === "ADD" || formType === "EDIT") {
            const formErrors = allValidations(name, value, tool);
            setTool((prev) => ({ ...prev, [name]: value, formErrors }));
        }
    };

    const handleOnAdd = ({ name, currentValue }) => {
        if (name === "names") {
            tool.formErrors['names'] = '';
            const formErrors = showFormErrors(tool, setTool, ["names", "injectionType"]);

            if (!formErrors) {
                tool.formErrors['names'] = 'Please fill required fields first.';
                return setTool({ ...tool });
            }
            if (tool.names.includes(currentValue)) {
                tool.formErrors['names'] = 'Value already added.';
                return setTool({ ...tool });
            }
        }
        const formErrors = allValidations(name, currentValue, tool);
        setTool((prev) => ({ ...prev, [name]: [...prev[name], currentValue], formErrors }));
    };

    const handleKeyUp = ({name, value}) => {
        if (name === "names") {
            if (value) {
                tool.formErrors['names'] = 'Press enter to add value.';
                return setTool({ ...tool });
            } else {
                tool.formErrors['names'] = '';
                return setTool({ ...tool });
            }
        }
    };

    const onRemove = async ({ name, currentValue }) => {
        if (name === 'names') {
            const index = tool.names.indexOf(currentValue[0]);
            if (index > -1) {
                const namesClone = [...tool.names];
                namesClone.splice(index, 1);
                setTool((prev) => ({ ...prev, [name]: namesClone }));
            }
        }
    }

    const handleSubToolChange = ({ name, value }) => {
        console.log(name, value)
        const formErrors = allValidations(name, value, subTool, ["code", "machines"]);
        setSubTool((prev) => ({ ...prev, [name]: value, formErrors }));
    };

    const onSubmit = () => {
        if (showFormErrors(tool, setTool)) {
            if (formType === "ADD") {
                dispatch(addTool(setLoading, tool, history));
            } else {
                dispatch(editTool(id, tool, setLoading, history));
            }
        }
    };

    const onSubToolSave = () => {
        if (showFormErrors(subTool, setSubTool, ["sizes", "code", "machines"])) {
            if (subTool?._id) {
                subTool.machines = subTool.machines.map(item => item._id);
                setSubTool({ ...subTool });
                dispatch(editSubTool(subTool, setLoading, getToolData));
            } else {
                let _tool = { ...tool };
                _tool.subTool[subTool?.rowIndex] = subTool;
                setTool({ ..._tool });
            }
            setSubTool(null);
        }
    };

    const handleDeleteTool = (event) => {
        let checkSubTool = tool?.subTool.filter((item) => item.quantity > 0);
        if (id) {
            if (checkSubTool.length) {
                confirmPopup({
                    target: event.currentTarget,
                    message: "You can not Delete this Tool!",
                    icon: "pi pi-exclamation-triangle",
                    acceptLabel: "Ok",
                    rejectLabel: " ",
                });
            } else {
                confirmPopup({
                    target: event.currentTarget,
                    message: "Are you sure you want to Delete?",
                    icon: "pi pi-exclamation-triangle",
                    accept: () => {
                        dispatch(deleteTool(id, () => history.replace("/tools")));
                    },
                    reject: () => {},
                });
            }
        }
    };

    const generateSubTools = () => {
        if (tool.names.length) {
            let subTool = [];
            if (tool?.subTool && tool.subTool.length) {
                const subToolsNamesWithIds = tool.subTool.reduce((accumulator, value) => {
                    return { ...accumulator, [value.name]: value };
                }, {});

                tool.names.map(item => {
                    if (subToolsNamesWithIds[item]) {
                        subTool.push(subToolsNamesWithIds[item]);
                    } else {
                        subTool.push({
                            code: getCode() + "-#-" + item,
                            name: item,
                            size: item,
                            quantity: 0,
                            location: null,
                            weight: null,
                            machines: [],
                            cover: null,
                            notes: null,
                        })
                    }
                    return subTool;
                });
            } else {
                subTool = tool.names.map((item) => ({
                    code: getCode() + "-#-" + item,
                    name: item,
                    size: item,
                    quantity: 0,
                    location: null,
                    weight: null,
                    machines: [],
                    cover: null,
                    notes: null,
                }));
            }
            setTool((prev) => ({ ...prev, subTool }));

        }
    };

    const openSubToolEdit = (rowIndex, data) => {
        let payload = {
            rowIndex,
            _id: data._id,
            code: data.code,
            name: data.name,
            sizes: data.sizes,
            machines: data.machines,
            quantity: data.quantity,
            location: data.location,
            weight: data.weight,
            cover: data.cover,
            notes: data.notes,
        };
        setSubTool(payload);
    };

    return {
        tool,
        handleChange,
        handleSubToolChange,
        setFormType,
        getCode,
        history,
        loading,
        onSubmit,
        allOperations,
        groups,
        classTypes,
        toolTypes,
        seasons,
        handleDeleteTool,
        subTool,
        setSubTool,
        generateSubTools,
        onSubToolSave,
        openSubToolEdit,
        handleOnAdd,
        onRemove,
        handleKeyUp,
        locations,
        allMachines,
        injectionTypes
    };
}
