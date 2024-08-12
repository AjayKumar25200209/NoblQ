import React from 'react'

import Wclose from "../assets/images/closewhite.svg";

function Newtimesheet({setnewtime}){

    return(
        <div  className="newtime">
            <p className="Headingnew">New TimeSheet Entry</p>
            <img src={Wclose} onClick={()=>{setnewtime(false)}} style={{position:"absolute" , right:"10px" , top:"10px" , cursor:"pointer"}} width="30px"  alt="" />
            <div className="new">
                <div className="newtimeleft">
                    <span>
                        <p>ID</p>
                        <input type="text" value={"1094"} disabled style={{width:"70px", height:"35px" , fontSize:"17px" ,paddingLeft:"10px" }} />
                        <p>Team</p>
                        <select name="" id="" style={{width:"100%", height:"35px" , fontSize:"17px" ,paddingLeft:"10px" , flexGrow:"1" }}>
                            <option value="">ByID</option>
                        </select>
                    </span>
                    <span>
                        <p style={{minWidth:"125px"}}>Project Type</p>
                        <select name="" id="" style={{width:"100%", height:"35px" , fontSize:"17px" ,paddingLeft:"10px" , flexGrow:"1" }} >
                            <option value="">Project</option>
                        </select>
                    </span>
                    <span>
                        <p style={{minWidth:"125px"}}>Date</p>
                        <input type="date" name="" id="" style={{width:"100%", height:"35px" , fontSize:"17px" ,paddingLeft:"10px" , flexGrow:"1" }} />
                    </span>
                    <span>
                        <p style={{minWidth:"125px"}}>Start/End Time</p>
                        <span style={{display:"flex" , gap:"30px"  , width:"100%" , flexWrap:"wrap"}} >
                            <span style={{display:"flex" , gap:"5px" , flexGrow:"1" }} >
                                <select name="" id="" style={{ height:"35px" , minWidth:"10px" , fontSize:"17px" ,paddingLeft:"10px" ,flexGrow:"1" }}></select>
                                <select name="" id="" style={{ height:"35px" , minWidth:"10px" , fontSize:"17px" ,paddingLeft:"10px" ,flexGrow:"1"}}></select>
                                <select name="" id="" style={{ height:"35px" , minWidth:"10px" , fontSize:"17px" ,paddingLeft:"10px" ,flexGrow:"1"}}></select>
                            </span>
                            <span style={{display:"flex" , gap:"5px" , flexGrow:"1" }}>
                                <select name="" id="" style={{ minWidth:"10px" , height:"35px" , fontSize:"17px" ,paddingLeft:"10px" , flexGrow:"1" }} ></select>
                                <select name="" id="" style={{ minWidth:"10px" , height:"35px" , fontSize:"17px" ,paddingLeft:"10px" , flexGrow:"1" }} ></select>
                                <select name="" id="" style={{ minWidth:"10px" , height:"35px" , fontSize:"17px" ,paddingLeft:"10px" , flexGrow:"1" }} ></select>
                            </span>
                        </span>
                    </span>
                    <span>
                        <p style={{width:"125px"}}>Duration</p>
                        <select name="" id="" style={{width:"100%", height:"35px" , fontSize:"17px" ,paddingLeft:"10px", flexGrow:"1" }} ></select>
                    </span>
                    <span>
                        <p style={{width:"125px"}}>Project ID</p>
                        <select name="" id="" style={{width:"100%", height:"35px" , fontSize:"17px" ,paddingLeft:"10px" , flexGrow:"1"}}  ></select>
                    </span>
                    <span>
                        <p style={{width:"125px"}}>Task ID</p>
                        <select name="" id="" style={{width:"100%", height:"35px" , fontSize:"17px" ,paddingLeft:"10px" , flexGrow:"1" }}  ></select>
                    </span>
                    <span >
                        <p style={{width:"125px"}}>Service ID</p>
                        <select name="" id="" style={{width:"100%", height:"35px" , fontSize:"17px" ,paddingLeft:"10px" , flexGrow:"1" }}  ></select>
                    </span>

                </div>
                <div className="newtimeright">
                    <span>
                        <p>Time Type</p>
                        <select name="" id=""  style={{width:"100%" , height:"35px"}}></select>
                    </span>
                    <span>
                        <p>Work Description</p>
                        <textarea name="" id="" style={{width:"100%" , height:"300px"}}></textarea>
                    </span>

                </div>

            </div>
            <div className="bottombtns">
                <button>Cancel</button>
                <button>Submit</button>
            </div>

        </div>

    )
    
}

export default Newtimesheet ;