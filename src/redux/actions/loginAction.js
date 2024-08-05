import api from "../../services/api";
import Constants from "../../services/constant";
import { authenticate, isAuthenticated } from "../../services/auth";
import { types } from "../types/types";

export const loginAction = (data, setLoading, history) => async (dispatch) => {
  setLoading(true);
  const res = await api("post", Constants.END_POINT.LOGIN, data);
  if (res.success) {
    if (res.data) {
      dispatch({
        type: types.USER_DETAIL,
        payload: res.data,
      });
      authenticate(res.data.token, () => {
        if (isAuthenticated()) {
          history.push("/dashboard");
        }
        if (!isAuthenticated) {
          history.push("/");
        }
      });
    }
  } else {
    alert(res.message);
  }
  setLoading(false);
};
