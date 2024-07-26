import { useContext, useEffect } from "react"
import { globalContext } from "./App"
import Navigation from "./Navigation"

function Profile(){
    const {globalUserObject} = useContext(globalContext);
    const {setGlobalIsLogin} = useContext(globalContext);
    const logoutAction = () => { setGlobalIsLogin(false); }
    useEffect(()=>{
        const name = localStorage.getItem("name");
        console.log(name);
    })
    return(
<div>
    <Navigation/>
    <div className="container card" style={{display:'flex',
        gap:'20px',flexDirection:'column', width:'400px',
        padding:'20px'}}>
        {globalUserObject.collegeIdValue}
    <button className="btn btn-secondary" onClick={logoutAction}>Logout</button>
    </div>
</div>
    )
}
export default Profile