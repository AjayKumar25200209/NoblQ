import React from 'react'
import Noblq from "../assets/images/noblqlogo.svg";
import dashboardlogo from "../assets/images/dashlogo.svg";
import leavelogo from "../assets/images/leave.svg";
import approvallogo from "../assets/images/approval.svg";
import timelogo from "../assets/images/time.svg";
import profilelogo from "../assets/images/profile.svg";
import userlogo from "../assets/images/user.svg";
import uploadlogo from "../assets/images/upload.svg";
import Bmenu from "../assets/images/bmenu.svg";
import Wclose from "../assets/images/closewhite.svg";
import {useState} from 'react'


function Aside(params) {
    const [menulogo, setmenulogo] = useState(true);

    function asideavailabe() {
        const element=document.getElementById("maside")
        
        setmenulogo(false)
        element.style.transform = "translateX(0%)";
        
    }

    function asideunavailabe() {
        const element=document.getElementById("maside")
        
        
        element.style.transform = "translateX(-100%)";
        setTimeout(() => {
            setmenulogo(true)
            
        }, 750);
        
    }


    return(
        <div style={{backgroundColor: "#1d2226"}} >
            <aside className="aside">
                    <img src={Noblq} alt="NoblQ Logo" width="90%"  style={{position:"relative" , left:"50%" , marginTop:"10px" , transform:"translateX(-50%)"}} />
                    <div className="tablist">
                        <a href="/Dashboard"><img src={dashboardlogo} alt="" />Dashboard</a>
                        <a href="/Time-Sheet"><img src={timelogo} alt="" />Time Sheets</a>
                        <a href="/"><img src={leavelogo} alt="" />Leave</a>
                        <a href="/"><img src={approvallogo} alt="" />Approval</a>
                        <a href="/"><img src={profilelogo} alt="" />Reports</a>
                        <a href="/"><img src={uploadlogo} alt="" />Excel Upload</a>
                        <a href="/"><img src={userlogo} alt="" />User</a>
                    </div>
                
            </aside>
            <aside className="mobileaside" id="maside" >
                {menulogo ? <img src={Bmenu} alt="" className="menu" width="30px" onClick={asideavailabe} />    : ""}
              
               
            <span className="close"><img src={Noblq} alt="NoblQ Logo" style={{padding:"10px"}}  width="100%"  /><img src={Wclose} style={{margin:"5px" , cursor:"pointer"}} onClick={asideunavailabe}  alt="" width="30px" /></span>
                <div className="tablist">
                    <a href="/Dashboard"><img src={dashboardlogo} alt="" />Dashboard</a>
                    <a href="/Time-Sheet"><img src={timelogo} alt="" />Time Sheets</a>
                    <a href="/"><img src={leavelogo} alt="" />Leave</a>
                    <a href="/"><img src={approvallogo} alt="" />Approval</a>
                    <a href="/"><img src={profilelogo} alt="" />Reports</a>
                    <a href="/"><img src={uploadlogo} alt="" />Excel Upload</a>
                    <a href="/"><img src={userlogo} alt="" />User</a>
                </div>
        
            </aside>
            
        
        </div>
    )
    
}

export default Aside;