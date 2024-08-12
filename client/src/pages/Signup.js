import React from 'react'
import Back from "../assets/images/backimg.png";
import {useState } from 'react'
import Noblq from "../assets/images/noblqlogo.svg";

function Signup() {

    const [pass, setpass] = useState(true);


    return(
        <div className="background">
                <img src={Back} alt="" />
        <div className="login">
        <div className="right"  id="rightside">
        <div className="rightcontent" id="rightcontent2"  >
                            <div className="topright">
                                <h1 style={{color:"rgb(39,166,147)" , textAlign:"center"}} >Signup</h1>
                                <img src={Noblq} alt="" width="100px" />
                                
                            </div>
                            <div className="bottomright">
                                <p> Use Your Email For Login</p>
                                <input type="text" name="" id=""  placeholder="Name" />
                                <input type="email" name="" id=""  placeholder="Email" />
                                <span className="but" ><input type={pass ? "password" : "text"} name="" id=""  className="butn"  placeholder="Password" /><p  style={{position:"relative"  ,right:"-85%", top:"-32px" , cursor:"pointer"}  } onClick={()=>{setpass(pre=>!pre)}} >{pass ? "Show":"Hide"}</p></span>
                                <div style={{width:"100%"}}>
                                    <p>Already have an Account <a href="/Login">Click Here</a></p>
                                </div>
                                <button>Signup</button>
                            </div>
        </div>
        </div>
        </div>
        </div>
    )
    
}

export default Signup;