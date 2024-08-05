import React, { useState } from "react";
import _ from "lodash";
import InputLayout from "./InputLayout";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { Chips } from "primereact/chips";
import { Dropdown } from "primereact/dropdown";
import { TreeSelect } from "primereact/treeselect";
import { MultiSelect } from "primereact/multiselect";
import { RadioButton } from "primereact/radiobutton";
import { InputMask } from "primereact/inputmask";
import { Calendar } from "primereact/calendar";
import { AutoComplete } from "primereact/autocomplete";
import { InputSwitch } from "primereact/inputswitch";
import { Button } from "primereact/button";

export function CustomForm({ type, children, ...props }) {
    return (
        <div className="grid grid-nogutter" style={type === "VIEW" ? { pointerEvents: "none" } : {}} {...props}>
            {children}
        </div>
    );
}
export const CustomInputButton = ({ col, position, ...props }) => {
    return (
        <InputLayout col={col || 6}>
            <div className={`flex justify-content-${position ? position : "start"}`}>
                <Button className="p-button-info" {...props} />
            </div>
        </InputLayout>
    );
};
export const CustomLayout = ({ label, name, data, errorMessage, extraClassName, required, col, children }) => {
    return (
        <InputLayout
            col={col || 12}
            label={label}
            name={name}
            required={required}
            extraClassName={extraClassName}
            data={data}
            errorMessage={errorMessage}
        >
            {children}
        </InputLayout>
    );
};

export const CustomInput = ({
    label,
    name,
    data,
    value,
    onChange,
    errorMessage,
    extraClassName,
    required,
    col,
    inputClass,
    disabled = false,
    type = "text",
    ...props
}) => {
    return (
        <InputLayout
            col={col || 6}
            label={label}
            name={name}
            required={required}
            extraClassName={extraClassName}
            data={data}
            errorMessage={errorMessage}
        >
            <InputText
                id={name}
                name={name}
                value={value || data?.[name]}
                type={type}
                onChange={(e) => onChange && onChange({ ...e, name: e.target.name, value: e.target.value })}
                className={`w-full ${inputClass ? inputClass : ""} ${errorMessage ? "p-invalid" : ""}`}
                disabled={disabled}
                {...props}
            />
        </InputLayout>
    );
};
export const CustomInputNumber = ({
    label,
    name,
    data,
    value,
    onChange,
    errorMessage,
    extraClassName,
    required,
    col,
    inputClass,
    ...props
}) => {
    return (
        <InputLayout
            col={col || 6}
            label={label}
            name={name}
            required={required}
            extraClassName={extraClassName}
            data={data}
            errorMessage={errorMessage}
        >
            <InputNumber
                id={name}
                name={name}
                value={value || data?.[name] || 0}
                onValueChange={(e) => onChange && onChange({ ...e, name: e.target.name, value: e.value })}
                className={`w-full ${inputClass ? inputClass : ""} ${errorMessage ? "p-invalid" : ""}`}
                useGrouping={props.useGrouping || false}
                {...props}
            />
        </InputLayout>
    );
};

export const CustomCalenderInput = ({
    label,
    name,
    data,
    value,
    onChange,
    errorMessage,
    extraClassName,
    required,
    col,
    inputClass,
    ...props
}) => {
    return (
        <InputLayout
            col={col || 6}
            label={label}
            name={name}
            required={required}
            extraClassName={extraClassName}
            data={data}
            errorMessage={errorMessage}
        >
            <Calendar
                id={name}
                name={name}
                value={value || data?.[name]}
                onChange={(e) => onChange && onChange({ ...e, name: e.target.name, value: e.target.value })}
                className={`w-full ${inputClass ? inputClass : ""} ${errorMessage ? "p-invalid" : ""}`}
                showIcon
                {...props}
                // icon="pi pi-clock"
                // timeOnly
            />
        </InputLayout>
    );
};

export const CustomInputMask = ({
    label,
    name,
    data,
    value,
    onChange,
    errorMessage,
    extraClassName,
    required,
    col,
    inputClass,
    ...props
}) => {
    return (
        <InputLayout
            col={col || 6}
            label={label}
            name={name}
            required={required}
            extraClassName={extraClassName}
            data={data}
            errorMessage={errorMessage}
        >
            <InputMask
                id={name}
                name={name}
                value={value || data?.[name]}
                onChange={(e) => onChange && onChange({ ...e, name: e.target.name, value: e.value })}
                className={`w-full ${inputClass ? inputClass : ""} ${errorMessage ? "p-invalid" : ""}`}
                mask="(999) 999-9999"
                {...props}
            />
        </InputLayout>
    );
};

export const CustomTextArea = ({
    label,
    name,
    onChange,
    data,
    value,
    errorMessage,
    extraClassName,
    required,
    col,
    inputClass,
    disabled = false,
    ...props
}) => {
    return (
        <InputLayout
            col={col || 12}
            label={label}
            name={name}
            required={required}
            extraClassName={extraClassName}
            data={data}
            errorMessage={errorMessage}
        >
            <InputTextarea
                id={name}
                name={name}
                value={value || data?.[name]}
                onChange={(e) => onChange && onChange({ name: e.target.name, value: e.target.value, ...e })}
                className={`w-full ${inputClass ? inputClass : ""} ${errorMessage ? "p-invalid" : ""}`}
                disabled={disabled}
                {...props}
            />
            {errorMessage ? <small className="p-error">{errorMessage}</small> : null}
        </InputLayout>
    );
};
export const CustomChipInput = ({
    label,
    name,
    data,
    value,
    onChange,
    errorMessage,
    extraClassName,
    required,
    col,
    inputClass,
    keyFilter = null,
    disabled = false,
    onRemove,
    onAdd,
    onKeyUp,
    ...props
}) => {
    return (
        <InputLayout
            col={col || 12}
            label={label}
            name={name}
            required={required}
            extraClassName={extraClassName}
            data={data}
            errorMessage={errorMessage}
        >
            <Chips
                id={name}
                onAdd={(e) => onAdd && onAdd({ ...e, name: name, currentValue: e.value })}
                name={name}
                onKeyUp={(e) => {
                    if (e.key === "Enter") return e.preventDefault();
                    onKeyUp && onKeyUp({ ...e, name: e.target.name, value: e.target.value });
                }}
                value={value || data?.[name]}
                onRemove={(e) => onRemove && onRemove({ e, name: name, currentValue: e.value })}
                onChange={(e) => onChange && onChange({ ...e, name: e.target.name, value: [...new Set(e.value)] })}
                className={`w-full p-fluid ${inputClass ? inputClass : ""} ${errorMessage ? "p-invalid" : ""}`}
                placeholder="Press enter to add value."
                disabled={disabled}
                keyfilter={keyFilter}
                {...props}
            />
        </InputLayout>
    );
};
export const CustomAutoComplete = ({
    label,
    name,
    data,
    value,
    onChange,
    errorMessage,
    extraClassName,
    required,
    col,
    inputClass,
    suggestions = [],
    forceSelection = false,
    ...props
}) => {
    const [filtered, setFiltered] = useState([]);
    const search = (event) => {
        let _filtered;
        if (!event.query.trim().length) {
            _filtered = [...suggestions];
        } else {
            _filtered = suggestions.filter((country) => {
                return country.toLowerCase().startsWith(event.query.toLowerCase());
            });
            // _filtered = [event.query,..._filtered];
            if (!forceSelection && !_filtered.length) {
                _filtered = [event.query];
            }
        }
        setFiltered(_filtered);
    };
    return (
        <InputLayout
            col={col || 12}
            label={label}
            name={name}
            required={required}
            extraClassName={extraClassName}
            data={data}
            errorMessage={errorMessage}
        >
            <AutoComplete
                id={name}
                name={name}
                value={value || data?.[name]}
                suggestions={filtered}
                completeMethod={search}
                forceSelection={forceSelection}
                onChange={(e) => onChange && onChange({ ...e, name: e.target.name, value: e.value })}
                className={`w-full p-fluid ${inputClass ? inputClass : ""} ${errorMessage ? "p-invalid" : ""}`}
                placeholder={props.placeholder || `Select or Add ${label}`}
                {...props}
            />
        </InputLayout>
    );
};
export const CustomDropDown = ({
    label,
    name,
    onChange,
    data,
    value,
    errorMessage,
    extraClassName,
    required,
    col,
    inputClass,
    disabled = false,
    optionLabel = "name",
    ...props
}) => {
    return (
        <InputLayout
            col={col || 6}
            label={label}
            name={name}
            required={required}
            extraClassName={extraClassName}
            data={data}
            errorMessage={errorMessage}
        >
            <Dropdown
                id={name}
                name={name}
                value={value || data?.[name]}
                onChange={(e) => onChange && onChange({ ...e, name: e.target.name, value: e.value })}
                className={`w-full ${inputClass ? inputClass : ""} ${errorMessage ? "p-invalid" : ""}`}
                optionLabel={optionLabel}
                placeholder={props.placeholder || `Select ${label}`}
                disabled={disabled}
                {...props}
            />
            {errorMessage ? <small className="p-error">{errorMessage}</small> : null}
        </InputLayout>
    );
};

export const CustomTreeSelect = ({
    label,
    name,
    onChange,
    data,
    value,
    errorMessage,
    extraClassName,
    required,
    col,
    inputClass,
    ...props
}) => {
    return (
        <InputLayout
            col={col || 12}
            label={label}
            name={name}
            required={required}
            extraClassName={extraClassName}
            data={data}
            errorMessage={errorMessage}
        >
            <TreeSelect
                id={name}
                name={name}
                value={value || data?.[name]}
                onChange={(e) => onChange && onChange({ ...e, name: e.target.name, value: e.value })}
                className={`w-full ${inputClass ? inputClass : ""} ${errorMessage ? "p-invalid" : ""}`}
                placeholder={props.placeholder || `Select ${label}`}
                {...props}
            />
            {errorMessage ? <small className="p-error">{errorMessage}</small> : null}
        </InputLayout>
    );
};
export const CustomMultiSelect = ({
    label,
    name,
    onChange,
    data,
    value,
    options,
    errorMessage,
    extraClassName,
    required,
    col,
    inputClass,
    ...props
}) => {
    return (
        <InputLayout
            col={col || 12}
            label={label}
            name={name}
            required={required}
            extraClassName={extraClassName}
            data={data}
            errorMessage={errorMessage}
        >
            <MultiSelect
                id={name}
                name={name}
                value={options.length ? value || data?.[name] : []}
                onChange={(e) => onChange && onChange({ ...e, name: e.target.name, value: e.value })}
                className={`w-full ${inputClass ? inputClass : ""} ${errorMessage ? "p-invalid" : ""}`}
                optionLabel="name"
                options={options}
                display="chip"
                placeholder={props.placeholder || `Select ${label}`}
                {...props}
            />
            {errorMessage ? <small className="p-error">{errorMessage}</small> : null}
        </InputLayout>
    );
};

export function CustomRadioButtons({
    label,
    name,
    onChange,
    data,
    value,
    errorMessage,
    extraClassName,
    required,
    col,
    inputClass,
    options,
    optionLabel,
    ...props
}) {
    return (
        <InputLayout
            col={col || 12}
            label={label}
            name={name}
            required={required}
            extraClassName={extraClassName}
            data={data}
            errorMessage={errorMessage}
        >
            <div div className="flex flex-wrap">
                {options.map((item, i) => (
                    <div key={i} className={`flex align-items-center mr-6`}>
                        <RadioButton
                            value={item}
                            onChange={(e) => onChange && onChange({ name, value: e.target.value, ...e })}
                            checked={_.isEqual(value || data?.[name], item)}
                            id={name}
                            name={item.name}
                            {...props}
                        />
                        &nbsp;&nbsp;
                        <label htmlFor={name}>{optionLabel ? item[optionLabel] : item?.name}</label>
                    </div>
                ))}
            </div>
        </InputLayout>
    );
}

export const CustomInputSwitch = ({
    label,
    name,
    data,
    value,
    onChange,
    errorMessage,
    extraClassName,
    required,
    col,
    inputClass,
    ...props
}) => {
    return (
        <InputLayout
            col={col || 6}
            label={label}
            name={name}
            required={required}
            extraClassName={extraClassName}
            data={data}
            errorMessage={errorMessage}
        >
            <InputSwitch
                id={name}
                name={name}
                checked={value || data?.[name]}
                onChange={(e) => onChange && onChange({ ...e, name: e.target.name, value: e.value })}
                className={`${inputClass ? inputClass : ""} ${errorMessage ? "p-invalid" : ""}`}
                {...props}
            />
        </InputLayout>
    );
};
