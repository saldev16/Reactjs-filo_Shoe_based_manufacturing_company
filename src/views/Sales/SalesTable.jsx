import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TableCard from "../../shared/TableCard/TableCard";

export default function SalesTable({ data, loading, history, search, setSearch, deleteRow }) {
    const actions = (d) => {
        return (
            <div className="flex justify-content-around">
                <i className="fa-solid fa-eye cursor-pointer" onClick={() => history.push(`customers/view/${d._id}`)}></i>
                <i className="fa-solid fa-pencil cursor-pointer" onClick={() => history.push(`customers/edit/${d._id}`)}></i>
                <i className="fa-solid fa-trash-can cursor-pointer" onClick={(e) => deleteRow(e, d._id)}></i>
            </div>
        );
    };

    return (
        <TableCard
            title="Draft-Order Directory"
            onSearch={setSearch}
            searchKeyword={search}
            buttonTitle="Add New Draft-order"
            linkTo="/draft/add"
        >
            <DataTable
                paginator
                value={data}
                className="p-datatable-gridlines"
                showGridlines
                rows={10}
                loading={loading}
                responsiveLayout="scroll"
                emptyMessage="No record found."
            >
                <Column field="code" header="ID/Code" style={{ width: "200px" }}></Column>
                <Column field="recipientName" header="Recipient Name" style={{ width: "200px" }}></Column>
                <Column field="dateOfIssue" header="Date of Issue" style={{ width: "200px" }}></Column>
                <Column field="deadline" header="Deadline" style={{ width: "200px" }}></Column>
                <Column field="paymentTerms" header="Payment Terms" style={{ width: "200px" }}></Column>
                <Column field="qty" header="Total Qty" style={{ width: "200px" }}></Column>
                <Column field="price" header="Total Price" style={{ width: "200px" }}></Column>
                <Column field="customPreset" header="Custom Preset" style={{ width: "200px" }}></Column>
                <Column field="participants" header="Participants" style={{ width: "200px" }}></Column>
                <Column field="status" header="Status" style={{ width: "200px" }}></Column>
                <Column field="priority" header="Priority" style={{ width: "200px" }}></Column>

                <Column body={actions} style={{ width: "200px" }} header="Action"></Column>
            </DataTable>
        </TableCard>
    );
}
