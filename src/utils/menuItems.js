export const getMenuItems = (department, active, path, history) => {
    const menuItem = {
        Employee: {
            name: "Employee",
            path: "/employees",
            items: [
                {
                    label: "Employee",
                    style: path.includes("/employees") ? active : null,
                    items: [
                        {
                            label: "Directory",
                            icon: "pi pi-fw pi-user-edit",
                            command: () => history.replace("/employees"),
                            className: path === "/employees" ? "font-semibold" : null,
                        },
                        {
                            label: "Add New",
                            icon: "pi pi-fw pi-user-plus",
                            command: () => history.push("/employees/add"),
                            className: path === "/employees/add" ? "font-semibold" : null,
                        },
                    ],
                },
            ],
        },
        Design: {
            name: "Design",
            path: "/projects",
            items: [
                {
                    label: "Projects",
                    style: path.includes("/projects") ? active : null,
                    items: [
                        {
                            label: "Directory",
                            icon: "pi pi-fw pi-user-edit",
                            command: () => history.replace("/projects"),
                            className: path === "/projects" ? "font-semibold" : null,
                        },
                        {
                            label: "Add New Project",
                            icon: "pi pi-fw pi-user-plus",
                            command: () => history.push("/projects/add"),
                            className: path === "/projects/add" ? "font-semibold" : null,
                        },
                    ],
                },
                {
                    label: "Tools",
                    style: path.includes("/tools") ? active : null,
                    items: [
                        {
                            label: "Directory",
                            icon: "pi pi-fw pi-user-edit",
                            command: () => history.replace("/tools"),
                            className: path === "/tools" ? "font-semibold" : null,
                        },
                        {
                            label: "Add New Tool",
                            icon: "pi pi-fw pi-user-plus",
                            command: () => history.push("/tools/add"),
                            className: path === "/tools/add" ? "font-semibold" : null,
                        },
                    ],
                },
                {
                    label: "Products",
                    style: path.includes("/products") ? active : null,
                    items: [
                        {
                            label: "Directory",
                            icon: "pi pi-fw pi-user-edit",
                            command: () => history.replace("/products"),
                            className: path === "/products" ? "font-semibold" : null,
                        },
                        {
                            label: "Add New",
                            icon: "pi pi-fw pi-user-plus",
                            command: () => history.push("/products/add"),
                            className: path === "/products/add" ? "font-semibold" : null,
                        },
                    ],
                },
                {
                    label: "Material",
                    style: path === "/materials" ? active : null,
                    className: path === "/materials" ? "font-semibold" : null,
                    items: [
                        {
                            label: "Directory",
                            icon: "pi pi-fw pi-user-edit",
                            command: () => history.replace("/materials"),
                            className: path === "/materials" ? "font-semibold" : null,
                        },
                        {
                            label: "Add New Material",
                            icon: "pi pi-fw pi-user-plus",
                            command: () => history.push("/materials/add"),
                            className: path === "/materials/add" ? "font-semibold" : null,
                        },
                    ],
                },
                {
                    label: "Operations",
                    style: path.includes("/operations") ? active : null,

                    items: [
                        {
                            label: "Directory",
                            icon: "pi pi-fw pi-user-edit",
                            command: () => history.replace("/operations"),
                            className: path === "/operations" ? "font-semibold" : null,
                        },
                        {
                            label: "Add New Operation",
                            icon: "pi pi-fw pi-user-plus",
                            command: () => history.push("/operations/add"),
                            className: path === "/operations/add" ? "font-semibold" : null,
                        },
                    ],
                },
            ],
        },
        Machines: {
            name: "Machines",
            path: "/machines",
            items: [
                {
                    label: "Machines",
                    style: path.includes("/machines") ? active : null,
                    items: [
                        {
                            label: "Directory",
                            icon: "pi pi-fw pi-user-edit",
                            command: () => history.replace("/machines"),
                            className: path === "/machines" ? "font-semibold" : null,
                        },
                        {
                            label: "Add New",
                            icon: "pi pi-fw pi-user-plus",
                            command: () => history.push("/machines/add"),
                            className: path === "/machines/add" ? "font-semibold" : null,
                        },
                    ],
                },
            ],
        },
        Replacement: {
            name: "Replacements",
            path: "/replacements",
            items: [
                {
                    label: "Replacements",
                    style: path.includes("/replacements") ? active : null,
                    items: [
                        {
                            label: "Directory",
                            icon: "pi pi-fw pi-user-edit",
                            command: () => history.replace("/replacements"),
                            className: path === "/replacements" ? "font-semibold" : null,
                        },
                        {
                            label: "Add New",
                            icon: "pi pi-fw pi-user-plus",
                            command: () => history.push("/replacements/add"),
                            className: path === "/replacements/add" ? "font-semibold" : null,
                        },
                    ],
                },
            ],
        },
        Customer: {
            name: "Customer",
            path: "/customers",
            items: [
                {
                    label: "Customers",
                    style: path.includes("/customers") ? active : null,
                    command: () => history.replace("/customers"),
                },
            ],
        },
        Setting: {
            name: "Settings",
            path: "/groups",
            items: [
                {
                    label: "Groups",
                    style: path.includes("/groups") ? active : null,
                    command: () => history.replace("/groups"),
                },
                {
                    label: "Injection Types",
                    style: path.includes("/injection-types") ? active : null,
                    command: () => history.replace("/injection-types"),
                },
                {
                    label: "Tool Types",
                    style: path.includes("/tooltypes") ? active : null,
                    command: () => history.replace("/tooltypes"),
                },
                {
                    label: "Class Types",
                    style: path.includes("/classtypes") ? active : null,
                    command: () => history.replace("/classtypes"),
                },
                {
                    label: "Seasons",
                    style: path.includes("/seasons") ? active : null,
                    command: () => history.replace("/seasons"),
                },
                {
                    label: "Units",
                    style: path.includes("/units") ? active : null,
                    command: () => history.replace("/units"),
                },
                {
                    label: "Tags",
                    style: path.includes("/tags") ? active : null,
                    command: () => history.replace("/tags"),
                },
            ],
        },
        Supplier: {
            name: "Supplier",
            path: "/suppliers",
            items: [
                {
                    label: "Supplier",
                    style: path.includes("/suppliers") ? active : null,
                    command: () => history.replace("/suppliers"),
                },
            ],
        },
        Sales: {
            name: "Sales",
            path: "/sales",
            items: [
                {
                    label: "Draft order",
                    style: path.includes("/sales") ? active : null,
                    command: () => history.replace("/sales"),
                },
                {
                    label: "Order/invoice",
                    style: path.includes("/orders") ? active : null,
                    command: () => history.replace("/orders"),
                },
                {
                    label: "Inventory",
                    style: path.includes("/inventory") ? active : null,
                    command: () => history.replace("/inventory"),
                },
            ],
        },
        Production: {
            name: "Production",
            path: "/production",
            items: [
                {
                    label: "Production",
                    style: path.includes("/production") ? active : null,
                    items: [
                        {
                            label: "Directory",
                            icon: "pi pi-fw pi-user-edit",
                            command: () => history.replace("/production"),
                            className: path === "/production" ? "font-semibold" : null,
                        },
                        {
                            label: "Add New",
                            icon: "pi pi-fw pi-user-plus",
                            command: () => history.push("/production/add"),
                            className: path === "/production/add" ? "font-semibold" : null,
                        },
                    ],
                },
            ],
        }
    };
    return menuItem[department];
};
