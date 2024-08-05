import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { confirmPopup } from "primereact/confirmpopup";
import { useHistory } from "react-router-dom";
import { deleteSeason, getSeasons } from "../../../redux/actions/miscAction";

export default function Index() {
    const history = useHistory();
    const dispatch = useDispatch();

    let AllSeasons = useSelector((state) => state.misc.seasons);

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        dispatch(getSeasons(setLoading));
    }, [dispatch]);

    const [search, setSearch] = useState("");
    const getFilteredData = (data, search) => {
        if (search.length) {
            data = data.filter((item) => item?.name?.includes(search) || item?.code?.includes(search));
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
                    dispatch(deleteSeason(id));
                },
                reject: () => {},
            });
        }
    };

    AllSeasons = getFilteredData(AllSeasons, search);
    return { AllSeasons, loading, history, search, setSearch, deleteRow };
}
