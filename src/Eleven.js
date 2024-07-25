import React, { useState } from 'react';

function Eleven() {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        console.log("Adding Review");
    };

    const handleAddItem = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <input 
                    type="text" 
                    placeholder="Enter an item" 
                    value={inputValue} 
                    onChange={handleInputChange} 
                    size="50"
                    style={{ marginRight: '10px', flexGrow: 1 }}
                />
                <button 
                    type="button" 
                    className="btn btn-dark btn-sm" 
                    onClick={handleAddItem}
                >
                    Add
                </button>
            </div>
            <h3>Reviewer Name</h3>
            <h5>This product is great</h5>
            <h3>Reviewer 2</h3>
            <h5>This product is bad</h5>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Eleven;
