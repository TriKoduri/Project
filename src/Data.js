import { useEffect, useState } from "react";
import axios from 'axios';

function Data() {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchMyData = async () => {
            const res = await axios.get('https://fakestoreapi.com/users');
            console.log(res);
            console.log(res.data);
            const resData = res.data;
            setData(resData);
        }
        fetchMyData();
    }, []);

    return (
        <div>Fetching Data
            <table className="table caption-top">
                <caption>/<b>List of users</b></caption>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">City</th>
                        <th scope="col">Street</th>
                        <th scope="col">Number</th>
                        <th scope="col">Zipcode</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((dataItem, index) =>
                        <tr key={index}>
                            <td>{dataItem.id}</td>
                            <td>{dataItem.username}</td>
                            <td>{dataItem.email}</td>
                            <td>{`${dataItem.name.firstname} ${dataItem.name.lastname}`}</td>
                            <td>{dataItem.phone}</td>
                            <td>{dataItem.address.city}</td>
                            <td>{dataItem.address.street}</td>
                            <td>{dataItem.address.number}</td>
                            <td>{dataItem.address.zipcode}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Data;
