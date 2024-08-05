import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addEmployee,
  editEmployee,
  getEmployee,
} from "../../../redux/actions/employeeAction";
import { getMachines } from "../../../redux/actions/machineActions";
import { getOperations } from "../../../redux/actions/operationActions";
import { getPermissions } from "../../../redux/actions/permissionAction";
import { allValidations } from "../../../utils/formValidations";
import { showFormErrors } from "../../../utils/commonFunctions";
import { showToast } from "../../../redux/actions/toastAction";

export default function EmployeeContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPermissions());
    dispatch(getMachines());
    dispatch(getOperations(() => {}));
  }, [dispatch]);
  const { allOperations } = useSelector((state) => state?.operations);
  const { allMachines } = useSelector((state) => state?.machines);
  const { departments } = useSelector((state) => state?.misc);
  //If using to View or edit
  useEffect(() => {
    if (id) {
      dispatch(
        getEmployee(id, (emp) => {
          console.log("emp===>", emp);
          emp.dob = new Date(emp.dob);
          emp.department = departments.find(
            (item) => item._id === emp.department
          );
          emp.image = emp.image ? [emp.image] : [];
          emp.pricing = { name: "Monthly", _id: "MONTHLY" };
          setEmployee(emp);
          setSelectedPermissions(emp.rawPermissions);
        })
      );
    }
  }, [id, dispatch, departments]);

  const Departments = [...departments];
  const Machines = [
    ...allMachines.map((item) => ({ _id: item._id, name: item.name })),
  ];

  const pricingTypes = [
    { name: "Monthly", _id: "MONTHLY" },
    { name: "By Item", _id: "BY_ITEM" },
  ];

  const [formType, setFormType] = useState("ADD");
  const [employee, setEmployee] = useState({
    pricing: { name: "Monthly", _id: "MONTHLY" },
    email: "",
    firstName: "",
    lastName: "",
    image: [],
    files: [],
    dob: "",
    address: "",
    countryCode: "",
    mobile: "",
    expertise: [],
    expertiseRaw: [],
    description: "",
    department: {},
    // operation: {},
    jobPosition: {},
    machine: {},
    salary: 0,
    permissions: [],
    product: [],
    process: "",
    price: "",
    productionPerHour: "",
  });

  const [selectedPermissions, setSelectedPermissions] = useState({});

  const [loading, setLoading] = useState(false);

  const handleChange = ({ name, value }) => {
    if (formType === "ADD" || formType === "EDIT") {
      const formErrors = allValidations(name, value, employee);
      if (name === "operation") {
        setEmployee((prev) => ({
          ...prev,
          [name]: value,
          jobPosition: {},
          expertise: [],
          formErrors,
        }));
      } else if (name === "pricing") {
        setEmployee((prev) => ({
          ...prev,
          [name]: value,
          salary: 0,
          product: [],
          process: "",
          price: "",
          productionPerHour: "",
          formErrors,
        }));
      } else {
        setEmployee((prev) => ({ ...prev, [name]: value, formErrors }));
      }
    }
  };

  const onSubmit = () => {
    if (formType === "ADD" || formType === "EDIT") {
      if (showFormErrors(employee, setEmployee)) {
        if (Object.keys(selectedPermissions).length) {
          if (formType === "ADD") {
            dispatch(
              addEmployee(employee, selectedPermissions, setLoading, history)
            );
          } else {
            dispatch(
              editEmployee(
                id,
                employee,
                selectedPermissions,
                setLoading,
                history
              )
            );
          }
        } else {
          dispatch(
            showToast({
              severity: "error",
              summary: "Permission Matrix",
              detail: "Select atleast one permission",
            })
          );
        }
      } else {
        dispatch(
          showToast({
            severity: "error",
            summary: "Personal Information",
            detail: "Missing information",
          })
        );
      }
    }
  };

  const getExpertiesTreeSelect = () => {
    let keys = allOperations.map((operation) => ({
      key: operation._id,
      label: operation.name,
      children: operation?.expertise.map((item) => ({
        key: item._id,
        label: item.name,
      })),
    }));
    return keys;
  };

  const handleExpertise = ({ name, value }) => {
    if (formType === "ADD" || formType === "EDIT") {
      setEmployee((prev) => ({
        ...prev,
        [name]: value,
        expertise: getExertiesFromKeys(value),
      }));
    }
  };

  const getExertiesFromKeys = (obj) => {
    let keys = Object.keys(obj);
    let experties = [];
    allOperations.forEach((item) => {
      item.expertise.forEach((exp) => {
        if (keys.includes(exp._id)) {
          experties.push({ ...exp, operation: item._id });
        }
      });
    });
    return experties;
  };

  const handlePermissionSelection = (selections) => {
    if (formType === "ADD" || formType === "EDIT") {
      setSelectedPermissions(selections);
    }
  };

  const getMachinesWithExpertiseId = (expertiseId) => {
    let machines = [];
    if (expertiseId) {
      let operationId = null;
      allOperations.forEach((item) => {
        item.expertise.forEach((exp) => {
          if (exp._id === expertiseId) {
            operationId = item._id;
          }
        });
      });

      if (operationId) {
        machines = allMachines.filter(
          (item) => item?.operation?._id === operationId
        );
        machines = machines.map((item) => ({ _id: item._id, name: item.name }));
      }
    }
    return machines;
  };
  return {
    employee,
    handleChange,
    selectedPermissions,
    handlePermissionSelection,
    Departments,
    Machines,
    history,
    loading,
    onSubmit,
    formType,
    setFormType,
    pricingTypes,
    allOperations,
    getExpertiesTreeSelect,
    handleExpertise,
    getMachinesWithExpertiseId,
  };
}
