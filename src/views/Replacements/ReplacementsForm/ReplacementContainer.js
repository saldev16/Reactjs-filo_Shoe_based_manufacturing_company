import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSuppliers } from "../../../redux/actions/supplierAction";
import { allValidations } from "../../../utils/formValidations";
import { getMachines } from "../../../redux/actions/machineActions";
import { showFormErrors } from "../../../utils/commonFunctions";
import { useHistory, useParams } from "react-router-dom";
import { addReplacement, editReplacement, getReplacement } from "../../../redux/actions/replacementActions";

export default function ReplacementContainer() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(
                getReplacement(id, (data) => {
                    setReplacement({
                        code: data?.code,
                        supplier: data?.supplier,
                        notes: data?.notes,
                        machines: data?.machines,
                        description: data?.description,
                        images: data?.images,
                        files: data?.files,
                    });
                })
            );
        }
    }, [id, dispatch]);

    useEffect(() => {
        dispatch(getSuppliers());
        dispatch(getMachines());
    }, [dispatch]);

    let { allSuppliers } = useSelector((state) => state.suppliers);
    allSuppliers = allSuppliers.map((item) => ({ _id: item._id, name: item?.name, code: item?.code }));
    let { allMachines } = useSelector((state) => state?.machines);
    allMachines = allMachines.map((item) => ({ _id: item._id, name: item?.name, code: item.code }));

    const [formType, setFormType] = useState("ADD");
    const [loading, setLoading] = useState(false);

    const [replacement, setReplacement] = useState({
        supplier: {},
        description: "",
        notes: "",
        images: [],
        machines: [],
        files: [],
    });

    console.log(replacement);

    const handleChange = ({ name, value }) => {
        if (formType !== "VIEW") {
            const formErrors = allValidations(name, value, replacement);
            setReplacement((prev) => ({ ...prev, [name]: value, formErrors }));
        }
    };
    const handleChange1 = (e) => {
        if (formType === "ADD" || formType === "EDIT") {
            const { name } = e.target;
            const formErrors = allValidations(name, e.value, replacement);

            setReplacement((prev) => ({ ...prev, [name]: e.value, formErrors }));
        }
    };
    const onSubmit = () => {
        if (showFormErrors(replacement, setReplacement)) {
            if (formType === "ADD") {
                dispatch(addReplacement(replacement, setLoading, history));
            } else {
                dispatch(editReplacement(id, replacement, setLoading, history));
            }
        }
    };

    return {
        allSuppliers,
        setFormType,
        handleChange1,
        replacement,
        handleChange,
        allMachines,
        onSubmit,
        loading,
        history,
    };
}
