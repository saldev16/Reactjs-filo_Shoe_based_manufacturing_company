import { types } from "../types/types";
const intitalState = {
    allMachines: [],
};

const machinesReducer = (state = intitalState, action) => {
    switch (action.type) {
        case types.CHANGE_MACHINES:
            return {
                ...state,
                allMachines: action.payload,
            };
        default:
            return { ...state };
    }
};

export default machinesReducer;
