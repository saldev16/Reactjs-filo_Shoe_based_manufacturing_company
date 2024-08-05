import React from "react";
import Background from "../../../shared/Background/Background";
import CustomCard from "../../../shared/Card/CustomCard";
import CustomerForm from "./CustomerForm";

export default function AddCustomer() {
    return (
        <Background heading="Customer">
            <CustomCard title="View Customer">
                <CustomerForm type="VIEW" />
            </CustomCard>
        </Background>
    );
}
