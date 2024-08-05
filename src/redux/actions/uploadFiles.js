import api from "../../services/api";
import Constants from "../../services/constant";

export const uploadFiles = async (files) => {
    const promises = files.map(async (item) => {
        if (item.path) {
            return item;
        } else {
            const formData = new FormData();
            formData.append("files", item);
            const res = await api("post", Constants.END_POINT.UPLOAD_FILES, formData);
            if (res.success && res.data) {
                return res.data[0];
            }
        }
    });

    const filesArray = await Promise.all(promises);
    return filesArray;
};

export const uploadImages = async (images) => {
    const promises = images.map(async (item) => {
        if (typeof item === "string") {
            return item;
        } else {
            const formData = new FormData();
            formData.append("files", item);
            const res = await api("post", Constants.END_POINT.UPLOAD_FILES, formData);
            if (res.success && res.data) {
                return res.data[0].path;
            }
        }
    });

    const urls = await Promise.all(promises);
    return urls;
};
