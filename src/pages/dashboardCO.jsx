import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardCommunity from "../components/cardCommunity";
import { URL_CO_FINDBYID, URL_CRM_FINDBYIDCO } from "../constanta/index";

function DashboardCO(props) {
    const dispatch = useDispatch();
    const dataComm = useSelector((state) => state.communityReducer);

    const [CO, setCO] = useState({});
    let idCO = sessionStorage.getItem("id");

    useEffect(() => {
        fetch(URL_CO_FINDBYID(idCO), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: sessionStorage.getItem("token"),
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setCO(data.data);
            });

        fetch(URL_CRM_FINDBYIDCO(idCO), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: sessionStorage.getItem("token"),
            },
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: "LIST_COMMUNITY", payload: data });
            });
    }, [idCO, dispatch]);

    return (
        <div>
            <div id="profileCO">
                <div className="jumbotron">
                    <img
                        src="https://drive.google.com/uc?export=view&id=1UUGemR472Gkts1wt6CW2WubzACbTCkaW"
                        width="200"
                        height="200"
                        alt="Foto Profile Ceritanya"
                    />
                    <br />
                    <br />
                    <h2>{CO.name}</h2>
                    <p>
                        NIK : {CO.nik}
                        <br />
                        Region : {CO.region}
                    </p>
                </div>
            </div>
            <div id="idCardComm">
                <div className="container">
                    <div className="row">
                        {dataComm.map((commnya) => {
                            return (
                                <div
                                    key={commnya.id}
                                    className="col-md-4 d-flex align-items-stretch"
                                >
                                    <CardCommunity comm={commnya} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardCO;
