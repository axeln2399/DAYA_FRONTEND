import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { URL_PAYMENTNASABAH } from "../constanta/index";
import swal from "sweetalert";

function PaymentNasabah(props) {
    const history = useHistory();
    const dispatch = useDispatch();

    const dataCRM = useSelector((state) => state.detailCommunityReducer);
    const dataNasabah = useSelector((state) => state.detailNasabahReducer);

    useEffect(() => {
        let newDate = "";
        if (dataCRM.lastDate) {
            newDate = dataCRM.lastDate.split("/");
            newDate = newDate[2] + "-" + newDate[1] + "-" + newDate[0];
        } else {
            let today = new Date().toLocaleDateString("id-ID");
            newDate = today.split("/");
            newDate = newDate[2] + "-" + newDate[1] + "-" + newDate[0];
        }
        setDate(newDate);
    }, [dataCRM]);

    const [nameNasabah, setNameNasabah] = useState(dataNasabah.name);
    const [date, setDate] = useState("");
    const [tenor, setTenor] = useState(parseInt(dataNasabah.count_tenor) + 1);
    const [bayar, setBayar] = useState(dataNasabah.installment);

    function submit(event) {
        event.preventDefault(); //SELALU TERLUPA! JADI JANGAN LUPA
        let dateBody = date.split("-");
        let dateBodySplit = dateBody[2] + "/" + dateBody[1] + "/" + dateBody[0];
        let body = JSON.stringify({
            date: dateBodySplit,
            count_tenor: (parseInt(dataNasabah.count_tenor) + 1).toString(),
            type: "Payment",
            nominal: dataNasabah.installment,
            nasabah_id: dataNasabah.id,
        });
        fetch(URL_PAYMENTNASABAH, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: sessionStorage.getItem("token"),
            },
            body: body,
        })
            .then((response) => {
                let newCount = parseInt(dataNasabah.count_tenor) + 1;
                dataNasabah.count_tenor = newCount.toString();
                dispatch({ type: "DETAIL_NASABAH", payload: dataNasabah });
                return response.json();
            })
            .then(async (data) => {
                await swal({
                    title: "Pembayaran Berhasil!",
                    text: "Terima Kasih",
                    icon: "success",
                });
                history.push("/detailNasabah");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    return (
        <div className="loan-form">
            <form onSubmit={submit}>
                <div className="nasabah-text">
                    <p className="text-center">Form Payment Nasabah</p>
                </div>
                <div className="form-floating mb-3">
                    <input
                        disabled
                        value={nameNasabah}
                        onChange={(e) => setNameNasabah(e.target.value)}
                        type="text"
                        className="form-control"
                        id="floatingNameNasabah"
                        placeholder="name"
                        required
                    />
                    <label htmlFor="floatingNameNasabah">Nama Nasabah</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        disabled
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        type="date"
                        className="form-control"
                        id="floatingTanggal"
                        placeholder="tanggal"
                        required
                    />
                    <label htmlFor="floatingTanggal">Date</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        disabled
                        value={tenor}
                        onChange={(e) => setTenor(e.target.value)}
                        type="text"
                        className="form-control"
                        id="floatingTenor"
                        placeholder="tenor"
                        required
                    />
                    <label htmlFor="floatingTenor">Tenor Ke-</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        disabled
                        value={bayar}
                        onChange={(e) => setBayar(e.target.value)}
                        type="text"
                        className="form-control"
                        id="floatingBayar"
                        placeholder="bayar"
                        required
                    />
                    <label htmlFor="floatingBayar">Bayar</label>
                </div>
                <div className="payment-nasabah">
                    <Link to="/detailNasabah">
                        <button
                            className="btn"
                            id="button-cancel"
                            type="submit"
                        >
                            Cancel
                        </button>
                    </Link>
                    <button className="btn" id="button-nasabah" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PaymentNasabah;
