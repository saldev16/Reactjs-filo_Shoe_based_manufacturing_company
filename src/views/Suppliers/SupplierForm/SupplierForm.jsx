import React, { useEffect } from "react";
import CustomAccordion from "../../../shared/Accordion/CustomAccordion";
import {
    CustomForm,
    CustomInput,
    CustomTextArea,
    CustomDropDown,
    CustomRadioButtons,
    CustomInputMask,
    CustomAutoComplete,
} from "../../../shared/Input/AllInputs";
import PrimaryButtom, { PrimaryButtonOutlined } from "../../../shared/Button/PrimaryButton";
import { FormTabView } from "../../../shared/TabView/TabView";
import CustomImageInput from "../../../shared/Input/CustomImageInput";
import SupplierContainer from "./SupplierContainer";

export default function SupplierForm({ type }) {
    const { supplier, handleChange, loading, onSubmit, setFormType, history, supplierTypes, addressTypes, allTags } =
        SupplierContainer();

    useEffect(() => {
        setFormType(type);
    }, [type, setFormType]);

    const tabs = [
        {
            title: "Contact & Addresses",
            content: (
                <CustomForm style={type === "VIEW" ? { pointerEvents: "none" } : {}}>
                    <CustomInput label="Address Line 1" name="address1" onChange={handleChange} data={supplier} />
                    <CustomInput label="Address Line 2" name="address2" onChange={handleChange} data={supplier} />
                    <CustomInput label="City" name="city" onChange={handleChange} data={supplier} />
                    <CustomInput label="State" name="state" onChange={handleChange} data={supplier} />
                    <CustomInput label="Zip Code" name="zipCode" onChange={handleChange} data={supplier} />
                    <CustomInput label="Country" name="country" onChange={handleChange} data={supplier} />
                </CustomForm>
            ),
        },
        {
            title: "Sales and Purchase",
            content: (
                <CustomForm style={type === "VIEW" ? { pointerEvents: "none" } : {}}>
                    <CustomInput label="Salesperson" name="salesPerson" onChange={handleChange} data={supplier} />
                    <CustomInput label="Company Id" name="companyId" onChange={handleChange} data={supplier} />
                    <CustomInput label="Reference" name="reference" onChange={handleChange} data={supplier} />
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
                        data={supplier}
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
        <CustomAccordion isActive={true} title="Supplier Information">
            <CustomForm style={type === "VIEW" ? { pointerEvents: "none" } : {}}>
                <CustomRadioButtons
                    label="Supplier Type"
                    name="type"
                    onChange={handleChange}
                    data={supplier}
                    options={supplierTypes}
                />
                <CustomImageInput
                    name="image"
                    onFilesChange={handleChange}
                    data={supplier}
                    editable={type !== "VIEW" ? true : false}
                />
                <CustomInput label="Name" name="fullName" onChange={handleChange} data={supplier} required />
                <CustomInput label="Company Name" name="companyName" onChange={handleChange} data={supplier} />
                <CustomInput label="Job Position" name="jobPositions" onChange={handleChange} data={supplier} />
                <CustomInputMask
                    label="Phone Number"
                    name="phone"
                    onChange={handleChange}
                    data={supplier}
                    mask="(999) 999-9999"
                />
                <CustomInput label="Email" name="email" onChange={handleChange} data={supplier} type="email" required />
                <CustomInput label="Website" name="website" onChange={handleChange} data={supplier} />
                <CustomInput label="Title" name="title" onChange={handleChange} data={supplier} />
                <CustomAutoComplete
                    label="Tags"
                    name="tags"
                    suggestions={allTags}
                    onChange={handleChange}
                    data={supplier}
                    multiple
                />
                <CustomDropDown
                    label="Contact Type"
                    name="contactType"
                    onChange={handleChange}
                    data={supplier}
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
