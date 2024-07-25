import { useEffect, useState } from "react";

function Assignment() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchMyData = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            if (res.ok) {
                const resData = await res.json();
                setData(resData);
                console.log(resData);
            }
        }
        fetchMyData();
    }, []);

    const styles = {
        productList: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection:'row',
            gap: '18px',
            justifyContent: 'center',
            padding: '30px',
        },
        productItem: {
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '16px',
            width: '200px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            textAlign: 'center',
        },
        productImage: {
            maxWidth: '100%',
            height: '80px',
            borderBottom: '1px solid #ddd',
            marginBottom: '8px',
        },
        productTitle: {
            fontSize: '16px',
            fontWeight: 'bold',
            margin: '8px 0',
        },
        productPrice: {
            fontSize: '14px',
            color: '#333',
            marginBottom: '8px',
        },
        addToCartButton: {
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '10px 40px',
            borderRadius: '2px',
            cursor: 'pointer',
        },
        addToCartButtonHover: {
            backgroundColor: '#0056b3',
        }
    };

    return (
        <div style={styles.productList}>
            {data.map((product) => (
                <div key={product.id} style={styles.productItem}>
                    <img src={product.image} alt={product.title} style={styles.productImage} />
                    <h2 style={styles.productTitle}>{product.title}</h2>
                    <p style={styles.productPrice}>₹{product.price}</p>
                    <button 
                        style={styles.addToCartButton}
                        onMouseOver={(e) => e.target.style.backgroundColor = styles.addToCartButtonHover.backgroundColor}
                        onMouseOut={(e) => e.target.style.backgroundColor = styles.addToCartButton.backgroundColor}
                    >
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Assignment;
