import React from 'react'



function Updateblog({setmessage ,setdescription , settitle ,id,title,description ,setdepend , setmsgbox , setupdate}) {
    


    function updatefun() {
        fetch("http://127.0.0.1:5000/Update",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({"title":title , "description":description , "id":id})
            
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
            setupdate(pre=>!pre)
            
              
        })
        .catch((err)=>{
            console.log(err);
        })
        
        
    }


    return(

        <div className="head" >
            <p style={{fontSize:"20px"}} >Update The Blog</p>
            <p>Title</p>
            <input type="text" name="" id="" value={title}  onChange={(e)=>{settitle(e.target.value)}} />
            <p>Description</p>
            <textarea name="" col="30" row="20" value={description}  onChange={(e)=>{setdescription(e.target.value)}}  id=""></textarea>
            <button onClick={updatefun} >Update</button>
        </div>


    )
    
}

export default Updateblog;