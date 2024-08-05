import { types } from "../types/types";
const intitalState = {
    employees: [],
};

const employeeReducer = (state = intitalState, action) => {
    switch (action.type) {
        case types.ALL_EMPLOYEES:
            return {
                ...state,
                employees: action.payload,
            };
        case types.CHANGE_EMPLOYEE_DATA:
            return {
                ...state,
                employee: action.payload,
            };
        default:
            return { ...state };
    }
};

export default employeeReducer;
