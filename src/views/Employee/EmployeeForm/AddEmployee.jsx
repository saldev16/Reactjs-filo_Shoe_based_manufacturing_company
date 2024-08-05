import React from "react";
import Background from "../../../shared/Background/Background";
import CustomCard from "../../../shared/Card/CustomCard";
import EmployeeForm from "./EmployeeForm";

export default function AddEmployee() {
    return (
        <Background heading="Employee">
            <CustomCard title="Add New Employee">
                <EmployeeForm type="ADD" />
            </CustomCard>
        </Background>
    );
}
