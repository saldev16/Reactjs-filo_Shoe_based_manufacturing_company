import React from "react";
import Background from "../../../../shared/Background/Background";
import CustomCard from "../../../../shared/Card/CustomCard";
import InjectionTypeForm from "./InjectionTypeForm";

const EditInjectionType = () => {
    return (
        <Background heading="Setting">
            <CustomCard title="Edit Injection Type">
                <InjectionTypeForm type="EDIT" />
            </CustomCard>
        </Background>
    );
};

export default EditInjectionType;
