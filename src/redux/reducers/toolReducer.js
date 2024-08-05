import { types } from "../types/types";
const intitalState = {
    allTools: [],
};

const toolsReducer = (state = intitalState, action) => {
    switch (action.type) {
        case types.CHANGE_TOOLS:
            return {
                ...state,
                allTools: action.payload,
            };
        default:
            return { ...state };
    }
};

export default toolsReducer;
