import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
// import { Chip } from "primereact/chip";
import TableCard from "../../../shared/TableCard/TableCard";

export default function SubToolsTable({ data, loading, openSubToolEdit }) {
    const actions = (d, { rowIndex }) => {
        return (
            <div className="flex justify-content-around">
                <i className="fa-solid fa-pencil cursor-pointer" onClick={() => openSubToolEdit(rowIndex, d)}></i>
            </div>
        );
    };
    // const sizes = (d) => {
    //     return (
    //         <div className=" flex flex-wrap gap-2">
    //             {d?.sizes?.map((item, index) => {
    //                 return <Chip key={index} label={item} />;
    //             })}
    //         </div>
    //     );
    // };
    return (
        <TableCard extraClassName="mb-4">
            <DataTable
                value={data}
                paginator
                className="p-datatable-gridlines"
                showGridlines
                rows={10}
                loading={loading}
                responsiveLayout="scroll"
                emptyMessage="No sub tool found."
            >
                <Column field="code" header="Sub Tool Code" style={{ width: "100px" }}></Column>
                <Column field="name" header="Name" style={{ width: "100px" }}></Column>
                <Column field="name" header="Sizes" style={{ width: "300px" }}></Column>
                <Column field="quantity" header="Qty available" style={{ width: "100px" }}></Column>
                <Column body={actions} header="Action" style={{ width: "100px" }}></Column>
            </DataTable>
        </TableCard>
    );
}
