import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "./signin.scss";
import { URL_LOGIN } from "../constanta";

function SignIn(props) {
    const [nik, setNik] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    function submit(event) {
        event.preventDefault(); //SELALU TERLUPA! JADI JANGAN LUPA
        fetch(URL_LOGIN, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nik: nik, password: password }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((respon) => {
                let token = respon.data.token;
                let dataCO = respon.data.data;
                sessionStorage.setItem("token", token);
                sessionStorage.setItem("id", dataCO.id);
                sessionStorage.setItem("name", dataCO.name);
                sessionStorage.setItem("nik", dataCO.nik);
                dispatch({ type: "STATUS_LOGIN", payload: true });
                history.push("/communityOfficer");
            })
            .catch((error) => {
                alert("Cek Kembali NIK/Password Anda");
                console.error("Error:", error);
            });
    }

    return (
        <div className="mainSign">
            <div className="formContainer">
                <div className="signIn">
                    <div className="wrapper">
                        <div className="title">
                            <span>Community Officer Login</span>
                        </div>
                        <form onSubmit={submit}>
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <input
                                    value={nik}
                                    onChange={(e) => setNik(e.target.value)}
                                    type="nik"
                                    placeholder="NIK"
                                />
                            </div>
                            <div className="row">
                                <i className="fas fa-lock"></i>
                                <input
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="row button">
                                <input type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
