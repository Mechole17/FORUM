import { useRef} from "react"
import axios from "axios";

export default function SignUp(props){
     const username = useRef()
    const password = useRef()
    const confPassword = useRef()

    const createUser= async () => {
            const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
            }
            if(password.current.value === confPassword.current.value){
                const data = await axios.post("http://hyeumine.com/forumCreateUser.php", {username: username.current.value, password: password.current.value},
                    {headers}
                )
                console.log(data)
                alert("Registered Successfully! Please log in!")
            }
            else alert("Passwords does not match! ")
    };

    return (
        <div>
            <form onSubmit={createUser} style={{display: 'flex', flexDirection: 'column', gap: '10px', color: '#FFF', aligntItems:'center', width: '303px'}}>
                <h1>Register</h1>
                <div style={{display: 'flex', flexDirection: 'column', gap: '3px'}}>
                    <label htmlFor="reg-username">username</label>
                    <input style={{height: '20px', borderRadius: '5px'}} type="text" id="reg-username" ref={username} required />
                </div>
                
                <div style={{display: 'flex', flexDirection: 'column', gap: '3px'}}>
                    <label htmlFor="reg-password">password</label>
                    <input style={{height: '20px', borderRadius: '5px'}} type="password" id="reg-password" ref={password} required />
                </div>

                <div style={{display: 'flex', flexDirection: 'column', gap: '3px'}}>
                    <label htmlFor="reg-confpassword">confirm password</label>
                    <input style={{height: '20px', borderRadius: '5px'}} type="password" id="reg-confpassword" ref={confPassword} required />
                </div>

                <button type="submit" style={{borderRadius: '10px', width: '30%', height: '30px'}}>Register</button>
            </form>

        </div>
    )
}