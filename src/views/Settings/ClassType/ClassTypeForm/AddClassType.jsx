import React from "react";
import Background from "../../../../shared/Background/Background";
import CustomCard from "../../../../shared/Card/CustomCard";
import ClassTypeForm from "./ClassTypeForm";

export default function AddClassType() {
    return (
        <Background heading="Setting">
            <CustomCard title="Add New ClassType">
                <ClassTypeForm type="ADD" />
            </CustomCard>
        </Background>
    );
}
