import React from 'react'
import {useState , useEffect} from 'react'


function Bloglist({depend,setupdate ,setdescription, settitle,setid ,setmsgbox,setmessage,setdepend ,id}) {
    const [fulldata, setfulldata] = useState();

    function updateclick(e) {
        setupdate(pre=>!pre)
        const tit=e.target.getAttribute("data-title")
        const des=e.target.getAttribute("data-description")
        const id=e.target.getAttribute("data-id")
        setdescription(des)
        settitle(tit)
        setid(id)
        
        
    }

    function deleteblog(e) {

        const idd=e.target.getAttribute("data-id")
        fetch("http://127.0.0.1:5000/delete",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({ "id":idd})
            
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
           
            
              
        })
        .catch((err)=>{
            console.log(err);
        })

        
    }

    useEffect(() => {

        fetch("http://127.0.0.1:5000/readblog",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            }
            
        })
        .then((res)=>{
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data=>{
            console.log(data);
            setfulldata(data)
        })
        .catch((err)=>{
            console.log(err);
        })
        
        return () => {
            
        };
    }, [depend]);

    return(
    <div className="blogs">
                <p className="headd">List Of Blogs</p>

                {fulldata ? (
                    fulldata.map((data) => (
                        <div className="blog" key={data.id}>
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                            <div>
                            <button style={{backgroundColor:"rgb(143, 255, 137)"}} onClick={updateclick} data-id={data.id} data-description={data.description} data-title={data.title} >Update</button>
                            <button style={{backgroundColor:"rgb(253, 139, 139)"}}  onClick={deleteblog}  data-id={data.id} >Delete</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No blogs available</p>
                )}

                
                
    </div>
    )
    
}


export default Bloglist;