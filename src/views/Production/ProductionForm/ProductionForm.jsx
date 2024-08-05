import React, { useEffect } from "react";
import ProductionContainer from "./ProductionContainer";
import CustomAccordion from "../../../shared/Accordion/CustomAccordion";
import PrimaryButtom, { PrimaryButtonOutlined } from "../../../shared/Button/PrimaryButton";

import { CustomForm, CustomCalenderInput, CustomInput, CustomDropDown, CustomTextArea } from "../../../shared/Input/AllInputs";

export default function ProductionForm({ type }) {
    const { operation, handleChange, loading, onSubmit, setFormType, history } = ProductionContainer();
    useEffect(() => {
        setFormType(type);
    }, [type, setFormType]);
    return (
        <CustomAccordion isActive={true} extraClassName="employee-accordion" title="Production Request">
            <CustomForm style={type === "VIEW" ? { pointerEvents: "none" } : {}}>
                <CustomInput data={operation} name="orderNumber" label="Order Number" onChange={handleChange} required />
                <CustomCalenderInput data={operation} name="deadline" label="Deadline" onChange={handleChange} required />
                <CustomTextArea data={operation} name="note" label="Note" onChange={handleChange} rows={5} />
                <CustomDropDown data={operation} name="priority" label="Priority" onChange={handleChange} rows={5} />
            </CustomForm>
            <div className="flex justify-content-center">
                <PrimaryButtom loading={loading} label="Save" onClick={onSubmit} />
                <PrimaryButtonOutlined onClick={() => history.goBack()} label="Cancel" />
            </div>
        </CustomAccordion>
    );
}
