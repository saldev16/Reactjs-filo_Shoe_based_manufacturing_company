import React from "react";
import Background from "../../shared/Background/Background";
import CustomerTable from "./CustomerTable";
import Index from "./index";

const Customers = () => {
    const { allCustomers, loading, history, search, setSearch, deleteRow } = Index();
    return (
        <Background heading="Customer">
            <CustomerTable
                allCustomers={allCustomers}
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
export default React.memo(Customers, comparisonFn);
