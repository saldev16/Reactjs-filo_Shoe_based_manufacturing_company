import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { allDepartments } from "../../utils/departments";
import { getProfile } from "../../redux/actions/profileAction";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = (props) => {
    const profile = useSelector((state) => state?.profile?.userProfile);

    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        if (!Object.keys(profile).length) {
            dispatch(getProfile());
        }
    }, [dispatch, profile]);

    let allMatchedData = (permissions) =>
        permissions.reduce((acc, status) => {
            const matches = allDepartments.filter((message) => message.name === status.name);
            if (matches.length > 0) {
                acc = acc.concat(matches);
            }
            return acc;
        }, []);

    const renderDepartments = (items) => {
        return items.map((item, i) => (
            <div key={i} className="p-2  dashboardModuleCard">
                <div className="text-center border h-full">
                    <div
                        className="card h-full flex justify-content-between flex-column p-3 dashboard-card mb-0 cursor-pointer shadow"
                        onClick={() => history.push(item?.path)}
                        style={{ boxShadow: `5px -1px 10px -1px ${item?.tabColor}`, background: item?.tabColor }}
                    >
                        <div className="flex justify-content-center mb-3">
                            <img src={item?.icon} alt="" width="50%" />
                        </div>
                        <span className="text-white font-medium">{item?.name}</span>
                    </div>
                </div>
            </div>
        ));
    };
    return (
        <div className="grid mt-3 h-full w-full">
            <div className="col-11 lg:col-9 xl:col-7 mx-auto fg">
                <div className="card glass">
                    <div className="grid m-0 ">
                        {profile?.permissions &&
                            profile?.permissions.length &&
                            renderDepartments(allMatchedData(profile?.permissions))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname && prevProps.colorMode === nextProps.colorMode;
};

export default React.memo(Dashboard, comparisonFn);
