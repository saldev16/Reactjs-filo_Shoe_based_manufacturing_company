import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { MultiSelect } from "primereact/multiselect";
import TableCard from "../../shared/TableCard/TableCard";

import { FilterMatchMode } from "primereact/api";
import { getUniqueObjFromArray } from "../../utils/arrayFunctions";
import { getSearchedData } from "../../utils/commonFunctions";
import TableImage from "../../shared/Input/TableImage";

export default function ProjectsTable({ data, loading, history, search, setSearch }) {
    const filters = {
        classType: { value: null, matchMode: FilterMatchMode.IN },
        sole: { value: null, matchMode: FilterMatchMode.IN },
        season: { value: null, matchMode: FilterMatchMode.IN },
        group: { value: null, matchMode: FilterMatchMode.IN },
    };

    const keys = ["name", "sole.name", "season.name", "classType.name", "group.name"];
    const [keyword, setKeyword] = useState("");

    const soleFilter = (options) => {
        return (
            <>
                <div className="mb-3 text-bold">Sole Types</div>
                <MultiSelect
                    className="p-column-filter"
                    value={options.value}
                    options={getUniqueObjFromArray(data.map((item) => item.sole))}
                    onChange={(e) => options.filterCallback(e.value)}
                    optionLabel="name"
                    placeholder="Sole Types"
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
                <i className="fa-solid fa-eye cursor-pointer" onClick={() => history.push(`/projects/view/${d._id}`)}></i>
                <i className="fa-solid fa-pencil cursor-pointer" onClick={() => history.push(`/projects/edit/${d._id}`)}></i>
            </div>
        );
    };

    const status = (d) => {
        return <div className="flex justify-content-around">{d.status}</div>;
    };

    return (
        <TableCard
            title="Projects Directory"
            onSearch={setKeyword}
            searchKeyword={keyword}
            buttonTitle="Add New"
            linkTo="/projects/add"
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
                <Column header="Project Name" field="name"></Column>
                <Column header="Project Number" field="projectNumber"></Column>
                <Column header="Image" body={({ images }) => <TableImage image={""} />}></Column>

                <Column
                    header="Sole Type"
                    body={(d) => d?.sole?.name}
                    filter
                    filterField="sole"
                    filterElement={soleFilter}
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
                <Column header="Status" body={status}></Column>
                <Column header="Actions" body={actions} style={{ width: "100px" }}></Column>
            </DataTable>
        </TableCard>
    );
}
