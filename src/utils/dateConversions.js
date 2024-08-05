import moment from "moment";
export const getDate = (date) => {
    return moment(new Date(date)).format("DD/MM/YYYY");
};

export const getTime = (date) => {
    return moment(new Date(date)).format("H:mm");
};
