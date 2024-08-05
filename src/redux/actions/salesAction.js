// import api from "../../services/api";
// import Constants from "../../services/constant";
import { types } from "../types/types";

const getDrafts = (setLoading) => async (dispatch) => {
    if (setLoading) {
        setLoading(true);
    }
    // const res = await api("get", Constants.END_POINT.CUSTOMER);
    // if (res.success) {
    //     if (res.data) {
    //         dispatch({
    //             type: types.CHANGE_DRAFTS,
    //             payload: [{

    //             }],
    //         });
    //     }
    // }
    setTimeout(() => {
        dispatch({
            type: types.CHANGE_DRAFTS,
            payload: [
                {
                    code: "code",
                    recipientName: "recipientName",
                    dateOfIssue: "dateOfIssue",
                    deadline: "deadline",
                    paymentTerms: "paymentTerms",
                    qty: "qty",
                    price: "price",
                    customPreset: "customPreset",
                    participants: "participants",
                    status: "status",
                    priority: "priority",
                },
            ],
        });
    }, 2000);
    if (setLoading) {
        setLoading(false);
    }
};

export { getDrafts };
