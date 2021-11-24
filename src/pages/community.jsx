import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Community(props) {
    const detailComm = useSelector((state) => state.detailCommunityReducer);

    return (
        <div id="detailCommunity">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{detailComm.name}</h1>
                        <br />
                        <h3>
                            {" "}
                            Last Meetup :{" "}
                            {detailComm.lastDate === null
                                ? "Belum Membuat Meetup"
                                : detailComm.lastDate}{" "}
                        </h3>
                        <h3> Alamat : {detailComm.address}</h3>
                        <h3>
                            {" "}
                            Jumlah Peserta : {detailComm.jumlahNasabah} orang
                        </h3>
                        <h3>
                            {detailComm.status === null
                                ? ""
                                : `Status : ${detailComm.status}`}
                        </h3>
                        <div className="buttonComm1">
                            <Link to="/list">
                                <button
                                    className="btn btn-warning mx-2 fs-6"
                                    id="buttBootstrap"
                                >
                                    Customer Data
                                </button>
                            </Link>
                            <Link to="/communityTransaction">
                                <button
                                    className="btn btn-warning mx-2 fs-6"
                                    id="buttBootstrap"
                                >
                                    Transaction History
                                </button>
                            </Link>
                        </div>
                        {detailComm.status === "Process" ? (
                            <div className="buttonComm2 ">
                                <Link to="/meetupSummary">
                                    <button
                                        className="btn btn-warning mx-2 fs-6 "
                                        id="buttBootstrap"
                                    >
                                        End MeetUp
                                    </button>
                                </Link>
                            </div>
                        ) : (
                            <div className="buttonComm2 ">
                                <Link to="/meetupCreate">
                                    <button
                                        className="btn btn-warning mx-2 fs-6"
                                        id="buttBootstrap"
                                    >
                                        Create MeetUp
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className="col">
                        <img
                            src="https://drive.google.com/uc?export=view&id=1u6lmdSFtlaQUcF-u_8pVkxSBZ_irIsZg"
                            alt="gambar_ibuibu"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Community;
