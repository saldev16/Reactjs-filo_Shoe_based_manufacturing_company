import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allValidations } from "../../../utils/formValidations";
import { showFormErrors } from "../../../utils/commonFunctions";
import { getUnits, getTags } from "../../../redux/actions/miscAction";
import { getMaterials, getMaterial, getCategories, addMaterial, editMaterial } from "../../../redux/actions/materialAction";

import { getSuppliers } from "../../../redux/actions/supplierAction";
import { getOperations } from "../../../redux/actions/operationActions";
import { getTools } from "../../../redux/actions/toolAction";
const MaterialsContainer = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getMaterials());
        dispatch(getCategories());
        dispatch(getSuppliers());
        dispatch(getUnits());
        dispatch(getTags());
        dispatch(getOperations());
        dispatch(getTools());
    }, [dispatch]);

    useEffect(() => {
        let activeCategory = history?.location?.state?.activeCategory;
        if (activeCategory) {
            setMaterial((prev) => ({ ...prev, category: activeCategory }));
        }
    }, [history.location]);

    let { allCategories, allMaterials } = useSelector((state) => state.material);
    let { allOperations } = useSelector((state) => state?.operations);
    let { allTools } = useSelector((state) => state?.tools);

    const allUnits = useSelector((state) => state?.misc.units);
    let allTags = useSelector((state) => state?.misc.tags);
    allTags = allTags.map((item) => item.name);

    let suppliers = useSelector((state) => state.suppliers.allSuppliers);

    allOperations = allOperations.map((item) => ({ _id: item._id, name: item?.name }));
    allMaterials = allMaterials.map((item) => ({ _id: item._id, name: item?.name }));
    allTools = allTools.map((item) => ({ _id: item._id, code: item?.code }));
    suppliers = suppliers.map((item) => ({ _id: item._id, code: item?.code, name: item.name }));

    useEffect(() => {
        if (id) {
            dispatch(
                getMaterial(id, (data) => {
                    data.type = materialTypes.find((item) => item.value === data.type);
                    data.fullName = data.name;
                    delete data.name;
                    setMaterial({
                        ...data,
                    });
                })
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, dispatch]);

    const [formType, setFormType] = useState("ADD");

    const materialTypes = [
        { name: "Raw Materials", value: "RAW" },
        { name: "Semi-Produced", value: "SEMI_PRODUCED" },
    ];

    const labels = [
        { name: "None", value: "None" },
        { name: "Fixed Quantity", value: "Fixed Quantity" },
        { name: "Related with Sizes Quantity", value: "Related with Sizes Quantity" },
    ];
    const [prepareMaterial, setPrepareMaterial] = useState({
        material: {},
        qty: 0,
    });
    const [prepare, setPrepare] = useState({
        operation: "",
        processName: "",
        tool: "",
        capacityPerHour: 0,
        label: "",
        noOflabels: 0,
        labels: [],
        materials: [],
    });
    const [material, setMaterial] = useState({
        type: { name: "Raw Materials", value: "RAW" },
        fullName: "",
        supplierCode: "",
        description: "",
        category: "",
        suppliers: [],
        images: [],
        tags: [],
        unit: "",
        retailPrice: 0,
        wholesalePrice: 0,
        minQuantity: 0,
        maxQuantity: 0,
        discount: 0,
        operations: [],
    });
    const [editOperationId, setEditOperationId] = useState("");

    const [loading, setLoading] = useState(false);

    const handleChange = ({ name, value }) => {
        if (formType !== "VIEW") {
            const formErrors = allValidations(name, value, material);
            setMaterial((prev) => ({ ...prev, [name]: value, formErrors }));
        }
    };
    const handlePreparationChange = ({ name, value }) => {
        if (formType !== "VIEW") {
            if (name === 'label' && value === 'None') {
                prepare.formErrors = {
                    ...prepare.formErrors,
                    noOflabels: '',
                    labels: ''
                }
            }
            const formErrors = allValidations(name, value.toString(), prepare);
            setPrepare((prev) => ({ ...prev, [name]: value, formErrors }));
        }
    };
    const handleChangePreparationMaterial = ({ name, value }) => {
        if (formType !== "VIEW") {
            const formErrors = allValidations(name, value, prepare);
            setPrepareMaterial((prev) => ({ ...prev, [name]: value, formErrors }));
        }
    };

    const onEditOperation = (index) => {
        setPrepare({ ...material.operations[index] });
        setEditOperationId(index + 1);
    };

    const onEditMaterial = (i) => {
        setPrepareMaterial({ ...prepare.materials[i] });
    };
    const onDeleteMaterial = (i) => {
        let newArr = prepare.materials;
        newArr.splice(i, 1);
        setPrepare({ ...prepare, materials: newArr });
    };

    const onAddMaterial = () => {
        if (showFormErrors(prepareMaterial, setPrepareMaterial)) {
            let newArr = [...prepare.materials];
            let itemIndex = newArr.findIndex((item) => item.material._id === prepareMaterial?.material?._id);
            if (itemIndex === -1) {
                newArr.push(prepareMaterial);
            } else {
                newArr[itemIndex] = prepareMaterial;
            }
            setPrepare((prev) => ({ ...prev, materials: newArr }));
            setPrepareMaterial({ material: {}, qty: 0 });
        }
    };
    const onAddOperation = () => {
        let ignoreFields = ["tool"];
        if (prepare.label === 'None') {
            ignoreFields = [...ignoreFields, "noOflabels", "labels"];
        };
        if (showFormErrors(prepare, setPrepare, [...ignoreFields])) {
            let newArr = [...material.operations];
            if (editOperationId) {
                newArr[editOperationId - 1] = prepare;
            } else {
                newArr.push(prepare);
            }
            setMaterial((prev) => {
                return {
                    ...prev,
                    operations: newArr,
                };
            });
            setPrepare({
                operation: "",
                processName: "",
                tool: "",
                capacityPerHour: 0,
                label: "",
                noOflabels: 0,
                labels: [],
                materials: [],
            });
            setEditOperationId("");
        }
    };
    const onSubmit = () => {
        if (showFormErrors(material, setMaterial)) {
            if (id) {
                dispatch(editMaterial(id, material, setLoading, history));
            } else {
                dispatch(addMaterial(material, setLoading, history));
            }
        }
    };

    const getTreeTable = (data) => {
        return data.map((item) => ({ ...item, key: item?._id, label: item?.name, children: getTreeTable(item.subcategories) }));
    };

    return {
        materialTypes,
        allCategories,
        suppliers,
        allUnits,
        allTags,
        getTreeTable,
        material,
        handleChange,
        setFormType,
        onSubmit,
        loading,
        history,

        prepare,
        handlePreparationChange,
        allOperations,
        allTools,
        allMaterials,

        prepareMaterial,
        handleChangePreparationMaterial,
        onAddMaterial,
        onDeleteMaterial,
        onEditMaterial,
        onAddOperation,
        editOperationId,
        onEditOperation,
        labels,
    };
};

export default MaterialsContainer;
