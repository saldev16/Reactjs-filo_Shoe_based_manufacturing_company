import React from "react";
import Background from "../../../../shared/Background/Background";
import CustomCard from "../../../../shared/Card/CustomCard";
import InjectionTypeForm from "./InjectionTypeForm";

const ViewInjectionType = () => {
    return (
        <Background heading="Setting">
            <CustomCard title="View Group">
                <InjectionTypeForm type="VIEW" />
            </CustomCard>
        </Background>
    );
};

export default ViewInjectionType;
