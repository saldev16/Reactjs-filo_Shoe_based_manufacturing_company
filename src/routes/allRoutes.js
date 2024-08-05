import OPTable from "../views/OPTable";
import Profile from "../pages/Profile";
import Dashboard from "../views/Dashboard/Dashboard.jsx";

import Employees from "../views/Employee/Employees.jsx";
import ViewEmployee from "../views/Employee/EmployeeForm/ViewEmployee.jsx";
import AddEmployee from "../views/Employee/EmployeeForm/AddEmployee.jsx";
import EditEmployee from "../views/Employee/EmployeeForm/EditEmployee.jsx";
import EmployeeLogs from "../views/Employee/EmployeeLogs/EmployeeLogs.jsx";

import Projects from "../views/Projects/Projects.jsx";
import AddProject from "../views/Projects/ProjectForm/AddProject";
import ViewProject from "../views/Projects/ProjectForm/ViewProject";
import EditProject from "../views/Projects/ProjectForm/EditProject";

import Tools from "../views/Tools/Tools.jsx";
import AddTool from "../views/Tools/ToolForm/AddTool.jsx";
import ViewTool from "../views/Tools/ToolForm/ViewTool.jsx";

import ReadyProjects from "../views/ReadyProjects/ReadyProjects";
import AddReadyProjects from "../views/ReadyProjects/ReadyProjectForm/AddReadyProject";
import ViewReadyProjects from "../views/ReadyProjects/ReadyProjectForm/ViewReadyProject";
import EditReadyProjects from "../views/ReadyProjects/ReadyProjectForm/EditReadyProject";

import Materials from "../views/Materials/Materials";
import EditMaterials from "../views/Materials/MaterialsForm/EditMaterials";
import AddMaterials from "../views/Materials/MaterialsForm/AddMaterials";
import ViewMaterials from "../views/Materials/MaterialsForm/ViewMaterials";

import Operations from "../views/Operation/Operations.jsx";
import AddOperation from "../views/Operation/OperationForm/AddOperation.jsx";
import EditOperation from "../views/Operation/OperationForm/EditOperation.jsx";

import Machines from "../views/Machine/Machines.jsx";
import AddMachine from "../views/Machine/MachineForm/AddMachine.jsx";

import Customers from "../views/Customers/Customers";
import AddCustomer from "../views/Customers/CustomerForm/AddCustomer";
import EditCustomer from "../views/Customers/CustomerForm/EditCustomer";
import ViewCustomer from "../views/Customers/CustomerForm/ViewCustomer";

import Suppliers from "../views/Suppliers/Suppliers";
import AddSupplier from "../views/Suppliers/SupplierForm/AddSupplier";
import EditSupplier from "../views/Suppliers/SupplierForm/EditSupplier";
import ViewSupplier from "../views/Suppliers/SupplierForm/ViewSupplier";

import Replacements from "../views/Replacements/Replacements.jsx";
import AddReplacement from "../views/Replacements/ReplacementsForm/AddReplacement.jsx";
import EditReplacement from "../views/Replacements/ReplacementsForm/EditReplacement";

import Sales from "../views/Sales/Sales.jsx";

import Group from "../views/Settings/Group/Group";
import AddGroup from "../views/Settings/Group/GroupForm/AddGroup";
import EditGroup from "../views/Settings/Group/GroupForm/EditGroup";
import ViewGroup from "../views/Settings/Group/GroupForm/ViewGroup";

import ToolType from "../views/Settings/ToolType/ToolType";
import AddToolType from "../views/Settings/ToolType/ToolTypeForm/AddToolType";
import EditToolType from "../views/Settings/ToolType/ToolTypeForm/EditToolType";
import ViewToolType from "../views/Settings/ToolType/ToolTypeForm/ViewToolType";

import ClassType from "../views/Settings/ClassType/ClassType";
import AddClassType from "../views/Settings/ClassType/ClassTypeForm/AddClassType";
import ViewClassType from "../views/Settings/ClassType/ClassTypeForm/ViewClassType";
import EditClassType from "../views/Settings/ClassType/ClassTypeForm/EditClassType";

import Season from "../views/Settings/Season/Season";
import AddSeason from "../views/Settings/Season/SeasonForm/AddSeason";
import ViewSeason from "../views/Settings/Season/SeasonForm/ViewSeason";
import EditSeason from "../views/Settings/Season/SeasonForm/EditSeason";

import Units from "../views/Settings/Units/Units";
import AddUnit from "../views/Settings/Units/UnitsForm/AddUnit";
import ViewUnit from "../views/Settings/Units/UnitsForm/ViewUnit";
import EditUnit from "../views/Settings/Units/UnitsForm/EditUnit";

import Tags from "../views/Settings/Tags/Tags";
import AddTag from "../views/Settings/Tags/TagsForm/AddTag";
import ViewTag from "../views/Settings/Tags/TagsForm/ViewTag";
import EditTag from "../views/Settings/Tags/TagsForm/EditTag";

import Production from "../views/Production/Production";
import AddProduction from "../views/Production/ProductionForm/AddProduction";
import EditTool from "../views/Tools/ToolForm/EditTool";
import InjectionType from "../views/Settings/InjectionType/InjectionType";
import ViewInjectionType from "../views/Settings/InjectionType/InjectionTypeForm/ViewInjectionType";
import AddInjectionType from "../views/Settings/InjectionType/InjectionTypeForm/AddInjectionType";
import EditInjectionType from "../views/Settings/InjectionType/InjectionTypeForm/EditInjectionType";
// import ViewTag from "../views/Settings/Tags/TagsForm/ViewTag";
// import EditTag from "../views/Settings/Tags/TagsForm/EditTag";

export const PrivateRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
    },
    //..........................................................Employees...........................................................................
    {
        path: "/employees",
        name: "Employee",
        component: Employees,
        exact: true,
    },
    {
        path: "/employees/add",
        name: "AddNewEmployee",
        component: AddEmployee,
        exact: true,
    },
    {
        path: "/employees/edit/:id",
        name: "Edit Employee",
        component: EditEmployee,
        exact: true,
    },
    {
        path: "/employees/view/:id",
        name: "View Employee",
        component: ViewEmployee,
        exact: true,
    },
    {
        path: "/employees/logs/:id",
        name: "EmployeeLog",
        component: EmployeeLogs,
        exact: true,
    },
    //..........................................................Projects...........................................................................
    {
        path: "/projects",
        name: "Project",
        component: Projects,
        exact: true,
    },
    {
        path: "/projects/add/add-tool",
        name: "Tools",
        component: Tools,
        exact: true,
    },
    {
        path: "/projects/add",
        name: "Project",
        component: AddProject,
        exact: true,
    },
    {
        path: "/projects/view/:id",
        name: "Project",
        component: ViewProject,
        exact: true,
    },
    {
        path: "/projects/edit/:id",
        name: "Project",
        component: EditProject,
        exact: true,
    },
    //..........................................................ReadyProjects...........................................................................
    {
        path: "/products",
        name: "ReadyProjects",
        component: ReadyProjects,
        exact: true,
    },
    {
        path: "/products/add",
        name: "Add Ready Product",
        component: AddReadyProjects,
    },
    {
        path: "/products/view/:id",
        name: "View Ready Product",
        component: ViewReadyProjects,
    },
    {
        path: "/products/edit/:id",
        name: "Edit Ready Product",
        component: EditReadyProjects,
    },
    //..........................................................Sales...........................................................................
    {
        path: "/sales",
        name: "Sales",
        component: Sales,
    },

    //..........................................................Machines...........................................................................
    {
        path: "/machines",
        name: "Machines",
        component: Machines,
        exact: true,
    },
    {
        path: "/machines/add",
        name: "Machines",
        component: AddMachine,
    },
    //..........................................................Tools...........................................................................
    {
        path: "/tools",
        name: "Tools",
        component: Tools,
        exact: true,
    },
    {
        path: "/tools/add",
        name: "AddNewTools",
        component: AddTool,
    },
    {
        path: "/tools/view/:id",
        name: "AddNewTools",
        component: ViewTool,
    },
    {
        path: "/tools/edit/:id",
        name: "EditTools",
        component: EditTool,
    },

    //..........................................................Operations...........................................................................
    {
        path: "/operations",
        name: "Operations",
        component: Operations,
        exact: true,
    },
    {
        path: "/operations/add",
        name: "AddOperation",
        component: AddOperation,
        exact: true,
    },
    {
        path: "/operations/edit/:id",
        name: "EditOperation",
        component: EditOperation,
        exact: true,
    },
    //..........................................................Replacements...........................................................................
    {
        path: "/replacements",
        name: "Replacements",
        component: Replacements,
        exact: true,
    },
    {
        path: "/replacements/add",
        name: "AddReplacement",
        component: AddReplacement,
        exact: true,
    },
    {
        path: "/replacements/edit/:id",
        name: "EditReplacement",
        component: EditReplacement,
        exact: true,
    },
    // ..........................................................Materials...........................................................................
    {
        path: "/materials",
        name: "Materials",
        component: Materials,
        exact: true,
    },
    {
        path: "/materials/add",
        name: "AddMaterials",
        component: AddMaterials,
        exact: true,
    },
    {
        path: "/materials/edit/:id",
        name: "EditMaterials",
        component: EditMaterials,
        exact: true,
    },
    {
        path: "/materials/view/:id",
        name: "ViewMaterials",
        component: ViewMaterials,
    },
    // ..........................................................Misc...........................................................................
    //.....Tags.......
    {
        path: "/tags",
        name: "Tags",
        component: Tags,
        exact: true,
    },
    {
        path: "/tags/add",
        name: "AddTags",
        component: AddTag,
        exact: true,
    },
    {
        path: "/tags/view/:id",
        name: "ViewTags",
        component: ViewTag,
        exact: true,
    },
    {
        path: "/tags/edit/:id",
        name: "EditTags",
        component: EditTag,
        exact: true,
    },
    //.....Groups.......
    {
        path: "/groups",
        name: "Group",
        component: Group,
        exact: true,
    },
    {
        path: "/groups/add",
        name: "addGroup",
        component: AddGroup,
        exact: true,
    },
    {
        path: "/groups/view/:id",
        name: "ViewGroup",
        component: ViewGroup,
        exact: true,
    },
    {
        path: "/groups/edit/:id",
        name: "EditGroup",
        component: EditGroup,
        exact: true,
    },
    //.....InjectionTypes........
    {
        path: "/injection-types",
        name: "InjectionType",
        component: InjectionType,
        exact: true,
    },
    {
        path: "/injection-types/add",
        name: "AddInjectionType",
        component: AddInjectionType,
        exact: true,
    },
    {
        path: "/injection-types/view/:id",
        name: "ViewInjectionType",
        component: ViewInjectionType,
        exact: true,
    },
    {
        path: "/injection-types/edit/:id",
        name: "EditInjectionType",
        component: EditInjectionType,
        exact: true,
    },
    //.....ToolType......
    {
        path: "/tooltypes",
        name: "ToolType",
        component: ToolType,
        exact: true,
    },
    {
        path: "/tooltypes/add",
        name: "addToolType",
        component: AddToolType,
        exact: true,
    },
    {
        path: "/tooltypes/view/:id",
        name: "ViewToolType",
        component: ViewToolType,
        exact: true,
    },
    {
        path: "/tooltypes/edit/:id",
        name: "EditToolType",
        component: EditToolType,
        exact: true,
    },
    //......ClassType......
    {
        path: "/classtypes",
        name: "ClassType",
        component: ClassType,
        exact: true,
    },
    {
        path: "/classtypes/add",
        name: "addClassType",
        component: AddClassType,
        exact: true,
    },
    {
        path: "/classtypes/view/:id",
        name: "ViewClassType",
        component: ViewClassType,
        exact: true,
    },
    {
        path: "/classtypes/edit/:id",
        name: "EditClassType",
        component: EditClassType,
        exact: true,
    },
    //......Season.........
    {
        path: "/seasons",
        name: "Season",
        component: Season,
        exact: true,
    },
    {
        path: "/seasons/add",
        name: "addSeason",
        component: AddSeason,
        exact: true,
    },
    {
        path: "/seasons/view/:id",
        name: "ViewSeason",
        component: ViewSeason,
        exact: true,
    },
    {
        path: "/seasons/edit/:id",
        name: "EditSeason",
        component: EditSeason,
        exact: true,
    },
    //.....Units..........
    {
        path: "/units",
        name: "Units",
        component: Units,
        exact: true,
    },
    {
        path: "/units/add",
        name: "AddUnit",
        component: AddUnit,
        exact: true,
    },
    {
        path: "/units/view/:id",
        name: "ViewUnit",
        component: ViewUnit,
        exact: true,
    },
    {
        path: "/units/edit/:id",
        name: "EditUnit",
        component: EditUnit,
        exact: true,
    },
    //..........................................................Customers...........................................................................
    {
        path: "/customers",
        name: "Customers",
        component: Customers,
        exact: true,
    },
    {
        path: "/customers/add",
        name: "addCustomer",
        component: AddCustomer,
        exact: true,
    },
    {
        path: "/customers/view/:id",
        name: "ViewCustomer",
        component: ViewCustomer,
        exact: true,
    },
    {
        path: "/customers/edit/:id",
        name: "EditCustomer",
        component: EditCustomer,
        exact: true,
    },
    //..........................................................Suppliers...........................................................................
    {
        path: "/suppliers",
        name: "Suppliers",
        component: Suppliers,
        exact: true,
    },
    {
        path: "/suppliers/add",
        name: "addSupplier",
        component: AddSupplier,
        exact: true,
    },
    {
        path: "/suppliers/view/:id",
        name: "ViewSupplier",
        component: ViewSupplier,
        exact: true,
    },
    {
        path: "/suppliers/edit/:id",
        name: "EditSupplier",
        component: EditSupplier,
        exact: true,
    },
    // Production
    {
        path: "/production",
        name: "Production",
        component: Production,
        exact: true,
    },
    {
        path: "/production/add",
        name: "Production",
        component: AddProduction,
        exact: true,
    },

    //..........................................................Profiles...........................................................................
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },
    {
        path: "/test",
        name: "OPTable",
        component: OPTable,
    },
];
