import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { allValidations } from "../../../../utils/formValidations";
import { showFormErrors } from "../../../../utils/commonFunctions";
import { addInjectionType, editInjectionType, getInjectionType } from "../../../../redux/actions/miscAction";

export default function InjectionTypeContainer() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(
                getInjectionType(id, (data) => {
                    setInjectionType({
                        code: data.code,
                        name: data.name,
                    });
                })
            );
        }
    }, [id, dispatch]);

    const [formType, setFormType] = useState("ADD");
    const [loading, setLoading] = useState(false);
    const [injectionType, setInjectionType] = useState({
        code: "",
        name: "",
    });

    const handleChange = ({ name, value }) => {
        if (formType !== "VIEW") {
            const formErrors = allValidations(name, value, injectionType);
            setInjectionType((prev) => ({ ...prev, [name]: value, formErrors }));
        }
    };

    const onSubmit = () => {
        if (showFormErrors(injectionType, setInjectionType)) {
            if (formType === "ADD") {
                dispatch(addInjectionType(injectionType, setLoading, history));
            } else if (formType === "EDIT") {
                dispatch(editInjectionType(id, injectionType, setLoading, history));
            }
        }
    };

    return { injectionType, handleChange, loading, onSubmit, setFormType, history };
}
