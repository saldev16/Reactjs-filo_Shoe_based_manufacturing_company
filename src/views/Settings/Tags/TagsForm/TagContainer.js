import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { allValidations } from "../../../../utils/formValidations";
import { showFormErrors } from "../../../../utils/commonFunctions";
import { addTag, editTag, getTag } from "../../../../redux/actions/miscAction";

export default function TagContainer() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(
                getTag(id, (data) => {
                    setTag({
                        name: data.name,
                    });
                })
            );
        }
    }, [id, dispatch]);

    const [formType, setFormType] = useState("ADD");
    const [loading, setLoading] = useState(false);
    const [tag, setTag] = useState({
        name: "",
    });

    const handleChange = ({ name, value }) => {
        if (formType !== "VIEW") {
            const formErrors = allValidations(name, value, tag);
            setTag((prev) => ({ ...prev, [name]: value, formErrors }));
        }
    };

    const onSubmit = () => {
        if (showFormErrors(tag, setTag)) {
            if (formType === "ADD") {
                dispatch(addTag(tag, setLoading, history));
            } else if (formType === "EDIT") {
                dispatch(editTag(id, tag, setLoading, history));
            }
        }
    };

    return { tag, handleChange, loading, onSubmit, setFormType, history };
}
