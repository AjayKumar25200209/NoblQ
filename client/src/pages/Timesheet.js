import React from 'react'
import "../assets/css/dashboard.css";
import Aside from "../components/Aside.js";
import Newtimesheet from "../components/Newtimesheet.js";
import {useState } from 'react'


function Timesheet() {
    const [newtime, setnewtime] = useState(false);
    console.log(newtime);

   
    
    return(
        <div>
            <div className="parent">
                <Aside></Aside>
                <div className="edetail" >
                    <div className="timesheet">
                    {!newtime ? "" : <Newtimesheet setnewtime={setnewtime} /> }
                    
                        <div className="topoptions">

                                {/* CRUD Option Buttons are Listed */}
                            <div className="options">
                                <button className="optbtn" onClick={()=>{setnewtime(true)}} >New</button>
                                <button className="optbtn">Edit</button>
                                <button className="optbtn">Copy</button>
                                <button className="optbtn">Delete</button>
                                <button className="optbtn">Release</button>
                            </div>

                                {/* date options are listed */}
                            <div className="dateset">
                                <span>
                                    <p>From / To</p>
                                    <input type="date" className="datainput" style={{flexGrow:"1"}} name="" id="" />
                                    <input type="date" className="datainput" style={{flexGrow:"1"}} name="" id="" />
                                </span>
                                <span>
                                    <p>Status</p>
                                    <select name="" className="datainput" id="">
                                        <option value="" >Not Selected</option>
                                    </select>
                                </span>
                                <span>
                                    <p>Total Hours : </p>
                                </span>
                            </div>
                                {/* Time Sheet is Below  */}
                            <div className="sheet">
                                <table>
                                    <thead>
                                        <tr>
                                            <td>S.NO</td>
                                            <td>EMPLOYEE ID</td>
                                            <td>PROJECT TYPE</td>
                                            <td>DATE</td>
                                            <td>START TIME</td>
                                            <td>END TIME</td>
                                            <td>DURATION (HH:MM)</td>
                                            <td>TIME TYPE</td>
                                            <td>SERVICE ID</td>
                                            <td>TASK ID</td>
                                            <td>STATUS</td>
                                            <td>APPROVAL STATUS</td>
                                            <td>WORK DESCRIPTION</td>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>

                            </div>

                        </div>

                    </div>

                </div>
                    

            </div>
        </div>
    )
    
}

export default Timesheet