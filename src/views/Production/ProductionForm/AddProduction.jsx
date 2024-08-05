import React from "react";
import Background from "../../../shared/Background/Background";
import CustomCard from "../../../shared/Card/CustomCard";
import ProductionForm from "./ProductionForm";


export default function AddProduction() {
    return (
        <Background heading="Production">
            <CustomCard title="Add New Production Request">
                <ProductionForm type="ADD"/>
            </CustomCard>
        </Background>
    );
}
