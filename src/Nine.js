import { useEffect, useState } from "react";

function Nine() {
    const [count, setCount] = useState(1);

    useEffect(() => {
        setCount(5);
        console.log("useEffect is called");
    }, []);

    return (
        <div>
            <h1>Count {count}</h1>
            <button className="btn btn-dark" onClick={() => setCount(count + 1)}>Click here</button>
        </div>
    );
}

export default Nine;
