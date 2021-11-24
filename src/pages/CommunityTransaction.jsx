import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import "./communitytransaction.scss";
import { URL_GET_DETAIL_CRM } from "../constanta/index";

function CommunityTransaction(props) {
    const dataCRM = useSelector((state) => state.detailCommunityReducer);

    const [transactionDataCom, setTransactionDataCom] = useState([]);

    useEffect(() => {
        fetch(URL_GET_DETAIL_CRM(dataCRM.id), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: sessionStorage.getItem("token"),
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setTransactionDataCom(data);
            });
    }, [dataCRM]);
    return (
        <div className="transaction">
            <div className="header-trans">
                <h1 className="h1">
                    <strong>History Transaction {dataCRM.name}</strong>
                </h1>
                <div className="table table-success table-striped">
                    <table className="tbl-comunity">
                        <thead>
                            <tr>
                                <th scope="col">Tanggal</th>
                                <th scope="col">Payment</th>
                                <th scope="col">Loan</th>
                            </tr>
                        </thead>
                        {transactionDataCom.map((transaksi) => {
                            return (
                                <tbody key={transaksi.id}>
                                    <tr>
                                        <td>{transaksi.date}</td>
                                        <td>
                                            {parseInt(
                                                transaksi.payment
                                            ).toLocaleString("id-ID", {
                                                style: "currency",
                                                currency: "IDR",
                                            })}
                                        </td>
                                        <td>
                                            {parseInt(
                                                transaksi.loan
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
    );
}
export default CommunityTransaction;
