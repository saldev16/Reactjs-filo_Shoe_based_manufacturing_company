import { types } from "../types/types";
const intitalState = {
    allCategories: [],
    allMaterials: [],
};

const materialsReducer = (state = intitalState, action) => {
    switch (action.type) {
        case types.CHANGE_CATEGORY:
            return {
                ...state,
                allCategories: action.payload,
            };
        case types.CHANGE_MATERIALS:
            return {
                ...state,
                allMaterials: action.payload,
            };
        default:
            return { ...state };
    }
};

export default materialsReducer;
