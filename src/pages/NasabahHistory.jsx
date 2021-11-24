import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./nasabahHistory.scss";
import { URL_GET_DETAILNASABAH } from "../constanta/index";

export default function NasabahHistory(props) {
    const [historyTransaksi, setHistoryTransaksi] = useState([]);
    const dataNasabah = useSelector((state) => state.detailNasabahReducer);

    useEffect(() => {
        fetch(URL_GET_DETAILNASABAH(dataNasabah.id), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: sessionStorage.getItem("token"),
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setHistoryTransaksi(data);
            });
    }, [dataNasabah]);
    return (
        <div>
            <div className="top">
                <div className="login-pref" id="tabelHistory">
                    <div id="banner_ibuIbu">
                        <img
                            src="https://drive.google.com/uc?export=view&id=1V0dxONIvMDIuMLau1YYJ0vETmZMofpWw"
                            alt="background"
                        />
                    </div>
                    <div className="h1">
                        <h1>Transaction History </h1>
                    </div>
                    <div>
                        <div id="tombolback">
                            <Link to="/detailNasabah">
                                <button className="btn btn-primary mx-2 fs-6">
                                    Back
                                </button>
                            </Link>
                        </div>
                        <div id="namaNotelp">
                            <h5>Nama : {dataNasabah.name}</h5>
                            <h5>No Telp: {dataNasabah.no_telp}</h5>
                        </div>
                    </div>
                    <div className="table table-success table-striped">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Tanggal</th>
                                    <th scope="col">Tipe</th>
                                    <th scope="col">Tenor Ke -</th>
                                    <th scope="col">Nominal</th>
                                </tr>
                            </thead>
                            {historyTransaksi.map((historytrans) => {
                                return (
                                    <tbody key={historytrans.id}>
                                        <tr>
                                            <td>{historytrans.date}</td>
                                            <td>{historytrans.type}</td>
                                            <td>{historytrans.count_tenor}</td>
                                            <td>
                                                {parseInt(
                                                    historytrans.nominal
                                                ).toLocaleString("id-ID", {
                                                    style: "currency",
                                                    currency: "IDR",
                                                })}
                                            </td>
                                        </tr>
                                    </tbody>
                                );
                            })}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
