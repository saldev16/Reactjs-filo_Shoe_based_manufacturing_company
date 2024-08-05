import React from "react";
import Background from "../../../shared/Background/Background";
import CustomCard from "../../../shared/Card/CustomCard";
import ToolForm from "./ToolForm";

export default function AddTool() {
    return (
        <Background heading="Design">
            <CustomCard title="Add Tool">
                <ToolForm type="ADD" />
            </CustomCard>
        </Background>
    );
}
