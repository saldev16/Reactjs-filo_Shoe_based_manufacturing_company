import React from "react";
import Background from "../../../shared/Background/Background";
import CustomCard from "../../../shared/Card/CustomCard";
import MachineForm from "./MachineForm";

export default function AddMachine() {
    return (
        <Background heading="Machines">
            <CustomCard title="Add New Machine">
                <MachineForm type="ADD" />
            </CustomCard>
        </Background>
    );
}
