import React from "react";
import Background from "../../../shared/Background/Background";
import CustomCard from "../../../shared/Card/CustomCard";
import ToolForm from "./ToolForm";

export default function EditTool() {
    return (
        <Background heading="Design">
            <CustomCard title="Edit Tool">
                <ToolForm type="EDIT" />
            </CustomCard>
        </Background>
    );
}