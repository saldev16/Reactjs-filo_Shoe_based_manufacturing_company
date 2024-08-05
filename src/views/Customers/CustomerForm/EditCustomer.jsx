import React from "react";
import Background from "../../../shared/Background/Background";
import CustomCard from "../../../shared/Card/CustomCard";
import CustomerForm from "./CustomerForm";

export default function EditCustomer() {
    return (
        <Background heading="Customer">
            <CustomCard title="Edit Customer">
                <CustomerForm type="EDIT" />
            </CustomCard>
        </Background>
    );
}
