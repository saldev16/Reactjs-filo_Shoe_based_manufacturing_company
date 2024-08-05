import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { confirmPopup } from "primereact/confirmpopup";

import { useHistory } from "react-router-dom";
import { getOperations, deleteOperation } from "../../redux/actions/operationActions";

export default function Index() {
    const history = useHistory();
    const dispatch = useDispatch();

    let { allOperations } = useSelector((state) => state?.operations);

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        dispatch(getOperations(setLoading));
    }, [dispatch]);

    const [search, setSearch] = useState("");
    const getFilteredData = (data, search) => {
        if (search.length) {
            data = data.filter((item) => item.name.includes(search) || item.description.includes(search));
        }
        return data;
    };

    const deleteRow = (event, id) => {
        if (id) {
            confirmPopup({
                target: event.currentTarget,
                message: "Are you sure you want to Delete?",
                icon: "pi pi-exclamation-triangle",
                accept: () => {
                    dispatch(deleteOperation(id));
                },
                reject: () => {},
            });
        }
    };

    allOperations = getFilteredData(allOperations, search);
    return { allOperations, loading, history, search, setSearch, deleteRow };
}
