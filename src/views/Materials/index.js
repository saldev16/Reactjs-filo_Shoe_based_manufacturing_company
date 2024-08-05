import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { confirmPopup } from "primereact/confirmpopup";
import { useSelector, useDispatch } from "react-redux";
import { getCategories, getMaterials, deleteMaterial } from "../../redux/actions/materialAction";
import { useState } from "react";

export default function Index() {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    const [activeCategory, setActiveCategory] = useState(null);

    let { allMaterials, allCategories } = useSelector((state) => state.material);

    const getFilteredData = (data, search) => {
        if (search.length) {
            data = data.filter(
                (item) =>
                    item?.code?.toLowerCase().includes(search?.toLowerCase()) ||
                    item?.name?.toLowerCase().includes(search?.toLowerCase())
            );
        }
        return data;
    };

    allMaterials = getFilteredData(allMaterials, search);

    useEffect(() => {
        dispatch(getMaterials(activeCategory, setLoading));
    }, [activeCategory, dispatch]);

    const deleteRow = (event, id) => {
        if (id) {
            confirmPopup({
                target: event.currentTarget,
                message: "Are you sure you want to Delete?",
                icon: "pi pi-exclamation-triangle",
                accept: () => {
                    dispatch(deleteMaterial(id));
                },
                reject: () => {},
            });
        }
    };

    const getTreeTable = (data) => {
        return data.map((item) => ({ ...item, key: item?._id, children: getTreeTable(item.subcategories) }));
    };

    return {
        allMaterials,
        allCategories,
        getTreeTable,
        search,
        setSearch,
        loading,
        history,
        deleteRow,
        activeCategory,
        setActiveCategory,
    };
}
