export default class Constants {
    static HOST = "https://filoapi.appdeft.biz/";
    static BASE_URL = "https://filoapi.appdeft.biz/api/user";
    // static HOST = "http://localhost:1005/";
    // static BASE_URL = "http://localhost:1005/api/user";
    static END_POINT = {
        LOGIN: "/login",
        PROFILE: "/profile",
        UPLOAD_FILES: "/upload-files",
        GET_PERMISSIONS: "/allpermissions",

        EMPLOYEE: "/employee/",
        EMPLOYEE_LOG: "/employee/log/",
        OPERATION: "/operation/",
        MACHINE: "/machine/",
        TOOL: "/tool/",
        SUB_TOOL: "/sub-tool/",
        PROJECT: "/project/",
        READY_PROJECT: "/ready-project/",
        PRODUCT: "/product/",
        PRESET: "/preset/",
        REPLACEMENT: "/replacement/",
        SUPPLIER: "/supplier/",
        CUSTOMER: "/customer/",
        CATEGORY: "/category/",
        MATERIAL: "/material/",
        UNIT: "/unit/",
        TAG: "/tag/",

        //Misc
        GROUP: "/group/",
        SEASON: "/season/",
        TOOL_TYPE: "/tool-type/",
        CLASS_TYPE: "/class-type/",
        INJECTION_TYPE: "/injection-type/",
        OPERATIONS_TREE: "/project/operation-tree/",
        UPDATE_OPERATIONS_TREE_SEQUENCE: "/project/operation/update-sequence/",
    };
}
