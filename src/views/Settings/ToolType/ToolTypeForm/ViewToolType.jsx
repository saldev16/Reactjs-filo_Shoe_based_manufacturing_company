import React from "react";
import Background from "../../../../shared/Background/Background";
import CustomCard from "../../../../shared/Card/CustomCard";
import ToolTypeForm from "./ToolTypeForm";

const ViewToolType = () => {
    return (
        <Background heading="Setting">
            <CustomCard title="View ToolType">
                <ToolTypeForm type="VIEW" />
            </CustomCard>
        </Background>
    );
};

export default ViewToolType;
