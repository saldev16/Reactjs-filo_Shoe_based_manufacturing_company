import React from "react";
import Index from "./index";
import Background from "../../shared/Background/Background";
import MaterialsTable from "./MaterialsTable";
import Categories from "./Categories";

const Materials = () => {
    const {
        allMaterials,
        allCategories,
        getTreeTable,
        search,
        setSearch,
        loading,
        history,
        deleteRow,
        activeCategory,
        setActiveCategory,
    } = Index();
    return (
        <Background heading="Design">
            <div className="grid">
                <div className="col-12 md:col-4">
                    <Categories
                        allCategories={allCategories}
                        getTreeTable={getTreeTable}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                    />
                </div>
                <div className="col-12 md:col-8">
                    <MaterialsTable
                        data={allMaterials}
                        search={search}
                        setSearch={setSearch}
                        loading={loading}
                        history={history}
                        deleteRow={deleteRow}
                        activeCategory={activeCategory}
                    />
                </div>
            </div>
        </Background>
    );
};
const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname && prevProps.colorMode === nextProps.colorMode;
};
export default React.memo(Materials, comparisonFn);
