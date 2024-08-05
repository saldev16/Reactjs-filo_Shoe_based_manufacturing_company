import React from "react";
import Background from "../../shared/Background/Background";
import EmployeeTable from "./EmployeesTable";


const Employees = () => {
    return (
        <Background heading="Employee">
            <EmployeeTable />
        </Background>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname && prevProps.colorMode === nextProps.colorMode;
};
export default React.memo(Employees, comparisonFn);
