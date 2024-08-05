import React from "react";
import Background from "../../shared/Background/Background";
import SupplierTable from "./SupplierTable";
import Index from "./index";

const Suppliers = () => {
    const { allSuppliers, loading, history, search, setSearch, deleteRow } = Index();
    return (
        <Background heading="Supplier">
            <SupplierTable
                allSuppliers={allSuppliers}
                loading={loading}
                history={history}
                search={search}
                setSearch={setSearch}
                deleteRow={deleteRow}
            />
        </Background>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname && prevProps.colorMode === nextProps.colorMode;
};
export default React.memo(Suppliers, comparisonFn);
