import React from "react";
import CustomAccordion from "../../../shared/Accordion/CustomAccordion";
import MaterialsContainer from "./MaterialsContainer";
import PrimaryButtom, { PrimaryButtonOutlined } from "../../../shared/Button/PrimaryButton";
import PreparationForm from "./PreparationForm";

import {
    CustomDropDown,
    CustomForm,
    CustomInput,
    CustomRadioButtons,
    CustomTextArea,
    CustomInputNumber,
    CustomMultiSelect,
    CustomTreeSelect,
    CustomAutoComplete,
} from "../../../shared/Input/AllInputs";
import CustomImageInput from "../../../shared/Input/CustomImageInput";
import { useEffect } from "react";

const MaterialsForm = ({ type }) => {
    const {
        materialTypes,
        allCategories,
        suppliers,
        allUnits,
        allTags,
        getTreeTable,
        material,
        handleChange,
        setFormType,
        onSubmit,
        loading,
        history,

        prepare,
        handlePreparationChange,
        allOperations,
        allTools,
        allMaterials,

        prepareMaterial,
        handleChangePreparationMaterial,
        onAddMaterial,
        onDeleteMaterial,
        onEditMaterial,
        onAddOperation,
        editOperationId,
        onEditOperation,
        labels,
    } = MaterialsContainer();

    useEffect(() => {
        setFormType(type);
    }, [type, setFormType]);

    return (
        <>
            <CustomAccordion isActive={true} title="Material Information">
                <CustomForm style={type === "VIEW" ? { pointerEvents: "none" } : {}}>
                    <CustomRadioButtons
                        label="Type"
                        name="type"
                        onChange={type === "ADD" && handleChange}
                        data={material}
                        options={materialTypes}
                        disabled={type === "ADD" ? false : true}
                    />
                    <CustomTreeSelect
                        label="Category"
                        name="category"
                        onChange={handleChange}
                        data={material}
                        options={getTreeTable(allCategories)}
                        filter
                        required
                        col="6"
                    />
                    <CustomInput label="Code" name="code" onChange={handleChange} data={material} placeholder="MAT-#" disabled />
                    <CustomInput label="Name" name="fullName" onChange={handleChange} data={material} required />
                    {material?.type?.value === "RAW" ? (
                        <CustomInput label="Supplier Orignal Code" name="supplierCode" onChange={handleChange} data={material} />
                    ) : null}

                    <CustomTextArea
                        label="Description"
                        name="description"
                        onChange={handleChange}
                        data={material}
                        rows={5}
                        cols={30}
                    />
                    {material?.type?.value === "RAW" ? (
                        <CustomMultiSelect
                            label="Supplier"
                            name="suppliers"
                            onChange={handleChange}
                            data={material}
                            options={suppliers}
                        />
                    ) : null}
                    <CustomImageInput
                        name="images"
                        onFilesChange={handleChange}
                        data={material}
                        removeable
                        multiple
                        editable={type !== "VIEW" ? true : false}
                        limit={7}
                    />
                    <CustomAutoComplete
                        label="Tags"
                        name="tags"
                        suggestions={allTags}
                        onChange={handleChange}
                        data={material}
                        multiple
                    />
                    <CustomDropDown
                        label="Unit"
                        name="unit"
                        onChange={handleChange}
                        data={material}
                        options={allUnits}
                        required
                    />
                    <CustomInputNumber
                        label="Retail Price"
                        name="retailPrice"
                        onChange={handleChange}
                        data={material}
                        useGrouping
                    />
                    <CustomInputNumber
                        label="Wholesale Price"
                        name="wholesalePrice"
                        onChange={handleChange}
                        data={material}
                        useGrouping
                    />
                    <CustomInputNumber label="Minimum Qty" name="minQuantity" onChange={handleChange} data={material} />
                    <CustomInputNumber label="Maximum Qty" name="maxQuantity" onChange={handleChange} data={material} />
                    <CustomInputNumber
                        label="Discount"
                        name="discount"
                        onChange={handleChange}
                        data={material}
                        suffix="%"
                        min={0}
                        max={100}
                    />
                </CustomForm>
            </CustomAccordion>
            {material?.type?.value === "SEMI_PRODUCED" ? (
                <PreparationForm
                    type={type}
                    prepare={prepare}
                    handlePreparationChange={handlePreparationChange}
                    allOperations={allOperations}
                    allTools={allTools}
                    allMaterials={allMaterials}
                    prepareMaterial={prepareMaterial}
                    handleChangePreparationMaterial={handleChangePreparationMaterial}
                    onAddMaterial={onAddMaterial}
                    onDeleteMaterial={onDeleteMaterial}
                    onEditMaterial={onEditMaterial}
                    material={material}
                    onEditOperation={onEditOperation}
                    editOperationId={editOperationId}
                    labels={labels}
                />
            ) : null}
            <br />
            {type !== "VIEW" ? (
                <div className="flex justify-content-center">
                    {material?.type?.value === "SEMI_PRODUCED" ? (
                        editOperationId ? (
                            <PrimaryButtom label="Update operation" onClick={onAddOperation} />
                        ) : (
                            <PrimaryButtom label="Create operation" onClick={onAddOperation} />
                        )
                    ) : null}
                    <PrimaryButtom loading={loading} label="Save" onClick={onSubmit} />
                    <PrimaryButtonOutlined onClick={() => history.goBack()} label="Cancel" />
                </div>
            ) : (
                <div className="flex justify-content-center">
                    <PrimaryButtonOutlined onClick={() => history.goBack()} label="Cancel" />
                </div>
            )}
        </>
    );
};

export default MaterialsForm;
