import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { URL_LIST_NASABAH } from "../constanta";
import "./listnasabah.scss";

function ListNasabah(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const dataListNasabah = useSelector((state) => state.listNasabahReducer);

    const dataCRM = useSelector((state) => state.detailCommunityReducer);

    useEffect(() => {
        fetch(URL_LIST_NASABAH(dataCRM.id), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: sessionStorage.getItem("token"),
            },
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: "LIST_NASABAH", payload: data });
            });
    }, [dataCRM, dispatch]);

    function detailnasabah(event) {
        event.preventDefault();
        const idNasabah = event.target.value.toString();
        let dataBaru = {};
        for (let i = 0; i < dataListNasabah.length; i++) {
            if (dataListNasabah[i].id === idNasabah) {
                dataBaru = dataListNasabah[i];
            }
        }
        dispatch({ type: "DETAIL_NASABAH", payload: dataBaru });
        history.push("/detailNasabah");
    }

    return (
        <div>
            <div className="top">
                <div className="login-pref">
                    <h1 className="h1">
                        <strong>List Nasabah {dataCRM.name}</strong>
                    </h1>
                    <Link to="/community">
                        <button className="btn-primary" id="buttonBackComm">
                            Detail Community
                        </button>
                    </Link>
                    <table
                        className="table  table-striped"
                        id="tableListNasabah"
                    >
                        <thead>
                            <tr>
                                <th scope="col">Nama</th>
                                <th scope="col">Nomor Telepon</th>
                                <th scope="col"> </th>
                            </tr>
                        </thead>
                        {dataListNasabah.map((listNasabah) => {
                            return (
                                <tbody key={listNasabah.id}>
                                    <tr>
                                        <td>{listNasabah.name}</td>
                                        <td>{listNasabah.no_telp}</td>
                                        <td>
                                            <button
                                                onClick={(e) =>
                                                    detailnasabah(e)
                                                }
                                                className="btn-primary"
                                                value={listNasabah.id}
                                            >
                                                Detail
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ListNasabah;
