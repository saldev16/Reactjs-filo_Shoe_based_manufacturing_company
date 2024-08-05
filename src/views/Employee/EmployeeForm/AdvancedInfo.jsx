import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import FormTable from "../../../shared/Input/FormTable";
import { CustomForm, CustomInput, CustomRadioButtons, CustomMultiSelect } from "../../../shared/Input/AllInputs";

export default function AdvancedInfo({ employee, pricingTypes, handleChange }) {
    return (
        <>
            <CustomForm>
                <CustomRadioButtons
                    label="Pricing Type"
                    name="pricing"
                    onChange={handleChange}
                    data={employee}
                    options={pricingTypes}
                />

                {employee.pricing._id === "MONTHLY" ? (
                    <CustomInput name="salary" onChange={handleChange} label="Salary" data={employee} />
                ) : (
                    <CustomMultiSelect
                        name="product"
                        label="Product Code"
                        data={employee}
                        options={[
                            { _id: 1, name: "Product1", code: "P1" },
                            { _id: 2, name: "Product2", code: "P2" },
                            { _id: 3, name: "Product3", code: "P3" },
                            { _id: 4, name: "Product4", code: "P4" },
                        ]}
                        filter
                        onChange={handleChange}
                        placeholder="Select Product"
                    />
                )}
            </CustomForm>
            {employee?.product.length ? (
                <FormTable label="Product Details">
                    <DataTable
                        value={employee?.product}
                        className="p-datatable-gridlines"
                        showGridlines
                        filterDisplay="menu"
                        responsiveLayout="scroll"
                    >
                        <Column field="code" header="Product Code"></Column>
                        <Column field="name" header="Product Name"></Column>
                        <Column field="" header="Price"></Column>
                        <Column field="" header="Estimate Production Pr/hr"></Column>
                    </DataTable>
                </FormTable>
            ) : null}
        </>
    );
}
