import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { MultiSelect } from "primereact/multiselect";
import TableCard from "../../shared/TableCard/TableCard";
import { FilterMatchMode } from "primereact/api";
import { getUniqueObjFromArray } from "../../utils/arrayFunctions";
import { getSearchedData } from "../../utils/commonFunctions";

export default function ReadyProjectsTable({ data, loading, history, search, setSearch }) {
    const filters = {
        classType: { value: null, matchMode: FilterMatchMode.IN },
        injectionType: { value: null, matchMode: FilterMatchMode.IN },
        season: { value: null, matchMode: FilterMatchMode.IN },
        group: { value: null, matchMode: FilterMatchMode.IN },
    };

    const keys = ["name", "injectionType.name", "season.name", "classType.name", "group.name"];
    const [keyword, setKeyword] = useState("");

    const injectionTypeFilter = (options) => {
        return (
            <>
                <div className="mb-3 text-bold">Injection Types</div>
                <MultiSelect
                    className="p-column-filter"
                    value={options.value}
                    options={getUniqueObjFromArray(data.map((item) => item.injectionType))}
                    onChange={(e) => options.filterCallback(e.value)}
                    optionLabel="name"
                    placeholder="Injection Types"
                />
            </>
        );
    };
    const seasonFilter = (options) => {
        return (
            <>
                <div className="mb-3 text-bold">Seasons</div>
                <MultiSelect
                    className="p-column-filter"
                    value={options.value}
                    options={getUniqueObjFromArray(data.map((item) => item.season))}
                    onChange={(e) => options.filterCallback(e.value)}
                    optionLabel="name"
                    placeholder="Seasons"
                />
            </>
        );
    };
    const classTypeFilter = (options) => {
        return (
            <>
                <div className="mb-3 text-bold">Class Types</div>
                <MultiSelect
                    className="p-column-filter"
                    value={options.value}
                    options={getUniqueObjFromArray(data.map((item) => item.classType))}
                    onChange={(e) => options.filterCallback(e.value)}
                    optionLabel="name"
                    placeholder="Class Types"
                />
            </>
        );
    };
    const groupFilter = (options) => {
        return (
            <>
                <div className="mb-3 text-bold">Groups</div>
                <MultiSelect
                    className="p-column-filter"
                    value={options.value}
                    options={getUniqueObjFromArray(data.map((item) => item.group))}
                    onChange={(e) => options.filterCallback(e.value)}
                    optionLabel="name"
                    placeholder="Groups"
                />
            </>
        );
    };

    const actions = (d) => {
        return (
            <div className="flex justify-content-around">
                <i
                    className="fa-solid fa-info-circle cursor-pointer"
                    style={{ color: "#f00" }}
                    onClick={() => history.push(`/products/edit/${d._id}`)}
                ></i>
                <i className="fa-solid fa-eye cursor-pointer" onClick={() => history.push(`/products/view/${d._id}`)}></i>
                <i className="fa-solid fa-tag cursor-pointer"></i>
                <i className="fa-solid fa-chevron-right cursor-pointer"></i>
            </div>
        );
    };

    return (
        <TableCard
            title="Products Directory"
            onSearch={setKeyword}
            searchKeyword={keyword}
            buttonTitle="Add New"
            linkTo="/products/add"
        >
            <DataTable
                className="p-datatable-gridlines"
                value={getSearchedData(data, keyword, keys)}
                filters={filters}
                rows={10}
                loading={loading}
                paginator
                showGridlines
                responsiveLayout="scroll"
                emptyMessage="No projects found."
            >
                <Column header="Project Code" field="code"></Column>
                <Column header="Project Name" field="name"></Column>
                <Column
                    header="Injection Type"
                    body={(d) => d?.injectionType?.name}
                    filter
                    filterField="injectionType"
                    filterElement={injectionTypeFilter}
                    filterMenuStyle={{ width: "14rem" }}
                    showFilterMatchModes={false}
                    style={{ minWidth: "14rem" }}
                ></Column>
                <Column
                    header="Season"
                    body={(d) => d?.season?.name}
                    filter
                    filterField="season"
                    filterElement={seasonFilter}
                    filterMenuStyle={{ width: "14rem" }}
                    showFilterMatchModes={false}
                    style={{ minWidth: "14rem" }}
                ></Column>
                <Column
                    header="Class"
                    body={(d) => d?.classType?.name}
                    filter
                    filterField="classType"
                    filterElement={classTypeFilter}
                    filterMenuStyle={{ width: "14rem" }}
                    showFilterMatchModes={false}
                    style={{ minWidth: "14rem" }}
                ></Column>
                <Column
                    header="Group"
                    body={(d) => d?.group?.name}
                    filter
                    filterField="group"
                    filterElement={groupFilter}
                    filterMenuStyle={{ width: "14rem" }}
                    showFilterMatchModes={false}
                    style={{ minWidth: "14rem" }}
                ></Column>
                <Column header="Available Qty" body={() => "0"}></Column>
                <Column header="Actions" body={actions} style={{ width: "200px" }}></Column>
            </DataTable>
        </TableCard>
    );
}
