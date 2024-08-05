import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteReplacement, getReplacements } from "../../redux/actions/replacementActions";
import { confirmPopup } from "primereact/confirmpopup";

export default function Index() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    let { allReplacements } = useSelector((state) => state.replacements);
    useEffect(() => {
        dispatch(getReplacements(setLoading));
    }, [dispatch]);

    const [search, setSearch] = useState("");
    const getFilteredData = (data, search) => {
        if (search.length) {
            data = data.filter((item) => item?.code?.toLowerCase().includes(search?.toLowerCase()));
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
                    dispatch(deleteReplacement(id));
                },
                reject: () => {},
            });
        }
    };

    allReplacements = getFilteredData(allReplacements, search);
    return { allReplacements, loading, search, setSearch, history, deleteRow };
}
