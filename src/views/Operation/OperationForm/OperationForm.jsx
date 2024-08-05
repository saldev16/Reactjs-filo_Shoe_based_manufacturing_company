import React, { useEffect } from "react";
import OperationContainer from "./OperationContainer";
import CustomAccordion from "../../../shared/Accordion/CustomAccordion";
import PrimaryButtom, { PrimaryButtonOutlined } from "../../../shared/Button/PrimaryButton";

import { CustomForm, CustomInput, CustomChipInput, CustomTextArea } from "../../../shared/Input/AllInputs";

export default function OperationForm({ type }) {
    const { operation, handleChange, loading, onSubmit, setFormType, history } = OperationContainer();
    useEffect(() => {
        setFormType(type);
    }, [type, setFormType]);
    return (
        <CustomAccordion isActive={true} extraClassName="employee-accordion" title="Operation Information">
            <CustomForm style={type === "VIEW" ? { pointerEvents: "none" } : {}}>
                <CustomInput data={operation} name="name" label="Name" onChange={handleChange} required />
                <CustomChipInput data={operation} name="expertise" label="Expertise" onChange={handleChange} required />
                <CustomTextArea data={operation} name="description" label="Description" onChange={handleChange} rows={5} />
            </CustomForm>
            <div className="flex justify-content-center">
                <PrimaryButtom loading={loading} label="Save" onClick={onSubmit} />
                <PrimaryButtonOutlined onClick={() => history.goBack()} label="Cancel" />
            </div>
        </CustomAccordion>
    );
}
