import React from "react";
import Background from "../../../shared/Background/Background";
import CustomCard from "../../../shared/Card/CustomCard";
import EmployeeForm from "./EmployeeForm";

export default function EditEmployee() {
    return (
        <Background heading="Employee">
            <CustomCard title="Edit Employee Information">
                <EmployeeForm type="EDIT" />
            </CustomCard>
        </Background>
    );
}
