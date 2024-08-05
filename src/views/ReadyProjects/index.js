import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getReadyProjects } from "../../redux/actions/projectActions";

export default function Index() {
    const history = useHistory();
    const dispatch = useDispatch();
    let { allReadyProjects } = useSelector((state) => state?.projects);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        dispatch(getReadyProjects(setLoading));
    }, [dispatch]);

    return { allReadyProjects, loading, history };
}
