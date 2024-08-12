import React from 'react'
import {useState } from 'react'



function Createblog({setdepend,setmessage,setmsgbox}) {
    const [description, setdescription] = useState();
    const [title, settitle] = useState();

    function Submitblog(){
        fetch("http://127.0.0.1:5000/createblog",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({"title":title , "description":description})
            
        })
        .then((res)=>{
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.text();
        })
        .then(data=>{
            console.log(data);
            setdepend(pre=>!pre)
            setmessage(data)
            setmsgbox(true)
            setdescription("")
            settitle("")
            
            
           

            
            
           
            
            
        })
        .catch((err)=>{
            console.log(err);
        })
        
    }


    return(

        <div className="head">
            <p style={{fontSize:"20px"}} >Create New Blog</p>
            <p>Title</p>
            <input type="text" name="" id=""  value={title} onChange={(e)=>{settitle(e.target.value)}} />
            <p>Description</p>
            <textarea name="" col="30" row="20" value={description}  onChange={(e)=>{setdescription(e.target.value)}}  id=""></textarea>
            <button onClick={Submitblog} >Add</button>
        </div>


    )
    
}

export default Createblog;