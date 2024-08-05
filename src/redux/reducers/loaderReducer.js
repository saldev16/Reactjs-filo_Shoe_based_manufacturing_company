import { types } from "../types/types";
const initialBoard = {
    isLoading: false,
    isSideLoading: false,
};

const loaderReducer = (state = initialBoard, action) => {
    switch (action.type) {
        case types.SHOW_LOADER:
            return { isLoading: true };
        case types.SHOW_SIDEBAR_LOADER:
            return { isSideLoading: true };
        case types.HIDE_LOADER:
            return { isLoading: false };
        case types.HIDE_SIDEBAR_LOADER:
            return { isSideLoading: false };
        default:
            return { ...state };
    }
};

export default loaderReducer;
