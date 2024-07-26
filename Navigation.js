import { useContext } from "react";
import { Link } from "react-router-dom";
import { globalContext } from "./App";


function Navigation(){
    const {globalCount} = useContext(globalContext);
    return(
        <div style={{display:'flex', flexDirection:'row',
        justifyContent:'space-between', background:'#e5e5e5',padding:'20px'}}>
            
            <div style={{display:'flex', gap:'10px',cursor:'pointer'}}>
                <Link to="/" >Home</Link>
                <Link to="/products" >Products</Link>
            </div>

            <div style={{display:'flex', gap:'10px',cursor:'pointer'}}>
                <Link to="/cart" >{(globalCount > 0) ? '🥳': '🙃'} Cart ({globalCount})</Link>
                <Link to="/profile" >Profile</Link>
            </div>
        </div>
    );
}
export default Navigation;