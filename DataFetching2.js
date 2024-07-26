import axios from "axios";
import { useEffect, useState } from "react";

function DataFetching2(){
    // create an state variable to assign response JSON
    const [data, setData] = useState([]);
    useEffect(()=> {
        const fetchMyData = async ()=> {
            const res = await axios.get('https://fakestoreapi.com/products');
            const resData = await res.data;
            setData(resData);
        }
        fetchMyData();
    },[])

    return(
        <div>Fetching Data
            

<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">UserId</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
    </tr>
  </thead>
  <tbody>
  {data.map((dataItem, index) => 
            <tr key={index}>
                <td>{dataItem.id}</td>
                <td>{dataItem.userId}</td>
                <td>{dataItem.title}</td>
                <td>{dataItem.body}</td>
            </tr>
        )}
  </tbody>
</table>
        </div>
    );
}
export default DataFetching2;