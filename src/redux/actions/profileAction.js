import api from "../../services/api";
import Constants from "../../services/constant";
import { hideLoaderAction, showLoaderAction } from "./loaderAction";
import { showToast } from "./toastAction";
import { types } from "../types/types";

export const getProfile = () => async (dispatch) => {
    dispatch(showLoaderAction());
    const res = await api("get", Constants.END_POINT.PROFILE);
    if (res.success) {
        if (res.data) {
            dispatch({
                type: types.USER_DETAIL,
                payload: res.data,
            });
        }
    } else {
        dispatch(showToast({ severity: "warn", summary: "Error", detail: res.message }));
    }
    dispatch(hideLoaderAction());
};
