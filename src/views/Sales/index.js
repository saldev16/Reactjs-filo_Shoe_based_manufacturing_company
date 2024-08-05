import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { confirmPopup } from "primereact/confirmpopup";
import { useHistory } from "react-router-dom";
import { getDrafts } from "../../redux/actions/salesAction";

export default function Index() {
    const history = useHistory();
    const dispatch = useDispatch();

    let { drafts } = useSelector((state) => state?.sales);

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        dispatch(getDrafts(setLoading));
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
                    // dispatch(deleteCustomer(id));
                },
                reject: () => {},
            });
        }
    };

    drafts = getFilteredData(drafts, search);
    return { drafts, loading, history, search, setSearch, deleteRow };
}
