import React from "react";
import Background from "../../../shared/Background/Background";
import CustomCard from "../../../shared/Card/CustomCard";
import MaterialsForm from "./MaterialsForm";

const EditMaterials = () => {
    return (
        <Background heading="Design">
            <CustomCard title="Edit Material">
                <MaterialsForm type="EDIT" />
            </CustomCard>
        </Background>
    );
};

export default EditMaterials;
