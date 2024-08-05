import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { confirmPopup } from "primereact/confirmpopup";
import { useHistory } from "react-router-dom";
import { getSuppliers, deleteSupplier } from "../../redux/actions/supplierAction";

export default function Index() {
    const history = useHistory();
    const dispatch = useDispatch();

    let { allSuppliers } = useSelector((state) => state?.suppliers);

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        dispatch(getSuppliers(setLoading));
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
                    dispatch(deleteSupplier(id));
                },
                reject: () => {},
            });
        }
    };

    allSuppliers = getFilteredData(allSuppliers, search);
    return { allSuppliers, loading, history, search, setSearch, deleteRow };
}
