import React from "react";
import Background from "../../../shared/Background/Background";
import CustomCard from "../../../shared/Card/CustomCard";
import SupplierForm from "./SupplierForm";

export default function EditSupplier() {
    return (
        <Background heading="Supplier">
            <CustomCard title="Edit Supplier">
                <SupplierForm type="EDIT" />
            </CustomCard>
        </Background>
    );
}
