import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TableCard from "../../shared/TableCard/TableCard";
import TableImage from "../../shared/Input/TableImage";

export default function SupplierTable({ allSuppliers, loading, history, search, setSearch, deleteRow }) {
    const actions = (d) => {
        return (
            <div className="flex justify-content-around">
                <i className="fa-solid fa-eye cursor-pointer" onClick={() => history.push(`suppliers/view/${d._id}`)}></i>
                <i className="fa-solid fa-pencil cursor-pointer" onClick={() => history.push(`suppliers/edit/${d._id}`)}></i>
                <i className="fa-solid fa-trash-can cursor-pointer" onClick={(e) => deleteRow(e, d._id)}></i>
            </div>
        );
    };

    return (
        <TableCard
            title="Suppliers Directory"
            onSearch={setSearch}
            searchKeyword={search}
            buttonTitle="Add Supplier"
            linkTo="/suppliers/add"
        >
            <DataTable
                paginator
                value={allSuppliers}
                className="p-datatable-gridlines"
                showGridlines
                rows={10}
                loading={loading}
                responsiveLayout="scroll"
                emptyMessage="No supplier found."
            >
                <Column field="code" header="Code" style={{ width: "200px" }}></Column>
                <Column field="name" header="Name" style={{ width: "200px" }}></Column>
                <Column body={({ image }) => <TableImage image={image} />} header="Image" style={{ width: "200px" }}></Column>
                <Column field="type" header="Supplier Type" style={{ width: "200px" }}></Column>
                <Column field="phone" header="Phone No." style={{ width: "200px" }}></Column>
                <Column field="email" header="Email" style={{ width: "200px" }}></Column>
                <Column field="website" header="Website" style={{ width: "200px" }}></Column>
                <Column field="companyId" header="Tax-Id" style={{ width: "200px" }}></Column>
                <Column body={actions} style={{ width: "200px" }} header="Action"></Column>
            </DataTable>
        </TableCard>
    );
}
