import React from "react";
import Background from "../../../../shared/Background/Background";
import CustomCard from "../../../../shared/Card/CustomCard";
import ToolTypeForm from "./ToolTypeForm";

export default function AddToolType() {
    return (
        <Background heading="Setting">
            <CustomCard title="Add New ToolType">
                <ToolTypeForm type="ADD" />
            </CustomCard>
        </Background>
    );
}
