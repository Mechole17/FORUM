import { useEffect, useRef, useState } from "react"
import SignIn from "../components/sign_in";
import Post from "../components/post"
import axios from "axios";
import SignUp from "../components/sign_up";

export default function Homepage(props){
    const [user, setUser] = useState(null)
    const [post, setPosts] = useState([]);
    const userPost = useRef()


    const login = async (username,password)=>{
        try{
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        const data = await axios.post("http://hyeumine.com/forumLogin.php", {username: username, password: password},
            {headers}
        )
        console.log(data)
        setUser(data.data.user)
        props.setUsername(data.data.user.username)
        alert("Login successful!")
        }catch(err){
            alert("Invalid credentials")
        }
    }

    useEffect(()=>{
        const getPosts = async ()=>{
            try{
            const objs = await axios.get("http://hyeumine.com/forumGetPosts.php")
            setPosts(objs.data.reverse())
            }catch(Err){
                console.log(Err)
            }
        }
        getPosts();
    },[post])

    const deletePost = (id)=>{
        try{
            axios.get("http://hyeumine.com/forumDeletePost.php?id=" + id)
        }catch(Err){
            console.log(Err)
        }
    }

    const addPost = ()=>{
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        axios.post("http://hyeumine.com/forumNewPost.php",{id: user.id, post: userPost.current.value},{headers} )
        userPost.current.value = ""
    }
    

    return(
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#011323ff', 
        height: '89.3vh',  overflowY: 'auto', width: '100%', margin: '0', gap: '5px'}}>
            {user? <>
            <button style={{marginLeft: 'auto', marginTop: '10px', width: '100px', padding: '5px', marginRight: '10px', borderRadius: '10px', backgroundColor: '#FFF'}} onClick={()=>{setUser(null)}}>Logout</button>
            <div style={{display: 'flex', flexDirection: 'column', width: '505px', margin: '10px', padding: '10px', backgroundColor: '#1d2033ff', justifyContent: 'center', borderRadius: '10px'}}>
                <input type="text" ref={userPost} style={{ borderRadius: '10px',height: '40px', padding: '10px'}} placeholder="What's on your mind?"/>
                <button onClick={()=>addPost()} style={{padding: '5px', width: '100px', borderRadius: '10px', margin: '10px', cursor: 'pointer'}}>Post</button>
            </div>

            {post.map((post)=>(
                <Post key={post.id} post={post} delete={deletePost} user={user}/>
            ))}
            
            </> : <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '200px'}}>
            <SignIn login={login}/>
            <SignUp />
            </div>}
            

        </div>
    )
}