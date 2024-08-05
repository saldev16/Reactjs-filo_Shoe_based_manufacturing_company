import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTools } from "../../redux/actions/toolAction";
import { showToast } from "../../redux/actions/toastAction";

export default function Index() {
    const history = useHistory();
    const location = useLocation();

    const dispatch = useDispatch();
    let { allTools } = useSelector((state) => state?.tools);
    const [selectedTool, setSelectedTool] = useState();

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (location.pathname === '/projects/add/add-tool' && !location.state?.fromProjects && !location.state?.fromOperations) return history.push('/projects/add');
        dispatch(getTools(setLoading));
    }, [dispatch]);

    const [search, setSearch] = useState("");
    const getFilteredData = (data, search) => {
        if (search.length) {
            data = data.filter((item) => item?.code?.toLowerCase().includes(search?.toLowerCase()));
        }
        return data;
    };

    const onClick = () => {
        if (location.pathname === '/projects/add/add-tool') {
            if (!selectedTool) {
                dispatch(showToast({ severity: "error", summary: 'Please select a tool first.' }));
            } else {
                history.push({
                    pathname: location.state.id ? `/projects/edit/${location.state.id}` : '/projects/add', state: location.state?.fromProjects ?
                        { project: { ...location.state?.project, injectionTool: selectedTool.code }, completeForm: location.state?.completeForm, editProfileId: location.state?.editProfileId } :
                        { operation: { ...location.state?.operation, tool: selectedTool.code }, completeForm: location.state?.completeForm, editProfileId: location.state?.editProfileId }
                });
            }
        } else {
            history.push('/tools/add');
        }
    };

    const onClickCancel = () => {
        return history.push({
            pathname: location.state.id ? `/projects/edit/${location.state.id}` : '/projects/add', state: location.state?.fromProjects ?
                { project: { ...location.state?.project }, completeForm: location.state?.completeForm, editProfileId: location.state?.editProfileId } :
                { operation: { ...location.state?.operation }, completeForm: location.state?.completeForm, editProfileId: location.state?.editProfileId }
        });;
    };

    allTools = getFilteredData(allTools, search);
    return { allTools, loading, search, setSearch, history, location, selectedTool, setSelectedTool, onClickCancel, onClick };
}
