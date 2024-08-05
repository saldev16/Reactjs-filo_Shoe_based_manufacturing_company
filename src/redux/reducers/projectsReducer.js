import { types } from "../types/types";
const intitalState = {
    allProjects: [],
    allReadyProjects: [],
    operationsTree: []
};

const projectsReducer = (state = intitalState, action) => {
    switch (action.type) {
        case types.CHANGE_PROJECTS:
            return {
                ...state,
                allProjects: action.payload,
            };
        case types.CHANGE_READY_PROJECTS:
            return {
                ...state,
                allReadyProjects: action.payload,
            };
        case types.GET_OPERATIONS_TREE:
            return {
                ...state,
                operationsTree: action.payload,
            }
        default:
            return { ...state };
    }
};

export default projectsReducer;
