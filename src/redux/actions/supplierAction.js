import api from "../../services/api";
import Constants from "../../services/constant";
import { types } from "../types/types";
import { hideLoaderAction, showLoaderAction } from "./loaderAction";
import { showToast } from "./toastAction";
import { uploadImages } from "./uploadFiles";

const getSuppliers = (setLoading) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }
    const res = await api("get", Constants.END_POINT.SUPPLIER);
    if (res.success) {
        if (res.data) {
            dispatch({
                type: types.CHANGE_SUPPLIERS,
                payload: res.data,
            });
        }
    }
    if (setLoading) {
        setLoading(false);
    }
};

const getSupplier = (id, returnData) => async (dispatch) => {
    dispatch(showLoaderAction());
    const res = await api("get", Constants.END_POINT.SUPPLIER + id);
    if (res.success) {
        if (res.data) {
            if (returnData) {
                returnData(res.data);
            }
        }
    }
    dispatch(hideLoaderAction());
};

const addSupplier = (supplier, setLoading, history) => async (dispatch) => {
    setLoading(true);

    if (supplier.image.length) {
        supplier.image = await uploadImages(supplier.image);
        supplier.image = supplier.image[0];
    } else {
        supplier.image = "";
    }

    const payload = {
        ...supplier,
        name: supplier.fullName,

        type: supplier.type.value,
        jobPosition: supplier.jobPositions,
    };

    const res = await api("post", Constants.END_POINT.SUPPLIER, payload);
    if (res.success) {
        history.goBack();
        dispatch(showToast({ severity: "success", summary: res.message }));
    }
    setLoading(false);
};

const editSupplier = (id, supplier, setLoading, history) => async (dispatch) => {
    setLoading(true);

    if (supplier.image.length) {
        supplier.image = await uploadImages(supplier.image);
        supplier.image = supplier.image[0];
    } else {
        supplier.image = "";
    }

    const payload = {
        ...supplier,
        name: supplier.fullName,
        type: supplier.type.value,
        jobPosition: supplier.jobPositions,
    };

    const res = await api("put", Constants.END_POINT.SUPPLIER + id, payload);
    if (res.success) {
        history.goBack();
        dispatch(showToast({ severity: "success", summary: res.message }));
    }
    setLoading(false);
};

const deleteSupplier = (id) => async (dispatch) => {
    const res = await api("delete", Constants.END_POINT.SUPPLIER + id);
    if (res.success) {
        dispatch(getSuppliers());
        dispatch(showToast({ severity: "success", summary: res.message }));
    } else {
        dispatch(showToast({ severity: "error", summary: res.message }));
    }
};

export { getSuppliers, getSupplier, addSupplier, editSupplier, deleteSupplier };
