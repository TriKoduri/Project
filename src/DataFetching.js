import {useEffect,useState} from "react";
function DataFetching(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        const fetchMyData=async ()=>{
            const res=await fetch('https://jsonplaceholder.typicode.com/posts');
            console.log(res.ok);
            const resData=await res.json();
            setData(resData);
            console.log(resData);
        }
        fetchMyData();
})
    return (
        <div>Fetching data
            {data.map((dataItem,index)=><div>{dataItem.title}</div>)}
        </div>
        
    );
}
export default DataFetching;