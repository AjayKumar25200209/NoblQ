import React from 'react'
import Back from "../assets/images/backimg.png";
import {useState  } from 'react'
import {useNavigate} from 'react-router-dom'
import Noblq from "../assets/images/noblqlogo.svg";
import "../assets/css/style.css";

function Login() {
    const [pass, setpass] = useState(true);
    const navigate=useNavigate();

    function loginsubmit(e) {
        e.preventDefault()
        console.log("Submitted");
        navigate("/Dashboard");
        
    }


    return(

        <div>
            
            <div className="background">
                <img src={Back} alt="" />
                <div className="login">
                    
                    
                        <form action="" style={{width:"100%"}} >
                            
                                <div className="topright">
                                    <h1 style={{color:"rgb(39,166,147)" , textAlign:"center"}} >Login</h1>
                                    <img src={Noblq} alt="" width="100px" />
                                
                                </div>
                                <div className="bottomright">
                                    <p style={{textAlign:"center"}} >  Use Your Employee ID For Login</p>
                                    <input type="number" name="" id=""  placeholder="Employee ID" />
                                    <span className="but" ><input type={pass ? "password" : "text"} name="" id=""  className="butn"  placeholder="Password" /><p  style={{position:"relative"  ,right:"-90%", top:"-32px" , cursor:"pointer" ,paddingRight:"20px" }  } onClick={()=>{setpass(pre=>!pre)}} >{pass ? <i class="fas fa-eye"></i>:<i class="fas fa-eye-slash"></i>}</p></span>
                                
                                    <button onClick={loginsubmit}>Login</button>
                                </div>
                                
                            
                        </form>
                        
                            
                        </div>

                   

                </div>
            </div>
        
    )
    
}

export default Login;