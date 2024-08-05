import api from "../../services/api";
import Constants from "../../services/constant";
import { hideLoaderAction, showLoaderAction } from "./loaderAction";
import { types } from "../types/types";
import { uploadImages } from "./uploadFiles";

const getCategories = () => async (dispatch) => {
    const res = await api("get", Constants.END_POINT.CATEGORY);
    if (res.success) {
        if (res.data) {
            dispatch({
                type: types.CHANGE_CATEGORY,
                payload: res.data,
            });
        }
    }
};

const addCategory = (data, setLoading, next) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }

    let payload = {
        name: data?.categoryName,
        parent: data?.parent,
    };
    const res = await api("post", Constants.END_POINT.CATEGORY, payload);
    if (res.success) {
        dispatch(getCategories());
        if (next) {
            next();
        }
    }
    if (setLoading) {
        setLoading(false);
    }
};
const editCategory = (id, data, setLoading, next) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }

    let payload = {
        name: data?.categoryName,
    };
    const res = await api("put", Constants.END_POINT.CATEGORY + id, payload);
    if (res.success) {
        dispatch(getCategories());
        if (next) {
            next();
        }
    }
    if (setLoading) {
        setLoading(false);
    }
};

const deleteCategoryAction = (id) => async (dispatch) => {
    const res = await api("delete", Constants.END_POINT.CATEGORY + id);
    if (res.success) {
        dispatch(getCategories());
    }
};

const getMaterials = (activeCategory, setLoading) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }
    let query = "";
    if (activeCategory) {
        query = query + `?category=${activeCategory}`;
    }
    const res = await api("get", Constants.END_POINT.MATERIAL + query);
    if (res.success) {
        if (res.data) {
            dispatch({
                type: types.CHANGE_MATERIALS,
                payload: res.data,
            });
        }
    }
    if (setLoading) {
        setLoading(false);
    }
};

const getMaterial = (id, next) => async (dispatch) => {
    dispatch(showLoaderAction());
    const res = await api("get", Constants.END_POINT.MATERIAL + id);
    if (res.success) {
        if (next) {
            next(res.data);
        }
    }
    dispatch(hideLoaderAction());
};

const addMaterial = (data, setLoading, history) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }
    data.images = await uploadImages(data.images);
    if (data.type.value === "RAW") {
        data.operations = [];
    } else {
        data.operations = data.operations.map((item) => ({
            ...item,
            operation: item.operation._id,
            tool: item.tool._id,
            materials: item.materials.map((mt) => ({ ...mt, material: mt.material._id })),
        }));
    }
    let payload = {
        ...data,
        name: data?.fullName,
        type: data?.type?.value,
        unit: data?.unit?._id,
        suppliers: data?.suppliers.map((item) => item._id),
    };

    const res = await api("post", Constants.END_POINT.MATERIAL, payload);
    if (res.success) {
        history.push("/materials");
    }
    if (setLoading) {
        setLoading(false);
    }
};

const editMaterial = (id, data, setLoading, history) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }
    data.images = await uploadImages(data.images);

    if (data.type.value === "RAW") {
        data.operations = [];
    } else {
        data.operations = data.operations.map((item) => ({
            ...item,
            operation: item.operation._id,
            tool: item.tool._id,
            materials: item.materials.map((mt) => ({ ...mt, material: mt.material._id })),
        }));
    }

    let payload = {
        ...data,
        name: data?.fullName,
        type: data?.type?.value,
        unit: data?.unit?._id,
        suppliers: data?.suppliers.map((item) => item._id),
    };
    const res = await api("put", Constants.END_POINT.MATERIAL + id, payload);
    if (res.success) {
        history.push("/materials");
    }
    if (setLoading) {
        setLoading(false);
    }
};

const deleteMaterial = (id) => async (dispatch) => {
    const res = await api("delete", Constants.END_POINT.MATERIAL + id);
    if (res.success) {
        dispatch(getMaterials());
    }
};

export {
    getCategories,
    addCategory,
    deleteCategoryAction,
    editCategory,
    getMaterials,
    getMaterial,
    addMaterial,
    editMaterial,
    deleteMaterial,
};
