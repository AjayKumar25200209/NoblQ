import React from 'react'
import Close from '../assets/images/close.svg'


function Message({message,setmsgbox}) {

    return(
    <div className="message">
        <img src={Close} alt=""  onClick={()=>{setmsgbox(false)}} className="close" />
        <p>{message}</p>
        

             
                
    </div>
    )
    
}


export default Message;