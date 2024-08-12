import React from 'react'
import "../assets/css/dashboard.css";
import Aside from "../components/Aside.js";
import Noblq from "../assets/images/noblqlogo.svg";


function Dashboard() {
    return(
        <div>
            
            <div className="parent">
            <Aside></Aside>
            <div className="edetail" >
                <h1 style={{marginTop:"50px"}} >Employee Details</h1>
                <div className="detail" >
                    <h3>Employee ID : </h3>
                    <h3>Employee Name : </h3>
                    <h3>Manager ID : </h3>
                    <h3>Manager Name :  </h3>
                    <h3>Country : </h3>
                </div>
                <img src={Noblq} alt=""  className="imgg2" />
            </div>

            </div>

            
            
        </div>
    )
    
}

export default Dashboard;