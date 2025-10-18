import axios from "axios";

export default function Reply(props){
    const deleteReply = async ()=> {
        try{
           await axios.get("http://hyeumine.com/forumDeleteReply.php?id=" + props.reply.id)
        }catch(Err){
            console.log(Err)
        }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <div style={{display: 'flex', flexDirection: 'row',gap: '10px'}}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" style={{width: '40px', height: '40px', borderRadius: '50%'}} alt="avatar"/>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center'}}>
                            <p style={{margin: '0', fontSize: '10px', color: '#444444ff'}}>{props.reply.user}</p>
                            <p style={{margin: '0', fontSize: '10px', color: '#444444ff'}}>{props.reply.date}</p>
                        </div>
                        {props.user.id === props.reply.uid && <button onClick={deleteReply} style={{marginLeft: 'auto', background: 'none', border: 'none', color: 'red', cursor: 'pointer'}}>Delete reply</button>}
                        
                    </div>

                   <p style={{
                        margin: '10px',
                        wordWrap: 'break-word', // ensures long words or links break
                        overflowWrap: 'break-word', // modern version of wordWrap
                        }}>
                        {props.reply.reply}
                        </p>
        </div>
    )
}