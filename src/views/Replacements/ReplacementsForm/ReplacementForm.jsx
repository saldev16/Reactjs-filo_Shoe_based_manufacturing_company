import React, { useEffect } from "react";
import CustomAccordion from "../../../shared/Accordion/CustomAccordion";
import PrimaryButton, { PrimaryButtonOutlined } from "../../../shared/Button/PrimaryButton";
import ReplacementContainer from "./ReplacementContainer";
import CustomFilesInput from "../../../shared/Input/CustomFilesInput";
import { CustomForm, CustomInput, CustomTextArea, CustomDropDown, CustomMultiSelect } from "../../../shared/Input/AllInputs";
import CustomImageInput from "../../../shared/Input/CustomImageInput";

export default function ReplacementForm({ type }) {
    const { allSuppliers, setFormType, replacement, handleChange, allMachines, onSubmit, loading, history } =
        ReplacementContainer();

    useEffect(() => {
        setFormType(type);
    }, [type, setFormType]);
    return (
        <>
            <CustomAccordion isActive={true} title="Replacement Information">
                <CustomForm>
                    <CustomInput label="Code" name="code" data={replacement} disabled placeholder="REP-#" />
                    <CustomTextArea
                        label="Description"
                        name="description"
                        onChange={handleChange}
                        data={replacement}
                        rows={5}
                        cols={30}
                    />
                    <CustomDropDown
                        label="Supplier Name"
                        name="supplier"
                        onChange={handleChange}
                        data={replacement}
                        placeholder="Select an Supplier"
                        required
                        options={allSuppliers}
                    />
                    <CustomInput label="Supplier Code" name="code" disabled value={replacement?.supplier?.code || ""} />
                    <CustomImageInput
                        name="images"
                        onFilesChange={handleChange}
                        data={replacement}
                        removeable
                        editable
                        multiple
                        limit={5}
                    />
                    <CustomMultiSelect
                        label="Choose Machines"
                        name="machines"
                        onChange={handleChange}
                        data={replacement}
                        placeholder="Select Machines"
                        options={allMachines}
                        maxSelectedLabels={3}
                        required
                    />

                    <CustomFilesInput
                        label="Upload Files"
                        name="files"
                        accept="image/*,.pdf"
                        onFilesChange={handleChange}
                        data={replacement}
                        removeable
                        editable
                        multiple
                    />
                    <CustomTextArea label="Notes" name="notes" onChange={handleChange} data={replacement} rows={5} cols={30} />
                </CustomForm>

                <div className="flex justify-content-center">
                    <PrimaryButton label="Save" onClick={onSubmit} loading={loading} />
                    <PrimaryButtonOutlined label="Cancel" onClick={() => history.goBack()} />
                </div>
            </CustomAccordion>
        </>
    );
}
