import { types } from "../types/types";
const intitalState = {
    allCustomers: [],
};

const customersReducer = (state = intitalState, action) => {
    switch (action.type) {
        case types.CHANGE_CUSTOMERS:
            return {
                ...state,
                allCustomers: action.payload,
            };
        default:
            return { ...state };
    }
};

export default customersReducer;
