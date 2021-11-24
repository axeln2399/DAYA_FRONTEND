import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";

function SignOut() {
    const dispatch = useDispatch();
    useEffect(() => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("nik");
        dispatch({ type: "STATUS_LOGIN", payload: false });
    }, [dispatch]);

    return <Redirect to="/" />;
}
//halo ges

export default SignOut;
