import { types } from "../types/types";
const intitalState = {
    allOperations: [],
};

const operationsReducer = (state = intitalState, action) => {
    switch (action.type) {
        case types.CHANGE_OPERATIONS:
            return {
                ...state,
                allOperations: action.payload,
            };
        default:
            return { ...state };
    }
};

export default operationsReducer;
