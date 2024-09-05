import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

export default function Logout() {
    let navigate = useNavigate();
    let authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.authUser({});
        navigate('/');
    }, [])

}; 