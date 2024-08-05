import React from "react";
import Background from "../../../shared/Background/Background";
import CustomCard from "../../../shared/Card/CustomCard";
import SupplierForm from "./SupplierForm";

export default function AddSupplier() {
    return (
        <Background heading="Supplier">
            <CustomCard title="View Supplier">
                <SupplierForm type="VIEW" />
            </CustomCard>
        </Background>
    );
}
