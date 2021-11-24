import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { URL_END_MEETUP, URL_GET_SUMMARY } from "../constanta/index";

function MeetupSummary(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [date, setDate] = useState("");
    const [totPayment, setTotPayment] = useState("");
    const [totLoan, setTotLoan] = useState("");

    const dataCRM = useSelector((state) => state.detailCommunityReducer);

    function submit(event) {
        event.preventDefault();
        fetch(URL_END_MEETUP(dataCRM.id), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: sessionStorage.getItem("token"),
            },
            body: JSON.stringify({
                payment: totPayment,
                loan: totLoan, //ini dari FE dimasukin kesini
                date: dataCRM.lastDate,
                status: "Done",
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dataCRM.status = "Done";
                dispatch({ type: "DETAIL_COMMUNITY", payload: dataCRM });
                history.push("/community");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    useEffect(() => {
        fetch(URL_GET_SUMMARY(dataCRM.id), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: sessionStorage.getItem("token"),
            },
        })
            .then((response) => response.json())
            .then(async (data) => {
                if (data.date) {
                    let newDate = data.date.split("/");
                    newDate = newDate[2] + "-" + newDate[1] + "-" + newDate[0];
                    data.date = newDate;
                }
                setDate(data.date);
                setTotLoan(data.loan);
                setTotPayment(data.payment);
            });
    }, [dataCRM]);

    return (
        <div className="meetup-form">
            <form onSubmit={submit}>
                <div className="meetup-text">
                    <p className="text-center">Meet Up Summary</p>
                </div>
                <div className="form-floating mb-3">
                    <input
                        disabled
                        value={date} //null
                        type="date"
                        className="form-control"
                        id="floatingTanggal"
                        placeholder="tanggal"
                    />
                    <label htmlFor="floatingTanngal">Tanggal</label>
                </div>
                <div className="form-floating mb-3 ">
                    <input
                        disabled
                        value={totPayment}
                        type="number"
                        className="form-control"
                        id="floatingPaymeny"
                        placeholder="payment"
                    />
                    <label htmlFor="floatingPayment">Total Payment</label>
                </div>
                <div className="form-floating mb-3 ">
                    <input
                        disabled
                        value={totLoan}
                        type="number"
                        className="form-control"
                        id="floatingPinjaman"
                        placeholder="pinjaman"
                    />
                    <label htmlFor="floatingPinjaman">Total Loan</label>
                </div>
                <div className="meetup-button">
                    <Link to="/community">
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
                        id="button-meetupsubmit"
                        type="submit"
                        onClick={submit}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default MeetupSummary;
