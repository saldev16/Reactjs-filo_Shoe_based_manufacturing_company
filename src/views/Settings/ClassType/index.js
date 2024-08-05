import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { confirmPopup } from "primereact/confirmpopup";
import { useHistory } from "react-router-dom";
import { deleteClassType, getClassTypes } from "../../../redux/actions/miscAction";

export default function Index() {
    const history = useHistory();
    const dispatch = useDispatch();

    let AllClassTypes = useSelector((state) => state.misc.classTypes);

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        dispatch(getClassTypes(setLoading));
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
                    dispatch(deleteClassType(id));
                },
                reject: () => {},
            });
        }
    };

    AllClassTypes = getFilteredData(AllClassTypes, search);
    return { AllClassTypes, loading, history, search, setSearch, deleteRow };
}
