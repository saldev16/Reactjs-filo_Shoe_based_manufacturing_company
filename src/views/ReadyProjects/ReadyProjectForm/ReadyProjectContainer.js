import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getReadyProject, addReadyProject, EditReadyProject, addProduct, addPreset } from "../../../redux/actions/projectActions";
import { getGroups, getSeasons, getClassTypes, getInjectionTypes } from "../../../redux/actions/miscAction";
import { allValidations } from "../../../utils/formValidations";
import { getSuppliers } from "../../../redux/actions/supplierAction";
import { showFormErrors } from "../../../utils/commonFunctions";
import { showToast } from "../../../redux/actions/toastAction";

export default function ReadyProjectContainer() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();

    const { groups, classTypes, injectionTypes, seasons } = useSelector((state) => state?.misc);
    let { allSuppliers } = useSelector((state) => state.suppliers);
    let suppliers = allSuppliers.map((item) => ({ _id: item._id, code: item?.code, name: item.name }));

    useEffect(() => {
        dispatch(getSeasons());
        dispatch(getInjectionTypes());
        dispatch(getClassTypes());
        dispatch(getGroups());
        dispatch(getSuppliers());
    }, [dispatch]);

    // using to View or edit
    useEffect(() => {
        if (id) {
            dispatch(
                getReadyProject(id, (data) => {
                    setProject((prev) => ({
                        ...prev,
                        name: data?.name,
                        injectionType: data?.injectionType,
                        season: data?.season,
                        classType: data?.classType,
                        group: data?.group,
                        supplier: data?.supplier,
                        description: data?.description,
                        sizes: data?.sizes,
                        retailPrice: data?.retailPrice,
                        wholesalePrice: data?.wholesalePrice,
                        minQuantity: data?.minQuantity,
                        maxQuantity: data?.maxQuantity,
                        tax: data?.tax,
                        discount: data?.discount,
                        products: data?.products,
                        presets: data?.presets,
                    }));
                })
            );
        }
    }, [id, dispatch]);
    const [loading, setLoading] = useState(false);
    const [formType, setFormType] = useState("ADD");
    const [project, setProject] = useState({
        name: "",
        injectionType: {},
        season: {},
        classType: {},
        group: {},
        supplier: {},
        description: "",
        sizes: [],
        retailPrice: 0,
        wholesalePrice: 0,
        minQuantity: 0,
        maxQuantity: 0,
        tax: 0,
        discount: 0,
        products: [],
        presets: [],
    });

    const [editProductId, setEditProductId] = useState("");
    const [isProductFormOpen, setIsProductFormOpen] = useState(false);
    const [product, setProduct] = useState({
        images: [],
        color: "",
        description: "",
        retailPrice: 0,
        wholesalePrice: 0,
        minQuantity: 0,
        maxQuantity: 0,
        tax: 0,
        discount: 0,
    });
    const [isPresetFormOpen, setIsPresetFormOpen] = useState(false);
    const [preset, setPreset] = useState({
        name: "",
        preset: {},
        isDefault: false,
    });

    const handleChange = ({ name, value }) => {
        if (formType !== "VIEW") {
            const formErrors = allValidations(name, value, project);
            setProject((prev) => ({ ...prev, [name]: value, formErrors }));
        }
    };

    const handleProductChange = ({ name, value }) => {
        if (formType !== "VIEW") {
            const formErrors = allValidations(name, value, product);
            setProduct((prev) => ({ ...prev, [name]: value, formErrors }));
        }
    };
    const handlePresetChange = ({ name, value }) => {
        if (formType !== "VIEW") {
            const formErrors = allValidations(name, value, product);
            setPreset((prev) => ({ ...prev, [name]: value, formErrors }));
        }
    };

    const onSubmit = () => {
        if (showFormErrors(project, setProject)) {
            if (id) {
                dispatch(EditReadyProject(id, setLoading, project, history));
            } else {
                dispatch(addReadyProject(setLoading, project, history));
            }
        }
    };

    const onAddProduct = () => {
        if (showFormErrors(product, setProduct)) {
            let _product = { ...product };
            if (id) {
                _product.readyProject = id;
            }
            if (editProductId) {
                dispatch(
                    addProduct(editProductId._id, _product, (data) => {
                        let index = project.products.findIndex((item) => item._id === data._id);
                        let _products = [...project.products];
                        _products[index] = data;
                        setProject((prev) => ({ ...prev, products: [..._products] }));
                        closeProductForm();
                    })
                );
            } else {
                dispatch(
                    addProduct(null, _product, (data) => {
                        setProject((prev) => ({ ...prev, products: [...prev.products, data] }));
                        closeProductForm();
                    })
                );
            }
        }
    };

    const onAddPreset = () => {
        if (showFormErrors(preset, setPreset)) {
            dispatch(
                addPreset(id, preset, (data) => {
                    setProject((prev) => ({ ...prev, presets: [...prev.presets, data] }));
                    closePresetForm();
                })
            );
        }
    };

    const onEditProduct = (id) => {
        let _product = project.products.find((item) => item._id === id);
        setEditProductId(_product);
        setProduct({
            ..._product,
        });
        setIsProductFormOpen(true);
    };

    const openProductForm = () => {
        setProduct({
            ...product,
            retailPrice: project.retailPrice,
            wholesalePrice: project.wholesalePrice,
            minQuantity: project.minQuantity,
            maxQuantity: project.maxQuantity,
            tax: project.tax,
            discount: project.discount,
        });
        setIsProductFormOpen(true);
    };

    const closeProductForm = () => {
        setProduct({
            images: [],
            color: "",
            description: "",
            retailPrice: 0,
            wholesalePrice: 0,
            minQuantity: 0,
            maxQuantity: 0,
            tax: 0,
            discount: 0,
        });
        setIsProductFormOpen(false);
        setEditProductId("");
    };

    const openPresetForm = () => {
        if (project?.products?.length && project?.sizes?.length) {
            setPreset({
                name: "",
                preset: {},
                isDefault: false,
            });
            setIsPresetFormOpen(true);
        } else {
            dispatch(
                showToast({ severity: "warn", summary: "Missing Details", detail: "Atleast one size and product required" })
            );
        }
    };

    const closePresetForm = () => {
        setPreset({
            name: "",
            preset: {},
            isDefault: false,
        });
        setIsPresetFormOpen(false);
    };

    return {
        project,
        handleChange,
        handleProductChange,
        handlePresetChange,
        onSubmit,
        product,
        onAddProduct,
        history,
        loading,
        setFormType,
        groups,
        classTypes,
        injectionTypes,
        seasons,
        suppliers,
        isProductFormOpen,
        openProductForm,
        closeProductForm,
        onEditProduct,
        editProductId,
        openPresetForm,
        closePresetForm,
        isPresetFormOpen,
        preset,
        onAddPreset,
    };
}
