import React from "react";
import Background from "../../../shared/Background/Background";
import CustomCard from "../../../shared/Card/CustomCard";
import OperationForm from "./OperationForm";

export default function AddOperation() {
    return (
        <Background heading="Design">
            <CustomCard title="Add Operation">
                <OperationForm type="ADD" />
            </CustomCard>
        </Background>
    );
}
