import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { confirmPopup } from "primereact/confirmpopup";
import { useSelector, useDispatch } from "react-redux";
import { getMachines } from "../../redux/actions/machineActions";

export default function Index() {
    const history = useHistory();
    const dispatch = useDispatch();
    let { allMachines } = useSelector((state) => state?.machines);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        dispatch(getMachines(setLoading));
    }, [dispatch]);

    const [search, setSearch] = useState("");
    const getFilteredData = (data, search) => {
        if (search.length) {
            data = data.filter(
                (item) =>
                    item?.name?.toLowerCase()?.includes(search?.toLowerCase()) ||
                    item.code?.toLowerCase().includes(search?.toLowerCase()) ||
                    item?.operation?.name?.toLowerCase().includes(search?.toLowerCase())
            );
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
                    // dispatch(deleteEmployee(id));
                },
                reject: () => {},
            });
        }
    };

    let machines = getFilteredData(allMachines, search);
    return { machines, loading, history, search, setSearch, deleteRow };
}
