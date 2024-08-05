import React from "react";
import Index from "./index";
import Background from "../../shared/Background/Background";
import ProjectsTable from "./ReadyProjectsTable";

const ReadyProjects = () => {
    const { allReadyProjects, loading, history } = Index();
    return (
        <Background heading="Design">
            <ProjectsTable data={allReadyProjects} loading={loading} history={history} />
        </Background>
    );
};
const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname && prevProps.colorMode === nextProps.colorMode;
};
export default React.memo(ReadyProjects, comparisonFn);
