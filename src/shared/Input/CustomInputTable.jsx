import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
// import { ProductService } from "./service/ProductService";

import InputLayout from "./InputLayout";

export default function CustomInputTable({
    label,
    name,
    cols,
    rows,
    errorMessage,
    extraClassName,
    data,
    col,
    required,
    onChange,
}) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (onChange) {
            onChange({ name, value: products });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products, name]);

    const productCol = [{ field: "product.color", header: "Product", isEditable: false, isNumberInput: false }];
    const totalCol = [{ field: "total", header: "Total", isEditable: false, isNumberInput: true }];
    const [columns, setColumns] = useState([]);
    // const [tableRows, setTableRows] = useState([]);
    useEffect(() => {
        let newArr = [...productCol];
        if (cols && cols.length) {
            let newCols = cols.map((item) => ({ field: item, header: item, isEditable: true, isNumberInput: true }));
            newArr = [...newArr, ...newCols];
        }
        newArr = [...newArr, ...totalCol];
        setColumns([...newArr]);

        let _p = rows.map((item) => ({
            product: item,
        }));
        setProducts(_p);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cols, rows]);

    const isPositiveInteger = (val) => {
        let str = String(val);

        str = str.trim();

        if (!str) {
            return false;
        }

        str = str.replace(/^0+/, "") || "0";
        let n = Math.floor(Number(str));

        return n !== Infinity && String(n) === str && n >= 0;
    };

    // const onCellEditComplete = (e) => {
    //     console.log(e);
    //     let { rowData, newValue, field, originalEvent: event } = e;

    //     if (isPositiveInteger(field)) {
    //         if (isPositiveInteger(newValue)) {
    //             rowData[field] = newValue;
    //         } else {
    //             event.preventDefault();
    //         }
    //     } else {
    //         switch (field) {
    //             case "total":
    //             case "price":
    //                 if (isPositiveInteger(newValue)) rowData[field] = newValue;
    //                 else event.preventDefault();
    //                 break;

    //             default:
    //                 if (newValue.trim().length > 0) rowData[field] = newValue;
    //                 else event.preventDefault();
    //                 break;
    //         }
    //     }
    // };

    const onCellEditComplete = (e) => {
        let { rowIndex, newValue, field, originalEvent: event } = e;
        event.preventDefault();
        let newArr = [...products];
        if (isPositiveInteger(field)) {
            if (isPositiveInteger(newValue)) {
                newArr[rowIndex][field] = newValue;
            }
        } else {
            switch (field) {
                case "total":
                case "price":
                    if (isPositiveInteger(newValue)) {
                        newArr[rowIndex][field] = newValue;
                    }
                    break;

                default:
                    if (newValue.trim().length > 0) {
                        newArr[rowIndex][field] = newValue;
                    } else event.preventDefault();
                    break;
            }
        }
        setProducts([...newArr]);
    };

    const cellEditor = (options, isNumberField) => {
        if (isNumberField) {
            return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} />;
        } else {
            return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
        }
    };

    return (
        <InputLayout
            col={col || 12}
            label={label || "Add"}
            name={name}
            required={required}
            extraClassName={extraClassName}
            data={data}
            errorMessage={errorMessage}
        >
            <DataTable value={products} editMode="cell" showGridlines responsiveLayout="scroll">
                {columns.map(({ field, header, isEditable, isNumberInput }) => {
                    return (
                        <Column
                            key={field}
                            field={field}
                            header={header}
                            style={{ width: `${100 / columns.length}%` }}
                            editor={isEditable ? (options) => cellEditor(options, isNumberInput) : false}
                            onCellEditComplete={onCellEditComplete}
                        />
                    );
                })}
            </DataTable>
        </InputLayout>
    );
}
