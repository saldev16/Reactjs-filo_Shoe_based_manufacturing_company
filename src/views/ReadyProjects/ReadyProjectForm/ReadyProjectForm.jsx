import React, { useEffect } from "react";
import ReadyProjectContainer from "./ReadyProjectContainer";
import CustomAccordion from "../../../shared/Accordion/CustomAccordion";
import CustomCard from "../../../shared/Card/CustomCard";
import PrimaryButtom, { PrimaryButtonOutlined } from "../../../shared/Button/PrimaryButton";

import {
    CustomForm,
    CustomInput,
    CustomTextArea,
    CustomChipInput,
    CustomDropDown,
    CustomInputNumber,
    CustomLayout,
} from "../../../shared/Input/AllInputs";
import { SubTableCard } from "../../../shared/TableCard/TableCard";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import CustomImageInput from "../../../shared/Input/CustomImageInput";
import CustomPresetTable from "../../../shared/Input/CustomPresetTable";

export default function ReadyProjectForm({ type }) {
    const {
        project,
        handleChange,
        onSubmit,
        loading,
        setFormType,
        history,
        groups,
        classTypes,
        injectionTypes,
        seasons,
        suppliers,
        isProductFormOpen,
        product,
        openProductForm,
        onAddProduct,
        handleProductChange,
        closeProductForm,
        onEditProduct,
        editProductId,
        openPresetForm,
        closePresetForm,
        isPresetFormOpen,
        preset,
        handlePresetChange,
        onAddPreset,
    } = ReadyProjectContainer();

    useEffect(() => {
        setFormType(type);
    }, [type, setFormType]);

    return (
        <>
            <CustomCard title={type === "EDIT" ? "Edit Project" : type === "VIEW" ? "View Ready Project" : "Add Ready Project"}>
                <div style={type === "VIEW" ? { pointerEvents: "none" } : {}}>
                    <CustomAccordion isActive={true} extraClassName="employee-accordion" title="Project Information">
                        <CustomForm type={type}>
                            <CustomInput data={project} name="name" label="Name" onChange={handleChange} required />
                            <CustomDropDown
                                data={project}
                                name="classType"
                                label="Class"
                                options={classTypes}
                                onChange={handleChange}
                                required
                            />

                            <CustomDropDown
                                data={project}
                                name="group"
                                label="Group"
                                options={groups}
                                onChange={handleChange}
                                required
                            />
                            <CustomDropDown
                                data={project}
                                name="injectionType"
                                label="Injection Type"
                                options={injectionTypes}
                                onChange={handleChange}
                                required
                            />

                            <CustomDropDown
                                data={project}
                                name="season"
                                label="Season"
                                options={seasons}
                                onChange={handleChange}
                                required
                            />
                            <CustomDropDown
                                data={project}
                                name="supplier"
                                label="Supplier"
                                options={suppliers}
                                onChange={handleChange}
                                required
                            />

                            <CustomTextArea
                                data={project}
                                onChange={handleChange}
                                name="description"
                                label="Description"
                                rows={5}
                                cols={30}
                            />
                            <CustomChipInput data={project} label="Sizes" name="sizes" onChange={handleChange} />
                            <CustomInputNumber
                                data={project}
                                label="Wholesale Price"
                                name="wholesalePrice"
                                onChange={handleChange}
                                useGrouping
                            />
                            <CustomInputNumber
                                data={project}
                                label="Retail Price"
                                name="retailPrice"
                                onChange={handleChange}
                                useGrouping
                            />

                            <CustomInputNumber data={project} label="Minimum Qty" name="minQuantity" onChange={handleChange} />
                            <CustomInputNumber data={project} label="Maximum Qty" name="maxQuantity" onChange={handleChange} />
                            <CustomInputNumber
                                data={project}
                                label="Tax %"
                                name="tax"
                                onChange={handleChange}
                                suffix="%"
                                min={0}
                                max={100}
                            />
                            <CustomInputNumber
                                data={project}
                                label="Discount %"
                                name="discount"
                                onChange={handleChange}
                                suffix="%"
                                min={0}
                                max={100}
                            />
                        </CustomForm>

                        <SubTableCard title="Add Ready Product" onClick={openProductForm}>
                            <DataTable
                                value={project?.products}
                                showGridlines
                                rows={10}
                                responsiveLayout="scroll"
                                selectionMode="single"
                                selection={editProductId}
                            >
                                <Column field="code" header="Code"></Column>
                                <Column field="color" header="Color"></Column>
                                <Column field="Images" header="Images"></Column>
                                <Column field="retailPrice" header="Retail Price"></Column>
                                <Column field="wholesalePrice" header="Wholesale Price"></Column>
                                <Column field="minQuantity" header="Maximum Qty"></Column>
                                <Column field="maxQuantity" header="Minimum Qty"></Column>
                                <Column field="discount" header="Discount%"></Column>
                                <Column field="tax" header="Tax%"></Column>
                                <Column
                                    body={(e) => (
                                        <div className="flex justify-content-around">
                                            <i
                                                className="fa-solid fa-pencil cursor-pointer"
                                                onClick={() => onEditProduct(e._id)}
                                            ></i>
                                        </div>
                                    )}
                                    header="Actions"
                                ></Column>
                            </DataTable>
                        </SubTableCard>

                        {isProductFormOpen ? (
                            <>
                                <CustomForm type={type}>
                                    <CustomImageInput
                                        data={product}
                                        onFilesChange={handleProductChange}
                                        name="images"
                                        editable={type !== "VIEW" ? true : false}
                                        multiple
                                        removeable
                                        limit={5}
                                    />
                                    <CustomInput
                                        data={product}
                                        name="color"
                                        label="Color"
                                        onChange={handleProductChange}
                                        required
                                    />
                                    <CustomTextArea
                                        data={product}
                                        onChange={handleProductChange}
                                        name="description"
                                        label="Description"
                                        rows={5}
                                        cols={30}
                                    />
                                    <CustomInputNumber
                                        data={product}
                                        label="Wholesale Price"
                                        name="wholesalePrice"
                                        onChange={handleProductChange}
                                        useGrouping
                                    />
                                    <CustomInputNumber
                                        data={product}
                                        label="Retail Price"
                                        name="retailPrice"
                                        onChange={handleProductChange}
                                        useGrouping
                                    />

                                    <CustomInputNumber
                                        data={product}
                                        label="Minimum Qty"
                                        name="minQuantity"
                                        onChange={handleProductChange}
                                    />
                                    <CustomInputNumber
                                        data={product}
                                        label="Maximum Qty"
                                        name="maxQuantity"
                                        onChange={handleProductChange}
                                    />
                                    <CustomInputNumber
                                        data={product}
                                        label="Tax %"
                                        name="tax"
                                        onChange={handleProductChange}
                                        suffix="%"
                                        min={0}
                                        max={100}
                                    />
                                    <CustomInputNumber
                                        data={product}
                                        label="Discount %"
                                        name="discount"
                                        onChange={handleProductChange}
                                        suffix="%"
                                        min={0}
                                        max={100}
                                    />
                                    <CustomLayout>
                                        <PrimaryButtom label="Add" onClick={onAddProduct} />
                                        <PrimaryButtonOutlined label="Cancel" onClick={closeProductForm} />
                                    </CustomLayout>
                                </CustomForm>
                            </>
                        ) : null}

                        <SubTableCard title="New Preset" onClick={openPresetForm}>
                            <DataTable value={project?.presets} showGridlines rows={10} responsiveLayout="scroll">
                                <Column field="name" header="Preset Name"></Column>
                                <Column field="preset.sumTotal" header="Qty"></Column>
                                <Column
                                    body={(e) => (
                                        <div className="flex justify-content-around">
                                            <i className="fa-solid fa-eye cursor-pointer"></i>
                                        </div>
                                    )}
                                    header="Action"
                                ></Column>
                            </DataTable>
                        </SubTableCard>
                        {isPresetFormOpen ? (
                            <>
                                <CustomForm type={type}>
                                    <CustomInput
                                        data={preset}
                                        name="name"
                                        label="Preset Name"
                                        onChange={handlePresetChange}
                                        required
                                    />
                                    <CustomPresetTable
                                        sizes={project.sizes}
                                        products={project.products}
                                        label="Add Qty"
                                        name="preset"
                                        onChange={handlePresetChange}
                                    />
                                    <CustomLayout>
                                        <PrimaryButtom label="Add" onClick={onAddPreset} />
                                        <PrimaryButtonOutlined label="Cancel" onClick={closePresetForm} />
                                    </CustomLayout>
                                </CustomForm>
                            </>
                        ) : null}
                    </CustomAccordion>
                    <div className="flex justify-content-center">
                        <PrimaryButtom loading={loading} label="Save" onClick={onSubmit} />
                        <PrimaryButtonOutlined onClick={() => history.goBack()} label="Cancel" />
                    </div>
                </div>
            </CustomCard>
        </>
    );
}
