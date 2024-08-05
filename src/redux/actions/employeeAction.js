import api from "../../services/api";
import Constants from "../../services/constant";
import { hideLoaderAction, showLoaderAction } from "./loaderAction";
import { types } from "../types/types";
import { convertToBackendPermissions } from "../../utils/permissions";
import { getDate } from "../../utils/dateConversions";

import { uploadFiles, uploadImages } from "./uploadFiles";
import { showToast } from "./toastAction";

const getEmployees = (setLoading) => async (dispatch) => {
  setLoading(true);
  const res = await api("get", Constants.END_POINT.EMPLOYEE);
  if (res.success) {
    if (res.data) {
      dispatch({
        type: types.ALL_EMPLOYEES,
        payload: res.data,
      });
    }
  }
  setLoading(false);
};
const getEmployee = (id, returnData) => async (dispatch) => {
  dispatch(showLoaderAction());
  const res = await api("get", Constants.END_POINT.EMPLOYEE + id);
  if (res.success) {
    if (res.data) {
      if (returnData) {
        returnData(res.data);
      }
    }
  }
  dispatch(hideLoaderAction());
};

const addEmployee =
  (employee, selectedPermissions, setLoading, history) =>
  async (dispatch, getState) => {
    setLoading(true);
    const state = getState();
    const { allPermissions } = state.permissions;

    const permissions = await convertToBackendPermissions(
      allPermissions,
      selectedPermissions
    );

    if (employee.image.length) {
      employee.image = await uploadImages(employee.image);
      employee.image = employee.image[0];
    } else {
      employee.image = "";
    }
    employee.files = await uploadFiles(employee.files);

    const payload = {
      ...employee,
      password: "Employee@1234",
      expertise: employee?.expertise?.map((v) => v._id),
      department: employee?.department?._id || "",
      // operation: employee?.operation?._id || "",
      jobPosition: employee?.jobPosition?._id || "",
      machine: employee?.machine?._id || "",
      product: employee?.product?.name || "",
      dob: employee?.dob ? getDate(employee?.dob) : "",
      permissions,
      rawPermissions: selectedPermissions,
    };

    const res = await api("post", Constants.END_POINT.EMPLOYEE, payload);
    if (res.success) {
      history.goBack();
      dispatch(showToast({ severity: "success", summary: res.message }));
    }
    setLoading(false);
  };

const editEmployee =
  (id, employee, selectedPermissions, setLoading, history) =>
  async (dispatch, getState) => {
    setLoading(true);
    const state = getState();

    const { allPermissions } = state.permissions;

    const permissions = await convertToBackendPermissions(
      allPermissions,
      selectedPermissions
    );

    if (employee.image.length) {
      employee.image = await uploadImages(employee.image);
      employee.image = employee.image[0];
    } else {
      employee.image = "";
    }
    employee.files = await uploadFiles(employee.files);

    const payload = {
      ...employee,
      expertise: employee?.expertise?.map((v) => v._id),
      department: employee?.department?._id || "",
      // operation: employee?.operation?._id || "",
      jobPosition: employee?.jobPosition?._id || "",
      machine: employee?.machine?._id || "",
      product: employee?.product?.name || "",
      dob: employee?.dob ? getDate(employee?.dob) : "",
      permissions,
      rawPermissions: selectedPermissions,
    };

    delete payload.password;
    const res = await api("put", Constants.END_POINT.EMPLOYEE + id, payload);
    if (res.success) {
      history.goBack();
      dispatch(showToast({ severity: "success", summary: res.message }));
    }
    setLoading(false);
  };

const deleteEmployee = (id) => async (dispatch) => {
  const res = await api("delete", Constants.END_POINT.EMPLOYEE + id);
  if (res.success) {
    dispatch(getEmployees(() => {}));
    dispatch(showToast({ severity: "success", summary: res.message }));
  } else {
    dispatch(showToast({ severity: "error", summary: res.message }));
  }
};

const getEmployeeLogs = (id, setLoading, returnData) => async (dispatch) => {
  setLoading(true);
  const res = await api("get", Constants.END_POINT.EMPLOYEE_LOG + id);
  if (res.success) {
    if (res.data) {
      if (returnData) {
        returnData(res.data);
      }
    }
  }
  setLoading(false);
};

export {
  getEmployees,
  getEmployee,
  addEmployee,
  editEmployee,
  deleteEmployee,
  getEmployeeLogs,
};
