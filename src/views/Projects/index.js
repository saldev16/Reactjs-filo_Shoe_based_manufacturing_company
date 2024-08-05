import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../../redux/actions/projectActions";

export default function Index() {
    const history = useHistory();
    const dispatch = useDispatch();
    let { allProjects } = useSelector((state) => state?.projects);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        dispatch(getProjects(setLoading));
    }, [dispatch]);

    return { allProjects, loading, history };
}
