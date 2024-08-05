import React from "react";
import TableCard from "../../shared/TableCard/TableCard";
import { DataTable } from "primereact/datatable";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { Column } from "primereact/column";
import { Chip } from "primereact/chip";
import { getUniqueObjFromArray } from "../../utils/arrayFunctions";
import { MultiSelect } from "primereact/multiselect";

import raw from "../../assets/icons/raw.png";
import semi from "../../assets/icons/semi.png";

const MaterialsTable = ({ data, loading, history, search, setSearch, activeCategory }) => {
    const filters = {
        code: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
        unit: { value: null, matchMode: FilterMatchMode.IN },
        quantity: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
        tags: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
    };
    const actions = (d) => {
        return (
            <div className="flex justify-content-around">
                <i className="fa-solid fa-eye cursor-pointer" onClick={() => history.push(`materials/view/${d._id}`)}></i>
                <i className="fa-solid fa-pencil cursor-pointer" onClick={() => history.push(`materials/edit/${d._id}`)}></i>
                <i className="fa-solid fa-luggage-cart cursor-pointer"></i>
            </div>
        );
    };
    const types = (d) => {
        return (
            <div className="flex justify-content-around">
                <img src={d.type === "RAW" ? raw : semi} alt="" width="25px" />
            </div>
        );
    };
    const tags = (d) => {
        return (
            <div className=" flex flex-wrap gap-2">
                {d?.tags?.map((item, index) => {
                    return <Chip key={index} label={item} />;
                })}
            </div>
        );
    };
    const unit = (d) => {
        return <div>{d.unit.name}</div>;
    };
    const unitFilter = (options) => {
        return (
            <>
                <div className="mb-3 text-bold">Units</div>
                <MultiSelect
                    className="p-column-filter"
                    value={options.value}
                    options={getUniqueObjFromArray(data.map((item) => item.unit))}
                    onChange={(e) => options.filterCallback(e.value)}
                    optionLabel="name"
                    placeholder="Units"
                />
            </>
        );
    };
    return (
        <TableCard
            title="Material Directory"
            onSearch={setSearch}
            searchKeyword={search}
            buttonTitle="Add New"
            linkTo={{
                pathname: "/materials/add",
                state: { activeCategory },
            }}
        >
            <DataTable
                value={data}
                paginator
                className="p-datatable-gridlines"
                showGridlines
                rows={10}
                filters={filters}
                filterDisplay="menu"
                loading={loading}
                responsiveLayout="scroll"
                emptyMessage="No Material found."
            >
                <Column
                    field="code"
                    header="Code"
                    style={{ width: "200px" }}
                    filterField="code"
                    filter
                    filterPlaceholder="Search by code"
                    showFilterMatchModes={false}
                    showFilterOperator={false}
                    showAddButton={false}
                ></Column>
                <Column
                    field="name"
                    header="Name"
                    filterField="name"
                    filter
                    filterPlaceholder="Search by name"
                    showFilterMatchModes={false}
                    showFilterOperator={false}
                    showAddButton={false}
                ></Column>
                <Column body={tags} header="Tags" filterField="tags" filter filterPlaceholder="Search by tags"></Column>
                <Column
                    body={unit}
                    header="Unit"
                    filterField="unit"
                    filter
                    filterElement={unitFilter}
                    filterMenuStyle={{ width: "14rem" }}
                    showFilterMatchModes={false}
                ></Column>

                {!activeCategory ? <Column header="Category" field="category.name" /> : null}
                <Column
                    field="quantity"
                    header="Qty"
                    style={{ width: "100px" }}
                    filterField="quantity"
                    filter
                    filterPlaceholder="Search by quantity"
                />
                <Column header="Type" body={types} style={{ width: "100px" }} />
                <Column body={actions} style={{ width: "180px" }} header="Action" />
            </DataTable>
        </TableCard>
    );
};

export default MaterialsTable;
