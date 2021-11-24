import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function CardCommunity(props) {
    const comm = props.comm;
    const dispatch = useDispatch();

    function detailComm() {
        dispatch({ type: "DETAIL_COMMUNITY", payload: comm });
    }

    return (
        <div id="cardCommunity">
            <div className="card">
                <div className="card-header fs-4">{comm.name}</div>
                <div className="card-body">
                    <p>Jumlah Nasabah : {comm.jumlahNasabah} orang</p>
                    <Link to="/community">
                        <div className="buttonCC">
                            <button
                                className="btn"
                                id="button-loansubmit"
                                type="submit"
                                onClick={detailComm}
                            >
                                Detail
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CardCommunity;
