import React from "react";
import Background from "../../../../shared/Background/Background";
import CustomCard from "../../../../shared/Card/CustomCard";
import UnitForm from "./UnitForm";

export default function AddUnit() {
    return (
        <Background heading="Setting">
            <CustomCard title="Add New Unit">
                <UnitForm type="ADD" />
            </CustomCard>
        </Background>
    );
}
