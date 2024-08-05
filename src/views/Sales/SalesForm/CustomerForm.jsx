import React, { useEffect } from "react";
import CustomAccordion from "../../../shared/Accordion/CustomAccordion";
import {
    CustomForm,
    CustomInput,
    CustomTextArea,
    CustomChipInput,
    CustomDropDown,
    CustomRadioButtons,
    CustomInputMask,
} from "../../../shared/Input/AllInputs";
import PrimaryButtom, { PrimaryButtonOutlined } from "../../../shared/Button/PrimaryButton";
import { FormTabView } from "../../../shared/TabView/TabView";
import CustomImageInput from "../../../shared/Input/CustomImageInput";
import CustomerContainer from "./CustomerContainer";

export default function CustomerForm({ type }) {
    const { customer, handleChange, loading, onSubmit, setFormType, history, customerTypes, addressTypes } = CustomerContainer();

    useEffect(() => {
        setFormType(type);
    }, [type, setFormType]);

    const tabs = [
        {
            title: "Contact & Addresses",
            content: (
                <CustomForm style={type === "VIEW" ? { pointerEvents: "none" } : {}}>
                    <CustomInput label="Address Line 1" name="address1" onChange={handleChange} data={customer} />
                    <CustomInput label="Address Line 2" name="address2" onChange={handleChange} data={customer} />
                    <CustomInput label="City" name="city" onChange={handleChange} data={customer} />
                    <CustomInput label="State" name="state" onChange={handleChange} data={customer} />
                    <CustomInput label="Zip Code" name="zipCode" onChange={handleChange} data={customer} />
                    <CustomInput label="Country" name="country" onChange={handleChange} data={customer} />
                </CustomForm>
            ),
        },
        {
            title: "Sales and Purchase",
            content: (
                <CustomForm style={type === "VIEW" ? { pointerEvents: "none" } : {}}>
                    <CustomInput label="Salesperson" name="salesPerson" onChange={handleChange} data={customer} />
                    <CustomInput label="Company Id" name="companyId" onChange={handleChange} data={customer} />
                    <CustomInput label="Reference" name="reference" onChange={handleChange} data={customer} />
                </CustomForm>
            ),
        },
        {
            title: "Internal Notes",
            content: (
                <CustomForm style={type === "VIEW" ? { pointerEvents: "none" } : {}}>
                    <CustomTextArea
                        label="Internal Notes"
                        name="notes"
                        onChange={handleChange}
                        data={customer}
                        rows={5}
                        cols={30}
                    />
                </CustomForm>
            ),
        },
        { title: "View Sales amount", content: <CustomInput name="name" label=" Full Name" required />, disabled: true },
        { title: "View Purchase amount", content: <CustomInput name="name" label=" Full Name" required />, disabled: true },
        { title: "View Invoiced", content: <CustomInput name="name" label=" Full Name" required />, disabled: true },
        { title: "View Vendors Bill", content: <CustomInput name="name" label=" Full Name" required />, disabled: true },
    ];

    return (
        <CustomAccordion isActive={true} title="Customer Information">
            <CustomForm style={type === "VIEW" ? { pointerEvents: "none" } : {}}>
                <CustomRadioButtons
                    label="Customer Type"
                    name="type"
                    onChange={handleChange}
                    data={customer}
                    options={customerTypes}
                />
                <CustomImageInput
                    name="image"
                    onFilesChange={handleChange}
                    data={customer}
                    editable={type !== "VIEW" ? true : false}
                />
                <CustomInput label="Name" name="fullName" onChange={handleChange} data={customer} required />
                <CustomInput label="Company Name" name="companyName" onChange={handleChange} data={customer} />
                <CustomInput label="Job Position" name="jobPositions" onChange={handleChange} data={customer} />
                <CustomInputMask
                    label="Phone Number"
                    name="phone"
                    onChange={handleChange}
                    data={customer}
                    mask="(999) 999-9999"
                />
                <CustomInput label="Email" name="email" onChange={handleChange} data={customer} type="email" required />
                <CustomInput label="Website" name="website" onChange={handleChange} data={customer} />
                <CustomInput label="Title" name="title" onChange={handleChange} data={customer} />
                <CustomChipInput label="Tags" name="tags" onChange={handleChange} data={customer} />
                <CustomDropDown
                    label="Contact Type"
                    name="contactType"
                    onChange={handleChange}
                    data={customer}
                    options={addressTypes}
                />
            </CustomForm>
            <FormTabView tabs={tabs} />

            <div className="flex justify-content-center">
                <PrimaryButtom loading={loading} label="Save" onClick={onSubmit} />
                <PrimaryButtonOutlined onClick={() => history.goBack()} label="Cancel" />
            </div>
        </CustomAccordion>
    );
}
