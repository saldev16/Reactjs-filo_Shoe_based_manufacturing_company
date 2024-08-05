import api from "../../services/api";
import Constants from "../../services/constant";
import { types } from "../types/types";
import { hideLoaderAction, showLoaderAction } from "./loaderAction";
import { showToast } from "./toastAction";
import { uploadFiles, uploadImages } from "./uploadFiles";

const getReplacements = (setLoading) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }

    const res = await api("get", Constants.END_POINT.REPLACEMENT);
    if (res.success) {
        if (res.data) {
            dispatch({
                type: types.CHANGE_REPLACEMENTS,
                payload: res.data,
            });
        }
    }
    if (setLoading) {
        setLoading(false);
    }
};

const addReplacement = (replacement, setLoading, history) => async (dispatch) => {
    setLoading(true);

    replacement.images = await uploadImages(replacement.images);
    replacement.files = await uploadFiles(replacement.files);

    const payload = {
        ...replacement,
        supplier: replacement?.supplier._id,
        machines: replacement?.machines.map((item) => item?._id),
    };
    const res = await api("post", Constants.END_POINT.REPLACEMENT, payload);
    if (res.success) {
        history.goBack();
        dispatch(showToast({ severity: "success", summary: res.message }));
    } else {
        console.console.log(res.message);
    }
    setLoading(false);
};

const editReplacement = (id, replacement, setLoading, history) => async (dispatch) => {
    setLoading(true);

    replacement.images = await uploadImages(replacement.images);
    replacement.files = await uploadFiles(replacement.files);
    const payload = {
        ...replacement,
        supplier: replacement?.supplier._id,
        machines: replacement?.machines.map((item) => item?._id),
    };
    const res = await api("put", Constants.END_POINT.REPLACEMENT + id, payload);
    if (res.success) {
        history.goBack();
        dispatch(showToast({ severity: "success", summary: res.message }));
    } else {
        dispatch(showToast({ severity: "error", summary: res.message }));
    }
    setLoading(false);
};

const getReplacement = (id, returnData) => async (dispatch) => {
    dispatch(showLoaderAction());
    const res = await api("get", Constants.END_POINT.REPLACEMENT + id);
    if (res.success) {
        if (res.data) {
            if (returnData) {
                returnData(res.data);
            }
        }
    }
    dispatch(hideLoaderAction());
};

const deleteReplacement = (id) => async (dispatch) => {
    const res = await api("delete", Constants.END_POINT.REPLACEMENT + id);
    if (res.success) {
        dispatch(getReplacements(() => {}));
        dispatch(showToast({ severity: "success", summary: res.message }));
    } else {
        dispatch(showToast({ severity: "error", summary: res.message }));
    }
};
export { getReplacements, addReplacement, getReplacement, editReplacement, deleteReplacement };
