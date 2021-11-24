import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { URL_CREATE_MEETUP } from "../constanta/index";

function MeetupSummary(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const dataCRM = useSelector((state) => state.detailCommunityReducer);
    const [date, setDate] = useState("");

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

    function submit(event) {
        event.preventDefault(); //SELALU TERLUPA! JADI JANGAN LUPA
        let dateBody = date.split("-");
        let dateBodySplit = dateBody[2] + "/" + dateBody[1] + "/" + dateBody[0];
        fetch(URL_CREATE_MEETUP(dataCRM.id), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: sessionStorage.getItem("token"),
            },
            body: JSON.stringify({
                date: dateBodySplit,
                status: "Process",
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                dataCRM.lastDate = dateBodySplit;
                dataCRM.status = data.status;
                dispatch({ type: "DETAIL_COMMUNITY", payload: dataCRM });
                history.push("/community");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    return (
        <div className="meetup-form">
            <form onSubmit={submit}>
                <div className="meetup-text">
                    <p className="text-center">Create Meet Up</p>
                </div>
                <div className="form-floating mb-3">
                    <input
                        value={date}
                        type="date"
                        className="form-control"
                        id="floatingTanggal"
                        placeholder="tanggal"
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <label htmlFor="floatingTanngal">Tanggal</label>
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
