import { types } from "../types/types";
const intitalState = {
    allSuppliers: [],
};

const supplierReducer = (state = intitalState, action) => {
    switch (action.type) {
        case types.CHANGE_SUPPLIERS:
            return {
                ...state,
                allSuppliers: action.payload,
            };
        default:
            return { ...state };
    }
};

export default supplierReducer;
