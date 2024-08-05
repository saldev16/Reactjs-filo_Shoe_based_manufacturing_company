import React from "react";
import Background from "../../../../shared/Background/Background";
import CustomCard from "../../../../shared/Card/CustomCard";
import ClassTypeForm from "./ClassTypeForm";

const ViewClassType = () => {
    return (
        <Background heading="Setting">
            <CustomCard title="View ToolType">
                <ClassTypeForm type="VIEW" />
            </CustomCard>
        </Background>
    );
};

export default ViewClassType;
