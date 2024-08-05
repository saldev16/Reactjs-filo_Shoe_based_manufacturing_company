import React from "react";
import Background from "../../../shared/Background/Background";
import CustomCard from "../../../shared/Card/CustomCard";
import ToolForm from "./ToolForm";

export default function ViewTool() {
    return (
        <Background heading="Design">
            <CustomCard title="View Tool">
                <ToolForm type="VIEW" />
            </CustomCard>
        </Background>
    );
}
