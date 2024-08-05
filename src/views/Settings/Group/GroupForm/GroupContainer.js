import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { allValidations } from "../../../../utils/formValidations";
import { showFormErrors } from "../../../../utils/commonFunctions";
import { addGroup, editGroup, getGroup } from "../../../../redux/actions/miscAction";

export default function GroupContainer() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(
                getGroup(id, (data) => {
                    setGroup({
                        code: data.code,
                        name: data.name,
                    });
                })
            );
        }
    }, [id, dispatch]);

    const [formType, setFormType] = useState("ADD");
    const [loading, setLoading] = useState(false);
    const [group, setGroup] = useState({
        code: "",
        name: "",
    });

    const handleChange = ({ name, value }) => {
        if (formType !== "VIEW") {
            const formErrors = allValidations(name, value, group);
            setGroup((prev) => ({ ...prev, [name]: value, formErrors }));
        }
    };

    const onSubmit = () => {
        if (showFormErrors(group, setGroup)) {
            if (formType === "ADD") {
                dispatch(addGroup(group, setLoading, history));
            } else if (formType === "EDIT") {
                dispatch(editGroup(id, group, setLoading, history));
            }
        }
    };

    return { group, handleChange, loading, onSubmit, setFormType, history };
}
