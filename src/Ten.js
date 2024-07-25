import React, { useState } from 'react';

function Ten() {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <button className="btn btn-dark" onClick={handleDecrement}>-</button>
            <h1>{count}</h1>
            <button className="btn btn-dark" onClick={handleIncrement}>+</button>
        </div>
    );
}

export default Ten;
