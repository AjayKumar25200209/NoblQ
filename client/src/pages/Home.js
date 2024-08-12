import React from 'react'
import "../assets/css/style.css";
import {useState} from 'react'
import Bloglist from '../components/Bloglist.js'
import Createblog from '../components/Createblog.js'
import Updateblog from '../components/Updateblog.js'
import Message from '../components/Message.js'


function Home() {    
    const [depend, setdepend] = useState(true);
    const [update, setupdate] = useState(false);
    const [message, setmessage] = useState("");
    const [msgbox, setmsgbox] = useState(false);
    const [description, setdescription] = useState("");
    const [title, settitle] = useState("");
    const [id, setid] = useState("");


    return(
        <div>
           {update ? 
                <Updateblog setmessage={setmessage} setdescription={setdescription}  settitle={settitle} id={id} title={title} description={description}setdepend={setdepend} setmsgbox={setmsgbox} setupdate={setupdate}  ></Updateblog>
           :""}
           {
            !update ? 
            <Createblog setdepend={setdepend} setmessage={setmessage} setmsgbox={setmsgbox}></Createblog>
            :""
           }
            {msgbox ? 
                <Message message={message} setmsgbox={setmsgbox} ></Message>
            : ""}
            <Bloglist depend={depend} setupdate={setupdate} setdescription={setdescription} settitle={settitle} setid={setid} setmsgbox={setmsgbox} setmessage={setmessage} setdepend={setdepend}  ></Bloglist>

            
        </div>
    )
    
}

export default Home;