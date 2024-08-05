import api from "../../services/api";
import Constants from "../../services/constant";
import { types } from "../types/types";
import { hideLoaderAction, showLoaderAction } from "./loaderAction";
import { showToast } from "./toastAction";

export const getGroups = (setLoading) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }
    const res = await api("get", Constants.END_POINT.GROUP);
    if (res.success) {
        if (res.data) {
            dispatch({
                type: types.CHANGE_GROUP_DATA,
                payload: res.data,
            });
        }
    }
    if (setLoading) {
        setLoading(false);
    }
};

export const getGroup = (id, returnData) => async (dispatch) => {
    dispatch(showLoaderAction());
    const res = await api("get", Constants.END_POINT.GROUP + id);
    if (res.success) {
        if (res.data) {
            if (returnData) {
                returnData(res.data);
            }
        }
    }
    dispatch(hideLoaderAction());
};

export const addGroup = (group, setLoading, history) => async (dispatch) => {
    setLoading(true);

    const payload = {
        ...group,
        code: group.code,
        name: group.name,
    };

    const res = await api("post", Constants.END_POINT.GROUP, payload);
    if (res.success) {
        history.goBack();
        dispatch(showToast({ severity: "success", summary: res.message }));
    }
    setLoading(false);
};

export const editGroup = (id, group, setLoading, history) => async (dispatch) => {
    setLoading(true);

    const payload = {
        ...group,
        code: group.code,
        name: group.name,
    };
    const res = await api("put", Constants.END_POINT.GROUP + id, payload);
    if (res.success) {
        history.goBack();
        dispatch(showToast({ severity: "success", summary: res.message }));
    }
    setLoading(false);
};

export const deleteGroup = (id) => async (dispatch) => {
    const res = await api("delete", Constants.END_POINT.GROUP + id);
    if (res.success) {
        dispatch(getGroups());
        dispatch(showToast({ severity: "success", summary: res.message }));
    } else {
        dispatch(showToast({ severity: "error", summary: res.message }));
    }
};

export const getSeasons = (setLoading) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }
    const res = await api("get", Constants.END_POINT.SEASON);
    if (res.success) {
        if (res.data) {
            dispatch({
                type: types.CHANGE_SEASON_DATA,
                payload: res.data,
            });
        }
    }

    if (setLoading) {
        setLoading(false);
    }
};

export const getSeason = (id, returnData) => async (dispatch) => {
    dispatch(showLoaderAction());
    const res = await api("get", Constants.END_POINT.SEASON + id);
    if (res.success) {
        if (res.data) {
            if (returnData) {
                returnData(res.data);
            }
        }
    }
    dispatch(hideLoaderAction());
};

export const addSeason = (season, setLoading, history) => async (dispatch) => {
    setLoading(true);

    const payload = {
        ...season,
        code: season.code,
        name: season.name,
    };

    const res = await api("post", Constants.END_POINT.SEASON, payload);
    if (res.success) {
        history.goBack();
        dispatch(showToast({ severity: "success", summary: res.message }));
    }
    setLoading(false);
};

export const editSeason = (id, season, setLoading, history) => async (dispatch) => {
    setLoading(true);

    const payload = {
        ...season,
        code: season.code,
        name: season.name,
    };
    const res = await api("put", Constants.END_POINT.SEASON + id, payload);
    if (res.success) {
        history.goBack();
        dispatch(showToast({ severity: "success", summary: res.message }));
    }
    setLoading(false);
};

export const deleteSeason = (id) => async (dispatch) => {
    const res = await api("delete", Constants.END_POINT.SEASON + id);
    if (res.success) {
        dispatch(getSeasons());
        dispatch(showToast({ severity: "success", summary: res.message }));
    } else {
        dispatch(showToast({ severity: "error", summary: res.message }));
    }
};

export const getToolTypes = (setLoading) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }
    const res = await api("get", Constants.END_POINT.TOOL_TYPE);
    if (res.success) {
        if (res.data) {
            dispatch({
                type: types.CHANGE_TOOL_TYPE_DATA,
                payload: res.data,
            });
        }
    }
    if (setLoading) {
        setLoading(false);
    }
};

export const getToolType = (id, returnData) => async (dispatch) => {
    dispatch(showLoaderAction());
    const res = await api("get", Constants.END_POINT.TOOL_TYPE + id);
    if (res.success) {
        if (res.data) {
            if (returnData) {
                returnData(res.data);
            }
        }
    }
    dispatch(hideLoaderAction());
};

export const addToolType = (toolType, setLoading, history) => async (dispatch) => {
    setLoading(true);

    const payload = {
        ...toolType,
        code: toolType.code,
        name: toolType.name,
    };

    const res = await api("post", Constants.END_POINT.TOOL_TYPE, payload);
    if (res.success) {
        history.goBack();
        dispatch(showToast({ severity: "success", summary: res.message }));
    }
    setLoading(false);
};

export const editToolType = (id, toolType, setLoading, history) => async (dispatch) => {
    setLoading(true);

    const payload = {
        ...toolType,
        code: toolType.code,
        name: toolType.name,
    };
    const res = await api("put", Constants.END_POINT.TOOL_TYPE + id, payload);
    if (res.success) {
        history.goBack();
        dispatch(showToast({ severity: "success", summary: res.message }));
    }
    setLoading(false);
};

export const deleteToolType = (id) => async (dispatch) => {
    const res = await api("delete", Constants.END_POINT.TOOL_TYPE + id);
    if (res.success) {
        dispatch(getToolTypes());
        dispatch(showToast({ severity: "success", summary: res.message }));
    } else {
        dispatch(showToast({ severity: "error", summary: res.message }));
    }
};

export const getClassTypes = (setLoading) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }
    const res = await api("get", Constants.END_POINT.CLASS_TYPE);
    if (res.success) {
        if (res.data) {
            dispatch({
                type: types.CHANGE_CLASS_TYPE_DATA,
                payload: res.data,
            });
        }
    }

    if (setLoading) {
        setLoading(false);
    }
};

export const getClassType = (id, returnData) => async (dispatch) => {
    dispatch(showLoaderAction());
    const res = await api("get", Constants.END_POINT.CLASS_TYPE + id);
    if (res.success) {
        if (res.data) {
            if (returnData) {
                returnData(res.data);
            }
        }
    }
    dispatch(hideLoaderAction());
};

export const addClassType = (classType, setLoading, history) => async (dispatch) => {
    setLoading(true);

    const payload = {
        ...classType,
        code: classType.code,
        name: classType.name,
    };

    const res = await api("post", Constants.END_POINT.CLASS_TYPE, payload);
    if (res.success) {
        history.goBack();
        dispatch(showToast({ severity: "success", summary: res.message }));
    }
    setLoading(false);
};

export const editClassType = (id, classType, setLoading, history) => async (dispatch) => {
    setLoading(true);

    const payload = {
        ...classType,
        code: classType.code,
        name: classType.name,
    };
    const res = await api("put", Constants.END_POINT.CLASS_TYPE + id, payload);
    if (res.success) {
        history.goBack();
        dispatch(showToast({ severity: "success", summary: res.message }));
    }
    setLoading(false);
};

export const deleteClassType = (id) => async (dispatch) => {
    const res = await api("delete", Constants.END_POINT.CLASS_TYPE + id);
    if (res.success) {
        dispatch(getClassTypes());
        dispatch(showToast({ severity: "success", summary: res.message }));
    } else {
        dispatch(showToast({ severity: "error", summary: res.message }));
    }
};

export const getInjectionTypes = (setLoading) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }
    const res = await api("get", Constants.END_POINT.INJECTION_TYPE);
    if (res.success) {
        if (res.data) {
            dispatch({
                type: types.CHANGE_INJECTION_TYPE_DATA,
                payload: res.data,
            });
        }
    }
    if (setLoading) {
        setLoading(false);
    }
};

export const getInjectionType = (id, returnData) => async (dispatch) => {
    dispatch(showLoaderAction());
    const res = await api("get", Constants.END_POINT.INJECTION_TYPE + id);
    if (res.success) {
        if (res.data) {
            if (returnData) {
                returnData(res.data);
            }
        }
    }
    dispatch(hideLoaderAction());
};

export const addInjectionType = (injectionType, setLoading, history) => async (dispatch) => {
    setLoading(true);

    const payload = {
        ...injectionType,
        code: injectionType.code,
        name: injectionType.name,
    };

    const res = await api("post", Constants.END_POINT.INJECTION_TYPE, payload);
    if (res.success) {
        history.goBack();
        dispatch(showToast({ severity: "success", summary: res.message }));
    }
    setLoading(false);
};

export const editInjectionType = (id, injectionType, setLoading, history) => async (dispatch) => {
    setLoading(true);

    const payload = {
        ...injectionType,
        code: injectionType.code,
        name: injectionType.name,
    };
    const res = await api("put", Constants.END_POINT.INJECTION_TYPE + id, payload);
    if (res.success) {
        history.goBack();
        dispatch(showToast({ severity: "success", summary: res.message }));
    }
    setLoading(false);
};

export const deleteInjectionType = (id) => async (dispatch) => {
    const res = await api("delete", Constants.END_POINT.INJECTION_TYPE + id);
    if (res.success) {
        dispatch(getInjectionTypes());
        dispatch(showToast({ severity: "success", summary: res.message }));
    } else {
        dispatch(showToast({ severity: "error", summary: res.message }));
    }
};

const getUnits = (setLoading) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }

    const res = await api("get", Constants.END_POINT.UNIT);
    if (res.success) {
        if (res.data) {
            dispatch({
                type: types.CHANGE_UNIT_DATA,
                payload: res.data,
            });
        }
    }

    if (setLoading) {
        setLoading(false);
    }
};

const getUnit = (id, returnData) => async (dispatch) => {
    dispatch(showLoaderAction());
    const res = await api("get", Constants.END_POINT.UNIT + id);
    if (res.success) {
        if (res.data) {
            if (returnData) {
                returnData(res.data);
            }
        }
    }
    dispatch(hideLoaderAction());
};

const addUnit = (unit, setLoading, history) => async (dispatch) => {
    setLoading(true);

    const payload = {
        ...unit,
        name: unit.name,
    };

    const res = await api("post", Constants.END_POINT.UNIT, payload);
    if (res.success) {
        history.goBack();
        dispatch(showToast({ severity: "success", summary: res.message }));
    }
    setLoading(false);
};

const editUnit = (id, unit, setLoading, history) => async (dispatch) => {
    setLoading(true);

    const payload = {
        ...unit,
        name: unit.name,
    };
    const res = await api("put", Constants.END_POINT.UNIT + id, payload);
    if (res.success) {
        history.goBack();
        dispatch(showToast({ severity: "success", summary: res.message }));
    }
    setLoading(false);
};

const deleteUnit = (id) => async (dispatch) => {
    const res = await api("delete", Constants.END_POINT.UNIT + id);
    if (res.success) {
        dispatch(getUnits());
        dispatch(showToast({ severity: "success", summary: res.message }));
    } else {
        dispatch(showToast({ severity: "error", summary: res.message }));
    }
};
//............................Tags....................
const getTags = (setLoading) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }
    const res = await api("get", Constants.END_POINT.TAG);
    if (res.success) {
        if (res.data) {
            dispatch({
                type: types.CHANGE_TAG_DATA,
                payload: res.data,
            });
        }
    }
    if (setLoading) {
        setLoading(false);
    }
};

const getTag = (id, returnData) => async (dispatch) => {
    dispatch(showLoaderAction());
    const res = await api("get", Constants.END_POINT.TAG + id);
    if (res.success) {
        if (res.data) {
            if (returnData) {
                returnData(res.data);
            }
        }
    }
    dispatch(hideLoaderAction());
};

const addTag = (tag, setLoading, history) => async (dispatch) => {
    setLoading(true);
    const payload = {
        name: tag.name,
    };

    const res = await api("post", Constants.END_POINT.TAG, payload);
    if (res.success) {
        history.goBack();
        dispatch(showToast({ severity: "success", summary: res.message }));
    }
    setLoading(false);
};

const editTag = (id, tag, setLoading, history) => async (dispatch) => {
    setLoading(true);

    const payload = {
        ...tag,
        name: tag.name,
    };
    const res = await api("put", Constants.END_POINT.TAG + id, payload);
    if (res.success) {
        history.goBack();
        dispatch(showToast({ severity: "success", summary: res.message }));
    }
    setLoading(false);
};

const deleteTag = (id) => async (dispatch) => {
    const res = await api("delete", Constants.END_POINT.TAG + id);
    if (res.success) {
        dispatch(getTags());
        dispatch(showToast({ severity: "success", summary: res.message }));
    } else {
        dispatch(showToast({ severity: "error", summary: res.message }));
    }
};

export { getUnits, getUnit, addUnit, editUnit, deleteUnit, getTags, getTag, addTag, editTag, deleteTag };
