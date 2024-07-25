import Eleven from "./Eleven";
function CardUI(props) {
    const width = 350;
    const height = 300;
    return (
        <div className="card" style={{ width: '1890px', height: '850px' }}>
            <h1><b>Beats Headphones</b></h1>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img 
                    src="product.jpeg" 
                    width={width} 
                    height={height} 
                    alt="pic" 
                    style={{ border: '1px solid #000000', borderRadius: '10px', marginRight: '20px' }} 
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1>{props.userFromArray}</h1>
                    <h3 style={{fontSize:'18pxs'}}>Description<br />{props.user.Description}</h3>
                    <h3>Price: {props.user.Price}</h3>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            style={{ width: '100px', height: '40px', fontSize: '14px' }}
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            <hr>
            </hr>
            <div style={{ marginTop: '20px' }}>
                <h3>Product Specifications:</h3>
                <ul>
                    <li>Class 1 Bluetooth for exceptional wireless connectivity</li>
                    <li>USB-C audio for simultaneous listening and charging</li>
                    <li>3.5mm analogue input for wired audio sources</li>
                    <li>Battery life: Up to 22 hours</li>
                    <li>Weight: 215 grams</li>
                </ul>
            </div>
            <div>
            <hr style={{ margin: '20px 0' }} />
            <h1>Reviews</h1>
            <Eleven />
        </div>

        </div>
    );
}

export default CardUI;
