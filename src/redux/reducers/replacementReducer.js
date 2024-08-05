import { types } from "../types/types";
const intitalState = {
    allReplacements: [],
};

const replacementReducer = (state = intitalState, action) => {
    switch (action.type) {
        case types.CHANGE_REPLACEMENTS:
            return {
                ...state,
                allReplacements: action.payload,
            };
        default:
            return { ...state };
    }
};

export default replacementReducer;
