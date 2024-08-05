import React from "react";
import Background from "../../../shared/Background/Background";
import CustomCard from "../../../shared/Card/CustomCard";
import OperationForm from "./OperationForm";

export default function EditOperation() {
    return (
        <Background heading="Design">
            <CustomCard title="Edit Operation">
                <OperationForm type="EDIT" />
            </CustomCard>
        </Background>
    );
}
