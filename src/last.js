import React, { useRef } from 'react';

const Login = () => {
    const collegeIdRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {
    e.preventDefault();
    const collegeId = collegeIdRef.current.value;
    const password = passwordRef.current.value;
    console.log('College Id:', collegeId);
    console.log('Password:', password);
    // Add your login logic here
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Login</h2>
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
        <button type="submit" style={{ width: '100%', padding: '10px', background: '#000', color: '#fff', border: 'none', borderRadius: '4px' }}>Login</button>
        </form>
    </div>
    );
};

export default Login;