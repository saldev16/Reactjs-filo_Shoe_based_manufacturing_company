import React from "react";
import PrimaryButtom, { PrimaryButtonOutlined } from "../../../shared/Button/PrimaryButton";

import { CustomDropDown, CustomForm, CustomInput, CustomTreeSelect } from "../../../shared/Input/AllInputs";

const SemiProducedMaterialsForm = ({
    semiProducedMaterial,
    units,
    categories,
    getTreeTable,
    handleSemiProducedMatChange,
    onSave,
}) => {
    return (
        <>
            <CustomForm>
                <CustomTreeSelect
                    label="Category"
                    name="category"
                    onChange={handleSemiProducedMatChange}
                    data={semiProducedMaterial}
                    options={getTreeTable(categories)}
                    filter
                    required
                    col="6"
                />
                <CustomInput
                    label="Name"
                    name="name"
                    onChange={handleSemiProducedMatChange}
                    data={semiProducedMaterial}
                    required
                />
                <CustomDropDown
                    label="Unit"
                    name="unit"
                    options={units}
                    onChange={handleSemiProducedMatChange}
                    data={semiProducedMaterial}
                    required
                />
            </CustomForm>

            <div className="flex justify-content-center">
                <PrimaryButtom label="Create" onClick={onSave} />
                <PrimaryButtonOutlined label="Cancel" onClick={onSave} />
            </div>
        </>
    );
};

export default SemiProducedMaterialsForm;
