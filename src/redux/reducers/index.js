import { combineReducers } from "redux";
import loaderReducer from "./loaderReducer";
import miscReducer from "./miscReducer";
import profileReducer from "./profileReducer";
import employeeReducer from "./employeeReducer";
import permissionsReducer from "./permissionsReducer";
import operationsReducer from "./operationsReducer";
import machinesReducer from "./machinesReducer";
import toolsReducer from "./toolReducer";
import projectsReducer from "./projectsReducer";
import toastReducer from "./toastReducer";
import replacementReducer from "./replacementReducer";
import supplierReducer from "./supplierReducer";
import materialsReducer from "./materialsReducer";
import customersReducer from "./customersReducer";
import salesReducer from "./salesReducer";

export default combineReducers({
  toast: toastReducer,
  loader: loaderReducer,
  misc: miscReducer,
  profile: profileReducer,
  permissions: permissionsReducer,
  employee: employeeReducer,
  operations: operationsReducer,
  machines: machinesReducer,
  tools: toolsReducer,
  projects: projectsReducer,
  replacements: replacementReducer,
  material: materialsReducer,
  suppliers: supplierReducer,
  customers: customersReducer,
  sales: salesReducer,
});
