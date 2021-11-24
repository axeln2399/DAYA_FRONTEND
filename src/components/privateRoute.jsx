import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute(props) {
    return (
        <Route
            render={(property) => {
                const { location } = property;
                const token = sessionStorage.getItem("token");

                if (token) {
                    //jika sudah login
                    return props.children;
                } else {
                    //jika belum login
                    return (
                        <Redirect
                            to={{
                                pathname: "/signin",
                                state: { from: location },
                            }}
                        />
                    );
                }
            }}
        ></Route>
    );
}

export default PrivateRoute;
