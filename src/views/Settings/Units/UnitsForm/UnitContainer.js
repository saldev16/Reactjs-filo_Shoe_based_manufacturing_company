import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { allValidations } from "../../../../utils/formValidations";
import { showFormErrors } from "../../../../utils/commonFunctions";
import { addUnit, editUnit, getUnit } from "../../../../redux/actions/miscAction";

export default function UnitContainer() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(
                getUnit(id, (data) => {
                    setUnit({
                        name: data.name,
                    });
                })
            );
        }
    }, [id, dispatch]);

    const [formType, setFormType] = useState("ADD");
    const [loading, setLoading] = useState(false);
    const [unit, setUnit] = useState({
        name: "",
    });

    console.log("unit", unit);

    const handleChange = ({ name, value }) => {
        if (formType !== "VIEW") {
            const formErrors = allValidations(name, value, unit);
            setUnit((prev) => ({ ...prev, [name]: value, formErrors }));
        }
    };

    const onSubmit = () => {
        if (showFormErrors(unit, setUnit)) {
            if (formType === "ADD") {
                dispatch(addUnit(unit, setLoading, history));
            } else if (formType === "EDIT") {
                dispatch(editUnit(id, unit, setLoading, history));
            }
        }
    };

    return { unit, handleChange, loading, onSubmit, setFormType, history };
}
