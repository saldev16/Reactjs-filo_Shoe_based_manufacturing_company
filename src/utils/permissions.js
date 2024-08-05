//Don't Touch this file or edit this file
export const allPermissions = [
  {
    department: "Employees",
    expended: { Employee1: true, Employee2: true },
    permissions: [
      {
        key: "Employee1",
        label: "Add New Employee",
        children: [
          {
            key: "ADD-NEW-EMPLOYEE",
            label: "Add Employee",
          },
          {
            key: "VIEW-ADVANCED-BUTTON",
            label: "View Advanced Button",
          },
        ],
      },
      {
        key: "Employee2",
        label: "Employee Directory",
        children: [
          {
            key: "EDIT-EMPLOYEE",
            label: "Edit Employee",
          },
          {
            key: "DELETE-EMPLOYEE",
            label: "Delete Employee",
          },
          {
            key: "VIEW-EMPLOYEE",
            label: "View Employee",
          },
          {
            key: "VIEW-EMPLOYEE-LOG",
            label: "View Employee Log",
          },
        ],
      },
    ],
  },
  {
    department: "Design",
    expended: { Design1: true, Design2: true },
    permissions: [
      {
        key: "Design1",
        label: "New Project",
        children: [
          {
            key: "ADD-NEW-PROJECT",
            label: "Add New Project",
          },
        ],
      },
      {
        key: "Design2",
        label: "Project Directory",
        children: [
          {
            key: "VIEW-COLLABORATIVE-PROJECTS",
            label: "View Only Collaborative Projects",
          },
          {
            key: "VIEW-PROJECT",
            label: "View All Project",
          },
          {
            key: "EDIT-PROJECT",
            label: "Edit Project",
          },
          {
            key: "ADDOPT-PROFILE",
            label: "Adopt Profile",
          },
          {
            key: "DELETE-PROJECT",
            label: "Delete Profile",
          },
        ],
      },
    ],
  },
  {
    department: "Products",
    expended: { Products1: true, Products2: true, ViewEditProperties: true },
    permissions: [
      {
        key: "Products1",
        label: "New Product",
        children: [
          {
            key: "ADD-NEW-PRODUCT",
            label: "Add New Product",
          },
        ],
      },
      {
        key: "Products2",
        label: "Products Directory",
        children: [
          {
            key: "VIEW-AVAILABLE-QUANTITY",
            label: "View Available Quantity",
          },
          {
            key: "VIEW-MOVEMENT",
            label: "View Movement ",
          },
          {
            key: "ViewEditProperties",
            label: "View Properties",
            children: [
              {
                key: "VIEW-PROPERTIES",
                label: "View Properties",
              },
              {
                key: "EDIT-PROPERTIES",
                label: "Edit Properties",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    department: "Operations",
    expended: { Operations1: true, Operations2: true },
    permissions: [
      {
        key: "Operations1",
        label: "Add New operation",
        children: [
          {
            key: "ADD-NEW-OPERATION",
            label: "Add New Operation",
          },
        ],
      },
      {
        key: "Operations2",
        label: "Operation Directory",
        children: [
          {
            key: "VIEW-OPERATION_ASSIGNED_MACHINES",
            label: "View Operation Assigned Machines",
          },
          {
            key: "VIEW-OPERATION_TOOLS",
            label: "View Operation Tools",
          },
          {
            key: "VIEW-OPERATION_ASSIGNED_WORKERS",
            label: "View Operation Assigned Workers",
          },
          {
            key: "EDIT-OPERATION",
            label: "Edit Operation",
          },
          {
            key: "DELETE-OPERATION",
            label: "Delete Operation",
          },
        ],
      },
    ],
  },
  {
    department: "Tools",
    expended: { Tools1: true, Tools2: true },
    permissions: [
      {
        key: "Tools1",
        label: "Add New operation",
        children: [
          {
            key: "ADD-NEW-TOOL",
            label: "Add New Tool",
          },
        ],
      },
      {
        key: "Tools2",
        label: "Tools Directory",
        children: [
          {
            key: "VIEW-TOOLS",
            label: "View Tools",
          },
          {
            key: "EDIT-TOOLS",
            label: "Edit Tools",
          },
          {
            key: "DELETE-TOOLS",
            label: "Delete Tools",
          },
        ],
      },
    ],
  },
  {
    department: "Machines",
    expended: { Machine1: true, Machine2: true },
    permissions: [
      {
        key: "Machine1",
        label: "Add New Machines",
        children: [
          {
            key: "ADD-NEW-MACHINE",
            label: "Add New Machines",
          },
        ],
      },
      {
        key: "Machine2",
        label: "Machines Directory",
        children: [
          {
            key: "VIEW-MACHINES",
            label: "View Machines",
          },
          {
            key: "EDIT-MACHINES",
            label: "Edit Machines",
          },
          {
            key: "DELETE-MACHINES",
            label: "Delete Machines",
          },
        ],
      },
    ],
  },
  {
    department: "Replacements",
    expended: { "ADD-NEW-REPLACEMENT": true, Replacement2: true },
    permissions: [
      {
        key: "ADD-NEW-REPLACEMENT",
        label: "Add New Replacements",
        children: [
          {
            key: "ADD-NEW-REPLACEMENT",
            label: "Add New Replacement",
          },
        ],
      },
      {
        key: "Replacement2",
        label: "Replacement Directory",
        children: [
          {
            key: "VIEW-REPLACEMENT",
            label: "View Replacement",
          },
          {
            key: "EDIT-REPLACEMENT",
            label: "Edit Replacement",
          },
          {
            key: "DELETE-REPLACEMENT",
            label: "Delete Replacement",
          },
        ],
      },
    ],
  },
  {
    department: "Materials",
    expended: { Materials1: true, Materials2: true },
    permissions: [
      {
        key: "Materials1",
        label: "Add New Materials",
        children: [
          {
            key: "ADD-RAW-MATERIALS",
            label: "Add Raw Materials",
          },
          {
            key: "ADD-SEMI-PRODUCED-MATERIALS",
            label: "Add Semi-Produced Materials",
          },
        ],
      },
      {
        key: "Materials2",
        label: "Materials Directory",
        children: [
          {
            key: "CREATE-NEW-TAG",
            label: "Create New Tag",
          },
          {
            key: "VIEW-SUPPLIER",
            label: "View Suppliers",
          },
          {
            key: "EDIT-MATERIAL",
            label: "Edit Materials",
          },
          {
            key: "DELETE-MATERIAL",
            label: "Delete Materials",
          },
        ],
      },
    ],
  },
  {
    department: "Customers",
    expended: { Customers1: true, Customers2: true },
    permissions: [
      {
        key: "Customers1",
        label: "Add New Customers",
        children: [
          {
            key: "ADD-CUSTOMERS",
            label: "Add New Customers",
          },
        ],
      },
      {
        key: "Customers2",
        label: "Customers Directory",
        children: [
          {
            key: "VIEW-CUSTOMERS",
            label: "View Customers",
          },
          {
            key: "VIEW-CUSTOMERS-INVOICES-PAYMENTS",
            label: "View Customers Invoice Payments",
          },
          {
            key: "EDIT-CUSTOMERS",
            label: "Edit Customers",
          },
          {
            key: "DELETE-CUSTOMERS",
            label: "Delete Customers",
          },
        ],
      },
    ],
  },
  {
    department: "Suppliers",
    expended: { Suppliers1: true, Suppliers2: true },
    permissions: [
      {
        key: "Suppliers1",
        label: "Add New Suppliers",
        children: [
          {
            key: "ADD-SUPPLIERS",
            label: "Add New Suppliers",
          },
        ],
      },
      {
        key: "Suppliers2",
        label: "Suppliers Directory",
        children: [
          {
            key: "VIEW-SUPPLIERS",
            label: "View Suppliers",
          },
          {
            key: "VIEW-SUPPLIERS-INVOICES-PAYMENTS",
            label: "View Suppliers Invoice Payments",
          },
          {
            key: "EDIT-SUPPLIERS",
            label: "Edit Suppliers",
          },
          {
            key: "DELETE-SUPPLIERS",
            label: "Delete Suppliers",
          },
        ],
      },
    ],
  },
  {
    department: "Labels",
    expended: { Labels1: true },
    permissions: [
      {
        key: "Labels1",
        label: "View Labels Directory",
        children: [
          {
            key: "VIEW-LABELS-HISTORY",
            label: "View Labels",
          },
          {
            key: "PRINT-LABELS",
            label: "Print",
          },
        ],
      },
      {
        key: "LABEL-GENERATOR",
        label: "Label Generator ",
      },
      {
        key: "LABEL-SPLINTER",
        label: "Label Splinter  ",
      },
    ],
  },
  {
    department: "Production",
    expended: { Production1: true, Production2: true },
    permissions: [
      {
        key: "Production1",
        label: "Add New Production",
        children: [
          {
            key: "ADD-PRODUCTONS",
            label: "Add New Production",
          },
        ],
      },
      {
        key: "Production2",
        label: "Production Directory",
        children: [
          {
            key: "VIEW-PRODUCTONS",
            label: "View Production",
          },
          {
            key: "EDIT-PRODUCTONS",
            label: "Edit Production",
          },
          {
            key: "DELETE-PRODUCTONS",
            label: "Delete Production",
          },
        ],
      },
    ],
  },
  {
    department: "Sales",
    expended: { "ADD-DRAFT-ORDERS": true, Sales1: true, Sales2: true },
    permissions: [
      {
        key: "ADD-DRAFT-ORDERS",
        label: "Add New Draft-order",
        children: [
          {
            key: "CHANGE-PAYMENT-TERMS",
            label: "Change Payment Terms",
          },
          {
            key: "CHANGE-PRICING-METHOD",
            label: "Change Pricing Method",
          },
          {
            key: "SHOW-AVAILABILITY",
            label: "Show Availability Column",
          },
          {
            key: "SHOW-PRICES",
            label: "Show Prices Columns",
          },
          {
            key: "ADD-CUSTOM-PRESETS",
            label: "Add Custom Presets",
          },
          {
            key: "filters",
            label: "Filters Modules",
            children: [
              {
                key: "FILTER-MATERIALS",
                label: "Materials",
              },
              {
                key: "FILTER-PRODUCTS",
                label: "Products",
              },
              {
                key: "FILTER-MACHINES",
                label: "Machines",
              },
              {
                key: "FILTER-TOOLS",
                label: "Tools",
              },
            ],
          },
        ],
      },
      {
        key: "Sales1",
        label: "Draft Order Directory",
        children: [
          {
            key: "SHOW-PAYMENT-ORDER-DIRECTORY",
            label: "Show Payment Column",
          },
          {
            key: "SHOW-PRICE-ORDER-DIRECTORY",
            label: "Show Price Column",
          },
          {
            key: "SHOW-PARTICIPENTS-ORDER-DIRECTORY",
            label: "Show Participants Column",
          },
          {
            key: "VIEW-ORDERS",
            label: "View Orders",
          },
          {
            key: "EDIT-ORDERS",
            label: "Edit Orders",
          },
          {
            key: "DELETE-ORDERS",
            label: "Delete Orders",
          },
        ],
      },
      {
        key: "Sales2",
        label: "Order and invoice Directory",
        children: [
          {
            key: "SHOW-PAYMENT-INVOICE-DIRECTORY",
            label: "Show Payment Column",
          },
          {
            key: "SHOW-PRICE-INVOICE-DIRECTORY",
            label: "Show Price Column",
          },
          {
            key: "SHOW-PARTICIPENTS-INVOICE-DIRECTORY",
            label: "Show Participants Column",
          },
          {
            key: "VIEW-INVOICES",
            label: "View Invoice",
          },
          {
            key: "EDIT-INVOICES",
            label: "Edit Invoice",
          },
          {
            key: "DELETE-INVOICES",
            label: "Delete Invoice",
          },
        ],
      },
    ],
  },
  {
    department: "Procurements",
    expended: {
      "ADD-PROCUREMENT-INVOICE": true,
      Procurement1: true,
      Shipment: true,
      Expenses: true,
    },
    permissions: [
      {
        key: "ADD-PROCUREMENT-ORDER",
        label: "Add New Procurement Order ",
      },
      {
        key: "ADD-PROCUREMENT-INVOICE",
        label: "Add New Procurement Order ",
        children: [
          {
            key: "ADD-PROCUREMENT-ORDER-PRICE",
            label: "See Prices",
          },
        ],
      },
      {
        key: "Procurement1",
        label: "Procurement directory",
        children: [
          {
            key: "VIEW-PROCUREMENT-ORDERS",
            label: "View Orders",
          },
          {
            key: "VIEW-PROCUREMENT-INVOICES",
            label: "View Invoices",
          },
          {
            key: "VIEW-SHIPPING-METHODS",
            label: "Shipping Method",
          },
          {
            key: "VIEW-UPLOAD-FILES",
            label: "View Procurement",
          },
          {
            key: "EDIT-PROCUREMENTS",
            label: "Edit Procurement",
          },
          {
            key: "DELETE-PROCUREMENTS",
            label: "Delete Procurement",
          },
        ],
      },
      {
        key: "Expenses",
        label: "Add Expenses",
        children: [
          {
            key: "ADD-EXPENSES",
            label: "View Expenses",
          },
          {
            key: "EDIT-EXPENSES",
            label: "Edit Expenses",
          },
          {
            key: "DELETE-EXPENSES",
            label: "Delete Expenses",
          },
        ],
      },
      {
        key: "Shipment",
        label: "Add Shipment",
        children: [
          {
            key: "ADD-SHIPMENTS",
            label: "View Shipment",
          },
          {
            key: "EDIT-SHIPMENTS",
            label: "Edit Shipment",
          },
          {
            key: "DELETE-SHIPMENTS",
            label: "Delete Shipment",
          },
        ],
      },
    ],
  },
  {
    department: "Inventory",
    expended: { Inventory1: true },
    permissions: [
      {
        key: "Inventory1",
        label: "Inventory",
        children: [
          {
            key: "ADD-INVENTORY",
            label: "Add",
          },
          {
            key: "VIEW-INVENTORY",
            label: "View ",
          },
          {
            key: "EDIT-INVENTORY",
            label: "Edit",
          },
          {
            key: "DELETE-INVENTORY",
            label: "Delete",
          },
        ],
      },
    ],
  },
];

export const convertToBackendPermissions = (backend, selectedOnFrontend) => {
  const selectedKeys = Object.keys(selectedOnFrontend);
  const permissionsForBE = [];
  backend.forEach((dept) =>
    dept.permissions.forEach((p) => {
      if (selectedKeys.includes(p)) {
        let ind = permissionsForBE.findIndex((obj) => obj.name === dept.name);
        if (ind === -1) {
          permissionsForBE.push({
            name: dept.name,
            permissions: [p],
          });
        } else {
          permissionsForBE[ind].permissions = [
            ...permissionsForBE[ind].permissions,
            p,
          ];
        }
      }
    })
  );
  return permissionsForBE;
};
