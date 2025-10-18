import { useRef} from "react"

export default function SignIn(props){
     const username = useRef()
    const password = useRef()

    const handleLogin = (e) => {
        e.preventDefault(); // prevent page reload
        props.login(username.current.value, password.current.value);
    };

    return (
        <div>
            <form onSubmit={handleLogin} style={{display: 'flex', flexDirection: 'column', gap: '10px', color: '#FFF', aligntItems:'center', width: '303px'}}>
                <h1>Login</h1>
                <div style={{display: 'flex', flexDirection: 'column', gap: '3px'}}>
                    <label htmlFor="username">username</label>
                    <input style={{height: '20px', borderRadius: '5px'}}type="text" id="username" ref={username} required />
                </div>

                <div style={{display: 'flex', flexDirection: 'column', gap: '3px'}}>
                    <label htmlFor="password">password</label>
                    <input style={{height: '20px', borderRadius: '5px'}} type="password" id="password" ref={password} required />
                </div>

                <button type="submit" style={{borderRadius: '10px', width: '30%', height: '30px'}}>Login</button>
            </form>

        </div>
    )
}