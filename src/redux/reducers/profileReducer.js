import { types } from "../types/types";
const intitalState = {
    userProfile: {},
};

const profileReducer = (state = intitalState, action) => {
    switch (action.type) {
        case types.USER_DETAIL:
            return {
                ...state,
                userProfile: action.payload,
            };
        default:
            return { ...state };
    }
};

export default profileReducer;
