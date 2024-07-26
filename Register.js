import { useContext, useState } from "react";
import { globalContext } from "./App";

function Register(){
    const [collegeIdValue, setCollegeId ]=useState('');
    const [passwordValue, setPassword ]=useState('');
    const [emailValue, setEmail ]=useState('');
    const [branchValue, setBranch ]=useState('');
    const [genderValue, setGenderValue ]=useState('Female');
    const [user, setUser] = useState({});
    
    // use context provided by App.js
    const {setGlobalUserObject} 
    = useContext(globalContext);

    const getCollegeId = (event) => {
        setCollegeId(event.target.value)
        console.log(collegeIdValue);
    }
    const getPassword = (event) => {
        setPassword(event.target.value)
        console.log(passwordValue);
    }
    const getEmail = (event) => {
        setEmail(event.target.value)
        console.log(emailValue);
    }
    const getBranch = (event) => {
        setBranch(event.target.value)
        console.log(event.target.value);
    }
    const getGender = (event) => {
        console.log(event.target.value);
        setGenderValue(event.target.value);
    }
    const submitData = (event) => {
        event.preventDefault();
        const obj = {
            collegeIdValue, passwordValue, emailValue,
            branchValue, genderValue
        }
        setUser(obj)
        setGlobalUserObject(obj); // set the global user object
        console.log(obj);
        console.log(user);
    }
    return(
        <div className="container">
            <div className="card" style={{width:'300px',padding:'20px'}}>
                <h1>Register</h1><p>Enter your details to register</p>
                <form onSubmit={submitData} style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                    <label>CollegeId</label>
                    <input type="text" onChange={getCollegeId}/>
                    <label>Password</label>
                    <input type="password" onChange={getPassword}/>
                    <label>Email</label>
                    <input type="email" onChange={getEmail}/>

                    <select className="form-select" value={branchValue} onChange={getBranch}>
                        <option value="">Select Branch</option>
                        <option value="CSE">CSE</option>
                        <option value="IT">IT</option>
                        <option value="AIML">AIML</option>
                        <option value="AIDS">AIDS</option>
                        <option value="CS">CS</option>
                    </select>

                <div style={{display:'flex'}}>
                    <input type="radio" checked={genderValue === "Female"}
                    value="Female" onChange={getGender}></input>Female
                    <input type="radio" checked={genderValue === "Male"}
                    value="Male" onChange={getGender}></input>Male
                </div>

                    <button type="submit" className="btn btn-dark">Register</button>
                    
                </form>
            </div>
        </div>
    );
}
export default Register;