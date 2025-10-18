
export default function Navbar(props){
    return(
        <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2a2b49ff",
        width: "100%",
        color: "#dededeff"
      }}>
            <h1 style={{marginLeft: '15px'}}>PUROM ni</h1>
            <h1 style={{textAlign: 'end', marginLeft:'10px'}}> {props.username}</h1>
        </div>
    )
}