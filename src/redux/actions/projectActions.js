import api from "../../services/api";
import Constants from "../../services/constant";
import { types } from "../types/types";
import { hideLoaderAction, showLoaderAction } from "./loaderAction";
import { showToast } from "./toastAction";
import { uploadImages } from "./uploadFiles";

const getProjects = (setLoading) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }
    const res = await api("get", Constants.END_POINT.PROJECT);
    if (res.success) {
        if (res.data) {
            dispatch({
                type: types.CHANGE_PROJECTS,
                payload: res.data,
            });
        }
    }
    if (setLoading) {
        setLoading(false);
    }
};

const getProject = (id, returnData) => async (dispatch) => {
    dispatch(showLoaderAction());
    const res = await api("get", Constants.END_POINT.PROJECT + id);
    if (res.success) {
        if (res.data) {
            if (returnData) {
                returnData(res.data);
            }
        }
    }
    dispatch(hideLoaderAction());
};

const addProject = (setLoading, project, history) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }
    if (project.profiles.length) {
        project.profiles = await Promise.all(
            project.profiles.map(async (item) => {
                item.images = await uploadImages(item.images);
                return {
                    ...item,
                    operations: item.operations.map((op) => ({
                        ...op,
                        operation: op.operation._id,
                        tool: op.tool,
                    })),
                };
            })
        );
    }

    const payload = {
        ...project,
        injectionType: project?.injectionType._id,
        season: project?.season._id,
        classType: project?.classType._id,
        group: project?.group._id,
    };
    const res = await api("post", Constants.END_POINT.PROJECT, payload);
    if (res.success) {
        history.push("/projects");
        dispatch(showToast({ severity: "success", summary: res.message }));
    }
    if (setLoading) {
        setLoading(false);
    }
};

const editProject = (setLoading, id, project, history) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }
    if (project.profiles.length) {
        project.profiles = await Promise.all(
            project.profiles.map(async (item) => {
                item.images = await uploadImages(item.images);
                return {
                    ...item,
                    operations: item.operations.map((op) => ({
                        ...op,
                        operation: op.operation._id,
                        tool: op.tool,
                    })),
                };
            })
        );
    }

    const payload = {
        ...project,
        injectionType: project?.injectionType._id,
        season: project?.season._id,
        classType: project?.classType._id,
        group: project?.group._id,
    };
    const res = await api("put", Constants.END_POINT.PROJECT + id, payload);
    if (res.success) {
        history.push("/projects");
        dispatch(showToast({ severity: "success", summary: res.message }));
    }
    if (setLoading) {
        setLoading(false);
    }
};

//Ready Project......................................
const getReadyProjects = (setLoading) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }
    const res = await api("get", Constants.END_POINT.READY_PROJECT);
    if (res.success) {
        if (res.data) {
            dispatch({
                type: types.CHANGE_READY_PROJECTS,
                payload: res.data,
            });
        }
    }
    if (setLoading) {
        setLoading(false);
    }
};
const getReadyProject = (id, returnData) => async (dispatch) => {
    dispatch(showLoaderAction());
    const res = await api("get", Constants.END_POINT.READY_PROJECT + id);
    if (res.success) {
        if (res.data) {
            if (returnData) {
                returnData(res.data);
            }
        }
    }
    dispatch(hideLoaderAction());
};
const addReadyProject = (setLoading, project, history) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }
    const payload = {
        ...project,
        injectionType: project?.injectionType._id,
        season: project?.season._id,
        classType: project?.classType._id,
        group: project?.group._id,
        supplier: project?.supplier._id,
    };
    const res = await api("post", Constants.END_POINT.READY_PROJECT, payload);
    if (res.success) {
        history.push("/products");
        dispatch(showToast({ severity: "success", summary: res.message }));
    }
    if (setLoading) {
        setLoading(false);
    }
};
const EditReadyProject = (id, setLoading, project, history) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }
    const payload = {
        ...project,
        injectionType: project?.injectionType._id,
        season: project?.season._id,
        classType: project?.classType._id,
        group: project?.group._id,
        supplier: project?.supplier._id,
    };
    const res = await api("put", Constants.END_POINT.READY_PROJECT + id, payload);
    if (res.success) {
        history.push("/products");
        dispatch(showToast({ severity: "success", summary: res.message }));
    }
    if (setLoading) {
        setLoading(false);
    }
};

const getOperationsTree = (profileId, setLoading, returnData) => async (dispatch) => {
    dispatch(showLoaderAction());

    if (setLoading) {
        setLoading(true);
    }
    const res = await api("get", Constants.END_POINT.OPERATIONS_TREE + profileId);
    if (res.success) {
        if (res.data) {
            if (returnData) {
                returnData(res.data);
            }
        }
    }
    if (setLoading) {
        setLoading(false);
    }
    dispatch(hideLoaderAction());
};

const updateOperationSequence = (id, parentId, setLoading, history) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }
    const payload = {
        parentId,
    };
    const res = await api("put", Constants.END_POINT.UPDATE_OPERATIONS_TREE_SEQUENCE + id, payload);
    if (res.success) {
        // history.push("/products");
        dispatch(showToast({ severity: "success", summary: res.message }));
    }
    if (setLoading) {
        setLoading(false);
    }
};

//Products...........................................................................
const addProduct = (id, product, next) => async (dispatch) => {
    dispatch(showLoaderAction());
    product.images = await uploadImages(product.images);
    let res;
    if (id) {
        res = await api("put", Constants.END_POINT.PRODUCT + id, product);
    } else {
        res = await api("post", Constants.END_POINT.PRODUCT, product);
    }

    if (res.success) {
        dispatch(showToast({ severity: "success", summary: res.message }));
        next(res.data);
    }
    dispatch(hideLoaderAction());
};
//Presets...........................................................................
const addPreset = (readyProject, data, next) => async (dispatch) => {
    dispatch(showLoaderAction());

    data.preset.products = data.preset.products.map((item) => ({ ...item, product: item?.product._id }));
    console.log(data);
    let res = await api("post", Constants.END_POINT.PRESET, { readyProject, ...data });
    console.log(res.data);
    if (res.success) {
        dispatch(showToast({ severity: "success", summary: res.message }));
        next(res.data);
    }
    dispatch(hideLoaderAction());
};

export {
    getProjects,
    getProject,
    addProject,
    editProject,
    getReadyProjects,
    getReadyProject,
    addReadyProject,
    EditReadyProject,
    addProduct,
    getOperationsTree,
    updateOperationSequence,
    addPreset,
};
