import React, { useState } from 'react';
import '../assets/css/test.css';

function Test() {
    const [rdata, setrdata] = useState(null);
    const [id, setid] = useState("SIV-3134");

    function Submit() {
        console.log("submitted");

        fetch("http://127.0.0.1:5000/getsoapdata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id })
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            
            setrdata(data);
        })
        .catch(err => {
            alert(err);
        });
    }


    return (
        <div>
            <div className="top">
                <input 
                    type="text" 
                    onChange={(e) => setid(e.target.value)} value={id}  disabled
                />
                <button onClick={Submit}>Submit</button>
            </div>
            <p style={{ textAlign: "center", fontSize: "large" , marginTop:"20px"}}>
                    List Of Invoice Data
                </p>
            <div className="table">
                
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>UUID</th>
                            <th>Date</th>
                            <th>ReceiptDate</th>
                            <th>TransactionDate</th>
                            <th>TypeCode</th>
                            <th>TypeName</th>
                            <th>GrossAmount</th>
                            <th>TaxAmount</th>
                            <th>TotalNetAmount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rdata ?  
                            <tr key={rdata.ID}>
                                <td>{rdata.ID}</td>
                                <td>{rdata.UUID}</td>
                                <td>{rdata.Date}</td>
                                <td>{rdata.ReceiptDate}</td>
                                <td>{rdata.TransactionDate}</td>
                                <td>{rdata.TypeCode}</td>
                                <td>{rdata.TypeName}</td>
                                <td>{rdata.GrossAmount.Amount} {rdata.GrossAmount.CurrencyCode}</td>
                                <td>{rdata.TaxAmount.Amount} {rdata.TaxAmount.CurrencyCode}</td>
                                <td>{rdata.TotalNetAmount.Amount} {rdata.TotalNetAmount.CurrencyCode}</td>
                            </tr>
                         : ""}
                         {rdata ?  
                            <tr key={rdata.ID}>
                                <td>{rdata.ID}</td>
                                <td>{rdata.UUID}</td>
                                <td>{rdata.Date}</td>
                                <td>{rdata.ReceiptDate}</td>
                                <td>{rdata.TransactionDate}</td>
                                <td>{rdata.TypeCode}</td>
                                <td>{rdata.TypeName}</td>
                                <td>{rdata.GrossAmount.Amount} {rdata.GrossAmount.CurrencyCode}</td>
                                <td>{rdata.TaxAmount.Amount} {rdata.TaxAmount.CurrencyCode}</td>
                                <td>{rdata.TotalNetAmount.Amount} {rdata.TotalNetAmount.CurrencyCode}</td>
                            </tr>
                         : ""}
                         {rdata ?  
                            <tr key={rdata.ID}>
                                <td>{rdata.ID}</td>
                                <td>{rdata.UUID}</td>
                                <td>{rdata.Date}</td>
                                <td>{rdata.ReceiptDate}</td>
                                <td>{rdata.TransactionDate}</td>
                                <td>{rdata.TypeCode}</td>
                                <td>{rdata.TypeName}</td>
                                <td>{rdata.GrossAmount.Amount} {rdata.GrossAmount.CurrencyCode}</td>
                                <td>{rdata.TaxAmount.Amount} {rdata.TaxAmount.CurrencyCode}</td>
                                <td>{rdata.TotalNetAmount.Amount} {rdata.TotalNetAmount.CurrencyCode}</td>
                            </tr>
                         : ""}
                         {rdata ?  
                            <tr key={rdata.ID}>
                                <td>{rdata.ID}</td>
                                <td>{rdata.UUID}</td>
                                <td>{rdata.Date}</td>
                                <td>{rdata.ReceiptDate}</td>
                                <td>{rdata.TransactionDate}</td>
                                <td>{rdata.TypeCode}</td>
                                <td>{rdata.TypeName}</td>
                                <td>{rdata.GrossAmount.Amount} {rdata.GrossAmount.CurrencyCode}</td>
                                <td>{rdata.TaxAmount.Amount} {rdata.TaxAmount.CurrencyCode}</td>
                                <td>{rdata.TotalNetAmount.Amount} {rdata.TotalNetAmount.CurrencyCode}</td>
                            </tr>
                         : ""}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Test;
