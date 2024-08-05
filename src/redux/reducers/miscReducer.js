import { types } from "../types/types";
const intitalState = {
    departments: [
        {
            _id: "Employees",
            name: "Employees",
        },
        {
            _id: "Design",
            name: "Design",
        },
        {
            _id: "Products",
            name: "Products",
        },
        {
            _id: "Operations",
            name: "Operations",
        },
        {
            _id: "Tools",
            name: "Tools",
        },
        {
            _id: "Machines",
            name: "Machines",
        },
        {
            _id: "Replacements",
            name: "Replacements",
        },
        {
            _id: "Materials",
            name: "Materials",
        },
        {
            _id: "Customers",
            name: "Customers",
        },
        {
            _id: "Suppliers",
            name: "Suppliers",
        },
        {
            _id: "Labels",
            name: "Labels",
        },
        {
            _id: "Production",
            name: "Production",
        },
        {
            _id: "Sales",
            name: "Sales",
        },
        {
            _id: "Procurements",
            name: "Procurements",
        },
        {
            _id: "Inventory",
            name: "Inventory",
        },
    ],
    groups: [],
    classTypes: [],
    toolTypes: [],
    seasons: [],
    injectionTypes: [],
    units: [],
    tags: [],
};

const miscReducer = (state = intitalState, action) => {
    switch (action.type) {
        case types.CHANGE_GROUP_DATA:
            return {
                ...state,
                groups: action.payload,
            };
        case types.CHANGE_CLASS_TYPE_DATA:
            return {
                ...state,
                classTypes: action.payload,
            };
        case types.CHANGE_TOOL_TYPE_DATA:
            return {
                ...state,
                toolTypes: action.payload,
            };
        case types.CHANGE_SEASON_DATA:
            return {
                ...state,
                seasons: action.payload,
            };
        case types.CHANGE_INJECTION_TYPE_DATA:
            return {
                ...state,
                injectionTypes: action.payload,
            };
        case types.CHANGE_UNIT_DATA:
            return {
                ...state,
                units: action.payload,
            };
        case types.CHANGE_TAG_DATA:
            return {
                ...state,
                tags: action.payload,
            };
        default:
            return { ...state };
    }
};

export default miscReducer;
