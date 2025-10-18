import Reply from "./reply"
import deleteIcon from '../assets/icons8-delete-30.png'
import axios from "axios";
import { useRef } from "react"

export default function Post(props){
    const userReply = useRef()

    const reply = ()=>{
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        axios.post("http://hyeumine.com/forumReplyPost.php",{user_id: props.user.id, post_id: props.post.id, reply: userReply.current.value},{headers} )
        userReply.current.value = ""
    }

    return(
        <div style={{
            display: 'flex', 
            flexDirection: 'column',
            width: '500px',
            border: '1px solid #abababff',
            padding: '10px',
            borderRadius: '15px',
            margin: '10px',
            backgroundColor: '#cacacaff'
            }}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
                <img src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Pic-Clip-Art-Background.png" style={{width: '40px', height:'40px', backgroundColor: 'black', borderRadius: '50%'}} alt="user-avatar"/>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <p style={{margin:'0', fontWeight: '700'}}>
                        {props.post.user}
                    </p>
                    <p style={{marginTop: '5px', marginBottom:'0', fontSize: '10px', color: '#5a5959ff'}}>
                        {props.post.date}
                    </p>
                </div>
                <div style={{marginLeft: 'auto', padding: '10px'}}>
                    {props.user.id === props.post.uid && <img src={deleteIcon} onClick={()=> {props.delete(props.post.id)}} alt="delete" style={{ cursor: 'pointer'}}/>}
                    
                </div>
            </div>
           
            <div style={{display: 'flex', flexWrap: 'wrap', border: '1px solid #a9a9a9ff', backgroundColor: '#e8e8e8ff', borderRadius: '15px', padding: '10px', margin: '10px'}}>
                {props.post.post}
            </div>
            <div style={{display: 'flex', flexDirection: 'row', padding: '10px', justifyContent: 'center', backgroundColor: '#FFF', borderRadius: '10px', margin: '10px'}}>
                <input ref={userReply} type="text" placeholder="reply to this post ..." style={{width: '100%',padding: '5px', border: 'none'}}/>
                <button onClick={reply} style={{background: 'none', border: 'none', color: '#1127b6ff', cursor: 'pointer'}}>Reply</button>
            </div>
            {props.post.reply?.map((reply, i) => (
                <Reply key={i} reply={reply} user={props.user}/>
                
            ))}
            

        </div>
    )
}