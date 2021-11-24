import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function DetailNasabah(props) {
    const dataNasabahLama = useSelector((state) => state.detailNasabahReducer);
    const dataComm = useSelector((state) => state.detailCommunityReducer);

    const [dataNasabah, setDataNasabah] = useState({});
    let tenor = dataNasabah.tenor;
    let countTenor = dataNasabah.count_tenor;

    useEffect(() => {
        setDataNasabah(dataNasabahLama);
    }, [dataNasabahLama]);

    return (
        <div id="detailNasabah">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>NASABAH BTPN Syariah</h1>
                        <br />
                        <h3> Nama : {dataNasabah.name}</h3>
                        <h3> No telp : {dataNasabah.no_telp}</h3>
                        <h3>
                            {" "}
                            Status Pinjaman :{" "}
                            {countTenor < tenor ? "Belum Lunas" : "Lunas"}
                        </h3>
                        <div className="buttonComm1">
                            <Link to="/list">
                                <button className="btn btn-primary mx-2 fs-6">
                                    List Nasabah
                                </button>
                            </Link>
                            {dataComm.status === "Process" ? (
                                countTenor >= tenor ? (
                                    <Link to="/formLoan">
                                        <button className="btn btn-primary mx-2 fs-6">
                                            Take Loan
                                        </button>
                                    </Link>
                                ) : (
                                    <Link to="/paymentNasabah">
                                        <button className="btn btn-primary mx-2 fs-6">
                                            Payment
                                        </button>
                                    </Link>
                                )
                            ) : (
                                ""
                            )}
                            <Link to="/history">
                                <button
                                    // data_nasabah={dataNasabah}
                                    className="btn btn-primary mx-2 fs-6"
                                >
                                    History
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <img
                            src="https://drive.google.com/uc?export=view&id=1u6lmdSFtlaQUcF-u_8pVkxSBZ_irIsZg"
                            alt="Foto Background"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailNasabah;
