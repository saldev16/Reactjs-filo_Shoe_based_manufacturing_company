import Api from "../../services/api";
import Constants from "../../services/constant";
import { types } from "../types/types";

export const getPermissions = () => async (dispatch) => {
  const res = await Api("get", Constants.END_POINT.GET_PERMISSIONS);
  if (res.success) {
    if (res.data) {
      dispatch({
        type: types.CHANGE_PERMISSIONS,
        payload: res.data,
      });
    }
  }
};
