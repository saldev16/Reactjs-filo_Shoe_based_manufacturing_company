import React from "react";
import Background from "../../../../shared/Background/Background";
import CustomCard from "../../../../shared/Card/CustomCard";
import ToolTypeForm from "./ToolTypeForm";

const EditToolType = () => {
    return (
        <Background heading="Setting">
            <CustomCard title="Edit ToolType">
                <ToolTypeForm type="EDIT" />
            </CustomCard>
        </Background>
    );
};

export default EditToolType;
