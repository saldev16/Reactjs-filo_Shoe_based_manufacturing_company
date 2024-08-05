import React from "react";
import Background from "../../../../shared/Background/Background";
import CustomCard from "../../../../shared/Card/CustomCard";
import ClassTypeForm from "./ClassTypeForm";

const EditClassType = () => {
    return (
        <Background heading="Setting">
            <CustomCard title="Edit ClassType">
                <ClassTypeForm type="EDIT" />
            </CustomCard>
        </Background>
    );
};

export default EditClassType;
