import { types } from "../types/types";
const intitalState = {
    drafts: [],
    orders: [],
};

const salesReducer = (state = intitalState, action) => {
    switch (action.type) {
        case types.CHANGE_DRAFTS:
            return {
                ...state,
                drafts: action.payload,
            };
        case types.CHANGE_ORDERS:
            return {
                ...state,
                orders: action.payload,
            };
        default:
            return { ...state };
    }
};

export default salesReducer;
