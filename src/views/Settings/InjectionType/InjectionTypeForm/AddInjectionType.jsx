import React from "react";
import Background from "../../../../shared/Background/Background";
import CustomCard from "../../../../shared/Card/CustomCard";
import InjectionTypeForm from "./InjectionTypeForm";

export default function AddInjectionType() {
    return (
        <Background heading="Setting">
            <CustomCard title="Add New Injection Type">
                <InjectionTypeForm type="ADD" />
            </CustomCard>
        </Background>
    );
}
