import Profile from "../pages/Profile";
import Dashboard from "../views/Dashboard/Dashboard.jsx";

import Machines from "../views/Machine/Machines.jsx";
import AddMachine from "../views/Machine/MachineForm/AddMachine.jsx";

export const PrivateRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
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
