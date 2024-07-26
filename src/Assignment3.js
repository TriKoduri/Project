import { useEffect, useState } from "react";
import './Assign.css'; 
import RatingStars from "react-rating-stars-component";
import Navigation1 from "./Navigation1";

function Assign3() {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState({});
    const [visibleButtons, setVisibleButtons] = useState({});

    useEffect(() => {
        const fetchMyData = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const resData = await res.json();
            setData(resData);
            const initialCart = resData.reduce((acc, item) => {
                acc[item.id] = 0;
                return acc;
            }, {});
            setCart(initialCart);
            const initialVisibility = resData.reduce((acc, item) => {
                acc[item.id] = false;
                return acc;
            }, {});
            setVisibleButtons(initialVisibility);
        };
        fetchMyData();
    }, []);

    const handleIncrement = (productId) => {
        setCart(prevCart => ({
            ...prevCart,
            [productId]: prevCart[productId] + 1
        }));
    };

    const handleDecrement = (productId) => {
        setCart(prevCart => ({
            ...prevCart,
            [productId]: prevCart[productId] > 0 ? prevCart[productId] - 1 : 0
        }));
    };

    const handleAddToCart = (productId) => {
        setVisibleButtons(prevVisibility => ({
            ...prevVisibility,
            [productId]: !prevVisibility[productId] // Toggle visibility
        }));
    };

    return (
        <div className="card-container">
            <Navigation1/>
            {data.map((dataItem, index) => (
                <div key={index} className="card" style={{width:"600px",height:"600px"}}>
                    <h2>{dataItem.id}. {dataItem.title}</h2>
                    <p>{dataItem.description}</p>
                    <img className="card-img mx-auto" src={dataItem.image} alt={dataItem.title} style={{width:"200px",height:"200px"}}/>
                    <p>Price: ${dataItem.price}</p>
                    <div id="star-rating">
                        <RatingStars
                            count={5}
                            value={dataItem.rating.rate}
                            size={24}
                            isHalf
                        />
                    </div>
                    <p>Count: {dataItem.rating.count}</p>

                    <button 
                        className="btn btn-success mx-auto" 
                        style={{width:"200px",height:"50px"}} 
                        onClick={() => handleAddToCart(dataItem.id)}
                    >
                        Add to Cart
                    </button>

                    {visibleButtons[dataItem.id] && (
                        <div className="cart-controls">
                            <button 
                                className="btn btn-primary" 
                                style={{width:"100px",height:"50px"}} 
                                onClick={() => handleDecrement(dataItem.id)}
                            >
                                -
                            </button>
                            <span style={{margin: "0 10px"}}>{cart[dataItem.id]}</span>
                            <button 
                                className="btn btn-primary" 
                                style={{width:"100px",height:"50px"}} 
                                onClick={() => handleIncrement(dataItem.id)}
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Assign3;
