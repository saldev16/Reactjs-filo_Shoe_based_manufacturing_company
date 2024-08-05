import React from "react";
import Background from "../../shared/Background/Background";
import Index from "./index";
import ReplacementTable from "./ReplacementTable";

const Replacements = () => {
    const { allReplacements, loading, search, setSearch, history, deleteRow } = Index();
    return (
        <Background heading="Replacement">
            <ReplacementTable
                data={allReplacements}
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
export default React.memo(Replacements, comparisonFn);
