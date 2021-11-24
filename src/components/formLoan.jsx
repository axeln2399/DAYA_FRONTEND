import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { URL_FORMLOANNASABAH } from "../constanta/index";
import swal from "sweetalert";

function FormLoan(props) {
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

    const [name, setName] = useState(dataNasabah.name);
    const [phone, setPhone] = useState(dataNasabah.no_telp);
    const [date, setDate] = useState("");
    const [pinjaman, setPinjaman] = useState("");
    const [tenor, setTenor] = useState("");

    //installment
    let installment = Math.ceil(parseInt(pinjaman) / parseInt(tenor));

    function submit(event) {
        event.preventDefault(); //SELALU TERLUPA! JADI JANGAN LUPA
        let dateBody = date.split("-");
        let dateBodySplit = dateBody[2] + "/" + dateBody[1] + "/" + dateBody[0];
        let body = JSON.stringify({
            date: dateBodySplit,
            type: "Loan",
            nasabah_id: dataNasabah.id,
            loan: pinjaman.toString(),
            tenor: tenor.toString(),
        });
        fetch(URL_FORMLOANNASABAH, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: sessionStorage.getItem("token"),
            },
            body: body,
        })
            .then((response) => {
                let hasil = {
                    id: dataNasabah.id,
                    name: dataNasabah.name,
                    no_telp: dataNasabah.no_telp,
                    tenor: tenor.toString(),
                    installment: installment.toString(),
                    loan: pinjaman,
                    crm_id: dataNasabah.crm_id,
                    count_tenor: "0",
                };
                dispatch({ type: "DETAIL_NASABAH", payload: hasil });
                return response.json();
            })
            .then(async (data) => {
                await swal({
                    title: "Permintaan Loan Diterima!",
                    text: "Terima Kasih, Jangan Lupa Bayar Ya!",
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
                <div className="loan-text">
                    <p className="text-center">
                        Form Pengajuan Pinjaman Nasabah
                    </p>
                </div>
                <div className="form-floating mb-3">
                    <input
                        disabled
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="form-control"
                        id="floatingName"
                        required
                    />
                    <label htmlFor="floatingName">Name</label>
                </div>
                <div className="form-floating mb-3 ">
                    <input
                        disabled
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        className="form-control"
                        id="floatingNo_telp"
                        placeholder="no_telp"
                        required
                    />
                    <label htmlFor="floatingNo_telp">Phone Number</label>
                </div>
                <div className="form-floating mb-3 ">
                    <input
                        disabled
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        type="date"
                        className="form-control"
                        id="floatingDate"
                        data-date-format="YYYY/MM/DD"
                        placeholder="yyyy/mm/dd"
                        required
                    />
                    <label htmlFor="floatingDate">Date</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        value={pinjaman}
                        onChange={(e) => setPinjaman(e.target.value)}
                        type="text"
                        className="form-control"
                        id="floatingPinjaman"
                        placeholder="pinjaman"
                        required
                    />
                    <label htmlFor="floatingPinjaman">Pinjaman</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        value={tenor}
                        onChange={(e) => setTenor(e.target.value)}
                        type="text"
                        className="form-control"
                        id="floatingTenor"
                        placeholder="tenor"
                        required
                    />
                    <label htmlFor="floatingTenor">Tenor</label>
                </div>
                <div className="loan-button">
                    <Link to="/detailNasabah">
                        <button
                            className="btn"
                            id="button-cancel"
                            type="submit"
                        >
                            Cancel
                        </button>
                    </Link>
                    <button
                        className="btn"
                        id="button-loansubmit"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormLoan;
