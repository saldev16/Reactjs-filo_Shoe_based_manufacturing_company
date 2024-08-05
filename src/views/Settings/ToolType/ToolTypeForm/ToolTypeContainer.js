import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { allValidations } from "../../../../utils/formValidations";
import { showFormErrors } from "../../../../utils/commonFunctions";
import { addToolType, editToolType, getToolType } from "../../../../redux/actions/miscAction";

export default function ToolTypeContainer() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(
                getToolType(id, (data) => {
                    setToolType({
                        code: data.code,
                        name: data.name,
                        isMold: data.isMold,
                    });
                })
            );
        }
    }, [id, dispatch]);

    const [formType, setFormType] = useState("ADD");
    const [loading, setLoading] = useState(false);
    const [toolType, setToolType] = useState({
        code: "",
        name: "",
        isMold: false,
    });

    const handleChange = ({ name, value }) => {
        if (formType !== "VIEW") {
            const formErrors = allValidations(name, value, toolType);
            setToolType((prev) => ({ ...prev, [name]: value, formErrors }));
        }
    };

    const onSubmit = () => {
        if (showFormErrors(toolType, setToolType)) {
            if (formType === "ADD") {
                dispatch(addToolType(toolType, setLoading, history));
            } else if (formType === "EDIT") {
                dispatch(editToolType(id, toolType, setLoading, history));
            }
        }
    };

    return { toolType, handleChange, loading, onSubmit, setFormType, history };
}
