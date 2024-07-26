import { useEffect, useRef, useState } from "react";
import CardUI from "./Card";
import axios from "axios";

function Ele(){
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        
        // fetch 
        const fetchingDataMethod = async () => {
            const response = await axios('https://jsonplaceholder.typicode.com/photos');
            console.log(response);
            console.log(response.ok);
            const res = await response.data;
            console.log(res);
            setData(res.slice(0,10));
            setLoading(false);
        }
        fetchingDataMethod();
    },[]);
    
    
    return(
        <div>
            {loading ? <div>Loading...</div> : 
            
            data.map((obj,index) => 
                <div key={index}>{obj.title}</div>
                
                )
                }
        </div>
    );
}
export default Ele;