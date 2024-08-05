import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { confirmPopup } from "primereact/confirmpopup";
import { useHistory } from "react-router-dom";
import { getCustomers, deleteCustomer } from "../../redux/actions/customerActions";

export default function Index() {
    const history = useHistory();
    const dispatch = useDispatch();

    let { allCustomers } = useSelector((state) => state?.customers);

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        dispatch(getCustomers(setLoading));
    }, [dispatch]);

    const [search, setSearch] = useState("");
    const getFilteredData = (data, search) => {
        if (search.length) {
            data = data.filter((item) => item?.name?.includes(search) || item?.companyName?.includes(search));
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
                    dispatch(deleteCustomer(id));
                },
                reject: () => {},
            });
        }
    };

    allCustomers = getFilteredData(allCustomers, search);
    return { allCustomers, loading, history, search, setSearch, deleteRow };
}
