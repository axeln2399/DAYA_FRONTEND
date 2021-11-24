import React from "react";
import "./navbar.scss";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
    const statusLOGIN = useSelector((state) => state.loginReducer);

    return (
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img
                        src="https://3.bp.blogspot.com/-k_bpx29Oo1U/Xvix75gs2pI/AAAAAAAAaX0/fJDeuipOHE0X2CdlIvYylrytzVHSyiJhgCLcBGAsYHQ/s1600/logo-bank-btpn_syariah.png"
                        alt=""
                    />
                </div>

                <div className="right">
                    <span>
                        <Link to="/">
                            <strong>Home</strong>
                        </Link>
                    </span>
                    <React.Fragment>
                        {!statusLOGIN ? (
                            <span>
                                <Link to="/signout">
                                    <strong>Teller Officer</strong>
                                </Link>{" "}
                            </span>
                        ) : (
                            <span>
                                <Link to="/communityOfficer">
                                    <strong>Profile</strong>
                                </Link>{" "}
                            </span>
                        )}

                        {!statusLOGIN ? (
                            <span>
                                <Link to="/signin">
                                    <strong>Community Officer</strong>
                                </Link>{" "}
                            </span>
                        ) : (
                            <span>
                                <Link to="/signout">
                                    <strong>SignOut</strong>
                                </Link>{" "}
                            </span>
                        )}
                    </React.Fragment>
                    ) :
                </div>
            </div>
        </div>
    );
}
