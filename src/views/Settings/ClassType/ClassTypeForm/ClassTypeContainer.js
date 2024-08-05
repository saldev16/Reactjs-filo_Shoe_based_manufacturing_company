import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { allValidations } from "../../../../utils/formValidations";
import { showFormErrors } from "../../../../utils/commonFunctions";
import { addClassType, editClassType, getClassType } from "../../../../redux/actions/miscAction";

export default function ClassTypeContainer() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(
                getClassType(id, (data) => {
                    setClassType({
                        code: data.code,
                        name: data.name,
                    });
                })
            );
        }
    }, [id, dispatch]);

    const [formType, setFormType] = useState("ADD");
    const [loading, setLoading] = useState(false);
    const [classType, setClassType] = useState({
        code: "",
        name: "",
    });

    const handleChange = ({ name, value }) => {
        if (formType !== "VIEW") {
            const formErrors = allValidations(name, value, classType);
            setClassType((prev) => ({ ...prev, [name]: value, formErrors }));
        }
    };

    const onSubmit = () => {
        if (showFormErrors(classType, setClassType)) {
            if (formType === "ADD") {
                dispatch(addClassType(classType, setLoading, history));
            } else if (formType === "EDIT") {
                dispatch(editClassType(id, classType, setLoading, history));
            }
        }
    };

    return { classType, handleChange, loading, onSubmit, setFormType, history };
}
