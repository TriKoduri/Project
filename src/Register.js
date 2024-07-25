import React, { useRef, useState } from "react";

const Register = () => {
    const collegeIdRef = useRef();
    const passwordRef = useRef();
    const emailaddressRef = useRef();
    const branchRef = useRef();
    const yearRef = useRef();
    const [gender, setGender] = useState('');

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const collegeId = collegeIdRef.current.value;
        const password = passwordRef.current.value;
        const emailaddress = emailaddressRef.current.value;
        const branch = branchRef.current.value;
        const year = yearRef.current.value;
        const genderValue = gender;
        
        const obj = {
            collegeIdValue: collegeId,
            passwordValue: password,
            emailValue: emailaddress,
            branchValue: branch,
            yearValue: year,
            genderValue: genderValue
        };
        
        console.log(obj);
    }

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h1>Register</h1>
            <p>Provide your details to login</p>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="collegeId">College Id</label>
                    <input
                        type="text"
                        id="collegeId"
                        ref={collegeIdRef}
                        placeholder="College Id"
                        style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        ref={passwordRef}
                        placeholder="Password"
                        style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="emailaddress">Email Address</label>
                    <input
                        type="email"
                        id="emailaddress"
                        ref={emailaddressRef}
                        placeholder="Email Address"
                        style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="branch">Branch</label>
                    <select
                        id="branch"
                        ref={branchRef}
                        style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }}
                    >
                        <option value="" disabled selected>Select a branch</option>
                        <option value="AIML">AIML</option>
                        <option value="AIDS">AIDS</option>
                        <option value="CSE">CSE</option>
                    </select>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="year">Year</label>
                    <select
                        id="year"
                        ref={yearRef}
                        style={{ width: '100%', padding: '8px', margin: '5px 0', boxSizing: 'border-box' }}
                    >
                        <option value="I">I</option>
                        <option value="II">II</option>
                        <option value="III">III</option>
                        <option value="IV">IV</option>
                    </select>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>Gender</label>
                    <div>
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="Female"
                            checked={gender === "Female"}
                            onChange={handleGenderChange}
                        />
                        <label htmlFor="female">Female</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="Male"
                            checked={gender === "Male"}
                            onChange={handleGenderChange}
                        />
                        <label htmlFor="male">Male</label>
                    </div>
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', background: '#000', color: '#fff', border: 'none', borderRadius: '4px' }}>Register</button>
            </form>
        </div>
    );
}

export default Register;
