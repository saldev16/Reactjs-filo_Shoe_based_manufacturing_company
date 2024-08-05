import React, { useEffect } from "react";
import CustomAccordion from "../../../../shared/Accordion/CustomAccordion";
import { CustomForm, CustomInput } from "../../../../shared/Input/AllInputs";
import PrimaryButtom, { PrimaryButtonOutlined } from "../../../../shared/Button/PrimaryButton";
import InjectionTypeContainer from "./InjectionTypeContainer";

const InjectionTypeForm = ({ type }) => {
    const { injectionType, handleChange, loading, onSubmit, setFormType, history } = InjectionTypeContainer();

    useEffect(() => {
        setFormType(type);
    }, [type, setFormType]);

    return (
        <CustomAccordion isActive={true} title="Injection Type Information">
            <CustomForm style={type === "VIEW" ? { pointerEvents: "none" } : {}}>
                <CustomInput label="Code" name="code" onChange={handleChange} data={injectionType} />
                <CustomInput label="Name" name="name" onChange={handleChange} data={injectionType} required />
            </CustomForm>

            <div className="flex justify-content-center">
                <PrimaryButtom loading={loading} label="Save" onClick={onSubmit} />
                <PrimaryButtonOutlined onClick={() => history.goBack()} label="Cancel" />
            </div>
        </CustomAccordion>
    );
};

export default InjectionTypeForm;
