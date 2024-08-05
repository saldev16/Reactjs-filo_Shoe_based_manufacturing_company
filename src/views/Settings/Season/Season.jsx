import React from "react";
import Background from "../../../shared/Background/Background";
import Index from "./index";
import SeasonTable from "./SeasonTable";

const Season = () => {
    const { AllSeasons, loading, history, search, setSearch, deleteRow } = Index();
    return (
        <Background heading="Setting">
            <SeasonTable
                AllSeasons={AllSeasons}
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
export default React.memo(Season, comparisonFn);
