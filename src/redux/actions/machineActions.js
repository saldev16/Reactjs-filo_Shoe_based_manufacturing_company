import api from "../../services/api";
import Constants from "../../services/constant";
// import { getTime } from "../../utils/dateConversions";
import { types } from "../types/types";
import { showToast } from "./toastAction";
import { uploadFiles, uploadImages } from "./uploadFiles";

export const getMachines = (setLoading) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }
    const res = await api("get", Constants.END_POINT.MACHINE);
    if (res.success) {
        if (res.data) {
            dispatch({
                type: types.CHANGE_MACHINES,
                payload: res.data,
            });
        }
    }
    if (setLoading) {
        setLoading(false);
    }
};

export const addMachines = (data, setLoading, history) => async (dispatch) => {
    setLoading(true);
    let operation = data.operation._id;
    let code = data.operation.code;
    data.images = await uploadImages(data.images);
    data.files = await uploadFiles(data.files);

    // data.startTime = getTime(data.startTime);
    // data.endTime = getTime(data.endTime);
    const res = await api("post", Constants.END_POINT.MACHINE, { ...data, operation, code });
    if (res.success) {
        history.goBack();
        dispatch(showToast({ severity: "success", summary: res.message }));
    } else {
        dispatch(showToast({ severity: "error", summary: res.message }));
    }
    setLoading(false);
};
