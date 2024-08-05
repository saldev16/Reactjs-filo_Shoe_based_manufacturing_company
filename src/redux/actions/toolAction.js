import api from "../../services/api";
import Constants from "../../services/constant";
import { types } from "../types/types";
import { hideLoaderAction, showLoaderAction } from "./loaderAction";
import { showToast } from "./toastAction";
import { uploadFiles, uploadImages } from "./uploadFiles";

const getTools = (setLoading) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }
    const res = await api("get", Constants.END_POINT.TOOL);
    if (res.success) {
        if (res.data) {
            dispatch({
                type: types.CHANGE_TOOLS,
                payload: res.data,
            });
        }
    }
    if (setLoading) {
        setLoading(false);
    }
};

const getTool = (id, returnData) => async (dispatch) => {
    dispatch(showLoaderAction());
    const res = await api("get", Constants.END_POINT.TOOL + id);
    if (res.success) {
        if (res.data) {
            if (returnData) {
                returnData(res.data);
            }
        }
    }
    dispatch(hideLoaderAction());
};

const addTool = (setLoading, tool, history) => async (dispatch) => {
    setLoading(true);
    tool.images = await uploadImages(tool.images);
    tool.files = await uploadFiles(tool.files);
    const payload = {
        ...tool,
        code: `${tool?.operation?.code || " "}-${tool?.toolType?.code || " "}-${tool?.season?.code || " "}-${
            tool?.classType?.code || " "
        }-${tool?.group?.code || " "}`,
        operation: tool?.operation._id,
        toolType: tool?.toolType._id,
        season: tool?.season._id,
        classType: tool?.classType._id,
        group: tool?.group._id,
    };
    const res = await api("post", Constants.END_POINT.TOOL, payload);
    if (res.success) {
        history.push("/tools");
        dispatch(showToast({ severity: "success", summary: res.message }));
    } else {
        console.console.log(res.message);
    }
    setLoading(false);
};

const editTool = (id, tool, setLoading, history) => async (dispatch) => {
    console.log(tool);

    if (setLoading) {
        setLoading(true);
    }

    let payload = { ...tool };

    const res = await api("put", Constants.END_POINT.TOOL + id, payload);
    
    if (res.success) {
        history.goBack();
        dispatch(showToast({ severity: "success", summary: res.message }));
    }

    setLoading(false);
};

const deleteTool = (id, next) => async (dispatch) => {
    const res = await api("delete", Constants.END_POINT.TOOL + id);
    if (res.success) {
        dispatch(showToast({ severity: "success", summary: res.message }));
        next();
    } else {
        dispatch(showToast({ severity: "error", summary: res.message }));
    }
};

const editSubTool = (subTool, setLoading, next) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }

    let payload = { ...subTool };

    const res = await api("put", Constants.END_POINT.SUB_TOOL + subTool?._id, payload);

    if (res.success) {
        if (setLoading) {
            setLoading(false);
        }
        next();
    }

    if (setLoading) {
        setLoading(false);
    }
};

const deleteSubTool = (id, next) => async (dispatch) => {
    const res = await api("delete", Constants.END_POINT.SUB_TOOL + id);
    if (res.success) {
        dispatch(showToast({ severity: "success", summary: res.message }));
        next();
    } else {
        dispatch(showToast({ severity: "error", summary: res.message }));
    }
};

export { getTools, getTool, editTool, addTool, deleteTool, editSubTool, deleteSubTool };
