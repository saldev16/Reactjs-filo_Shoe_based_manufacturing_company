import { types } from "../types/types";
const intitalState = {
  allPermissions: [],
};

const permissionsReducer = (state = intitalState, action) => {
  switch (action.type) {
    case types.CHANGE_PERMISSIONS:
      return {
        ...state,
        allPermissions: action.payload,
      };
    default:
      return { ...state };
  }
};

export default permissionsReducer;
