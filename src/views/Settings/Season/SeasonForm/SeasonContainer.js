import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { allValidations } from "../../../../utils/formValidations";
import { showFormErrors } from "../../../../utils/commonFunctions";
import { addSeason, editSeason, getSeason } from "../../../../redux/actions/miscAction";

export default function SeasonContainer() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(
                getSeason(id, (data) => {
                    setSeason({
                        code: data.code,
                        name: data.name,
                    });
                })
            );
        }
    }, [id, dispatch]);

    const [formType, setFormType] = useState("ADD");
    const [loading, setLoading] = useState(false);
    const [season, setSeason] = useState({
        code: "",
        name: "",
    });

    const handleChange = ({ name, value }) => {
        if (formType !== "VIEW") {
            const formErrors = allValidations(name, value, season);
            setSeason((prev) => ({ ...prev, [name]: value, formErrors }));
        }
    };

    const onSubmit = () => {
        if (showFormErrors(season, setSeason)) {
            if (formType === "ADD") {
                dispatch(addSeason(season, setLoading, history));
            } else if (formType === "EDIT") {
                dispatch(editSeason(id, season, setLoading, history));
            }
        }
    };

    return { season, handleChange, loading, onSubmit, setFormType, history };
}
