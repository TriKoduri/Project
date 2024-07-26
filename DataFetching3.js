import axios from "axios";
import { useEffect, useState } from "react";

function DataFetching3(){
    // create an state variable to assign response JSON
    const [data, setData] = useState([]);
    useEffect(()=> {
        const fetchMyData = async ()=> {
            const res = await axios.get('https://fakestoreapi.com/users');
            const resData = await res.data;
            console.log(resData);
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
      <th scope="col">Username</th>
      <th scope="col">Phone</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">Email</th>
      <th scope="col">City</th>
      <th scope="col">Zipcode</th>
    </tr>
  </thead>
  <tbody>
  {data.map((dataItem, index) => 
            <tr key={index}>
                <td>{dataItem.id}</td>
                <td>{dataItem.username}</td>
                <td>{dataItem.phone}</td>
                <td>{dataItem.name.firstname}</td>
                <td>{dataItem.name.lastname}</td>
                <td>{dataItem.email}</td>
                <td>{dataItem.address.city}</td>
                <td>{dataItem.address.zipcode}</td>
            </tr>
        )}
  </tbody>
</table>
        </div>
    );
}
export default DataFetching3;