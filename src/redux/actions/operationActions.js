import api from "../../services/api";
import Constants from "../../services/constant";
import { hideLoaderAction, showLoaderAction } from "./loaderAction";
import { types } from "../types/types";
import { showToast } from "./toastAction";

const getOperations = (setLoading) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }

    const res = await api("get", Constants.END_POINT.OPERATION);
    if (res.success) {
        if (res.data) {
            dispatch({
                type: types.CHANGE_OPERATIONS,
                payload: res.data,
            });
        }
    }
    if (setLoading) {
        setLoading(false);
    }
};

const getOperation = (id, returnData) => async (dispatch) => {
    dispatch(showLoaderAction());
    const res = await api("get", Constants.END_POINT.OPERATION + id);
    if (res.success) {
        if (res.data) {
            if (returnData) {
                returnData(res.data);
            }
        }
    }
    dispatch(hideLoaderAction());
};

const addOperation = (data, setLoading, history) => async (dispatch) => {
    setLoading(true);

    data.expertise = data.expertise.map((item) => ({ name: item }));
    const res = await api("post", Constants.END_POINT.OPERATION, data);
    if (res.success) {
        history.goBack();
        dispatch(showToast({ severity: "success", summary: res.message }));
    } else {
        dispatch(showToast({ severity: "error", summary: res.message }));
    }
    setLoading(false);
};
const editOperation = (id, data, setLoading, history) => async (dispatch) => {
    setLoading(true);
    data.expertise = data.expertise.map((item) => ({ name: item }));
    const res = await api("put", Constants.END_POINT.OPERATION + id, data);
    if (res.success) {
        history.goBack();
        dispatch(showToast({ severity: "success", summary: res.message }));
    } else {
        dispatch(showToast({ severity: "error", summary: res.message }));
    }
    setLoading(false);
};

const deleteOperation = (id) => async (dispatch) => {
    const res = await api("delete", Constants.END_POINT.OPERATION + id);
    if (res.success) {
        dispatch(getOperations(() => {}));
        dispatch(showToast({ severity: "success", summary: res.message }));
    } else {
        dispatch(showToast({ severity: "error", summary: res.message }));
    }
};

export { getOperations, addOperation, editOperation, getOperation, deleteOperation };
