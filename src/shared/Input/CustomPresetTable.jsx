import React, { useEffect, useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import InputLayout from "./InputLayout";
import PrimaryButtom, { PrimaryButtonOutlined } from "../Button/PrimaryButton";

export default function CustomPresetTable({
    products,
    sizes,
    label,
    name,
    errorMessage,
    extraClassName,
    data,
    col,
    required,
    onChange,
}) {
    useEffect(() => {
        if (products.length && sizes?.length) {
            let _table = products.map(() => sizes.map(() => 0));
            setTableData(_table);
        }
    }, [products]);

    const [tableData, setTableData] = useState([]);
    const calculateRowTotal = (row) => {
        if (row) {
            return row.reduce((acc, currentValue) => acc + parseFloat(currentValue || 0), 0);
        } else {
            return 0;
        }
    };

    const calculateColumnTotal = (columnIndex) => {
        if (columnIndex + 1) {
            return tableData.reduce((acc, currentRow) => acc + parseFloat(currentRow[columnIndex] || 0), 0);
        } else {
            return 0;
        }
    };

    const handleCellChange = (newValue, rowIndex, columnIndex) => {
        const updatedTableData = [...tableData];
        updatedTableData[rowIndex][columnIndex] = parseInt(newValue || 0);
        setTableData(updatedTableData);
    };

    const getSumTotal = () => {
        return tableData.reduce((acc, row) => acc + calculateRowTotal(row), 0);
    };

    const createRes = () => {
        let pro = [];
        if (tableData?.length) {
            pro = products.map((item, i) => ({
                product: item,
                sizes: sizes.map((size, sizeInd) => ({ [size]: tableData[i][sizeInd] })),
                total: calculateRowTotal(tableData[i]),
            }));
        }

        return { products: pro, sizes, sumTotal: getSumTotal() };
    };

    useEffect(() => {
        if (onChange) {
            onChange({ name, value: createRes() });
        }
    }, [tableData]);

    return (
        <>
            {products.length && sizes?.length ? (
                <InputLayout
                    col={col || 12}
                    label={label || "Add"}
                    name={name}
                    required={required}
                    extraClassName={extraClassName}
                    data={data}
                    errorMessage={errorMessage}
                >
                    <div>
                        <div
                            className="p-datatable p-component p-datatable-responsive-scroll p-datatable-gridlines"
                            data-scrollselectors=".p-datatable-wrapper"
                        >
                            <div className="p-datatable-wrapper">
                                <table className="p-datatable-table" role="table">
                                    <thead className="p-datatable-thead">
                                        <tr role="row">
                                            <th className="" role="columnheader">
                                                <div className="p-column-header-content">
                                                    <span className="p-column-title">Product</span>
                                                </div>
                                            </th>
                                            {sizes.map((size, sizeIndex) => (
                                                <th className="" role="columnheader" key={sizeIndex}>
                                                    <div className="p-column-header-content">
                                                        <span className="p-column-title">{size}</span>
                                                    </div>
                                                </th>
                                            ))}

                                            <th role="columnheader">
                                                <div className="p-column-header-content">
                                                    <span className="p-column-title">Total</span>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="p-datatable-tbody">
                                        {products.map((product, rowIndex) => (
                                            <tr key={rowIndex}>
                                                <td className="font-medium surface-100">{product?.code}</td>
                                                {sizes.map((_, columnIndex) => (
                                                    <td className="" key={columnIndex}>
                                                        <input
                                                            className="w-full"
                                                            style={{ border: "none", outline: "none" }}
                                                            value={tableData?.[rowIndex]?.[columnIndex] || 0}
                                                            onChange={(e) =>
                                                                handleCellChange(e.target.value, rowIndex, columnIndex)
                                                            }
                                                        />
                                                    </td>
                                                ))}
                                                <td className="font-medium ">{calculateRowTotal(tableData[rowIndex])}</td>
                                            </tr>
                                        ))}
                                        <tr className="font-medium">
                                            <td className="surface-100">Sum Total</td>
                                            {sizes.map((_, columnIndex) => (
                                                <td key={columnIndex}>{calculateColumnTotal(columnIndex)}</td>
                                            ))}
                                            <td className="font-bold">{getSumTotal()}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </InputLayout>
            ) : null}
        </>
    );
}
