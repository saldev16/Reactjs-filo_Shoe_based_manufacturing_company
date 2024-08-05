import api from "../../services/api";
import Constants from "../../services/constant";
import { types } from "../types/types";
import { hideLoaderAction, showLoaderAction } from "./loaderAction";
import { showToast } from "./toastAction";
import { uploadImages } from "./uploadFiles";

const getCustomers = (setLoading) => async (dispatch) => {
  if (setLoading) {
    setLoading(true);
  }
  const res = await api("get", Constants.END_POINT.CUSTOMER);
  if (res.success) {
    if (res.data) {
      dispatch({
        type: types.CHANGE_CUSTOMERS,
        payload: res.data,
      });
    }
  }
  if (setLoading) {
    setLoading(false);
  }
};

const getCustomer = (id, returnData) => async (dispatch) => {
  dispatch(showLoaderAction());
  const res = await api("get", Constants.END_POINT.CUSTOMER + id);
  if (res.success) {
    dispatch(hideLoaderAction());
    if (res.data) {
      if (returnData) {
        returnData(res.data);
      }
    }
  }
  dispatch(hideLoaderAction());
};

const addCustomer = (customer, setLoading, history) => async (dispatch) => {
  setLoading(true);

  if (customer.image.length) {
    customer.image = await uploadImages(customer.image);
    customer.image = customer.image[0];
  } else {
    customer.image = "";
  }

  const payload = {
    ...customer,
    name: customer.fullName,
    type: customer.type.value,
    jobPosition: customer.jobPositions,
  };

  const res = await api("post", Constants.END_POINT.CUSTOMER, payload);
  if (res.success) {
    history.goBack();
    dispatch(showToast({ severity: "success", summary: res.message }));
  }
  setLoading(false);
};

const editCustomer =
  (id, customer, setLoading, history) => async (dispatch) => {
    setLoading(true);

    if (customer.image.length) {
      customer.image = await uploadImages(customer.image);
      customer.image = customer.image[0];
    } else {
      customer.image = "";
    }

    const payload = {
      ...customer,
      name: customer.fullName,
      type: customer.type.value,
      jobPosition: customer.jobPositions,
    };

    const res = await api("put", Constants.END_POINT.CUSTOMER + id, payload);
    if (res.success) {
      history.goBack();
      dispatch(showToast({ severity: "success", summary: res.message }));
    }
    setLoading(false);
  };

const deleteCustomer = (id) => async (dispatch) => {
  const res = await api("delete", Constants.END_POINT.CUSTOMER + id);
  if (res.success) {
    dispatch(getCustomers());
    dispatch(showToast({ severity: "success", summary: res.message }));
  } else {
    dispatch(showToast({ severity: "error", summary: res.message }));
  }
};

export { getCustomers, getCustomer, addCustomer, editCustomer, deleteCustomer };
