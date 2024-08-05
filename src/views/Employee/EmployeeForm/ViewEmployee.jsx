import React from "react";
import Background from "../../../shared/Background/Background";
import CustomCard from "../../../shared/Card/CustomCard";
import EmployeeForm from "./EmployeeForm";

export default function ViewEmployee() {
    return (
        <Background heading="Employee">
            <CustomCard title="View Employee Information">
                <EmployeeForm  type="VIEW" />
            </CustomCard>
        </Background>
    );
}
