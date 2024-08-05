import React from "react";
import TableCard from "../../shared/TableCard/TableCard";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TableImage from "../../shared/Input/TableImage";

export default function ReplacementTable({ data, loading, history, search, setSearch, deleteRow }) {
    const actions = (d) => {
        return (
            <div className="flex justify-content-around">
                <i className="fa-solid fa-pencil cursor-pointer" onClick={() => history.push(`replacements/edit/${d._id}`)}></i>
                <i className="fa-solid fa-trash-can cursor-pointer" onClick={(e) => deleteRow(e, d._id)}></i>
                <i className="fa-solid fa-calendar-days cursor-pointer"></i>
            </div>
        );
    };
    return (
        <TableCard
            title="Replacement Directory"
            onSearch={setSearch}
            searchKeyword={search}
            buttonTitle="Add New Replacement"
            linkTo="/replacements/add"
        >
            <DataTable
                value={data}
                paginator
                className="p-datatable-gridlines"
                showGridlines
                rows={10}
                loading={loading}
                responsiveLayout="scroll"
                emptyMessage="No replacement found."
            >
                <Column field="code" header="Replacement Code" style={{ width: "200px" }}></Column>
                <Column body={(v) => v.description.slice(0, 700)} header=" Replacement Description"></Column>
                <Column body={(v) => v.supplier.code} header="Replacement Supplier Code"></Column>
                <Column body={({ images }) => <TableImage image={images[0]} />} header="Replacement Image"></Column>
                <Column field="avlQty" header="Available Qty" style={{ width: "200px" }}></Column>
                <Column body={actions} style={{ width: "200px" }} header="Action"></Column>
            </DataTable>
        </TableCard>
    );
}
