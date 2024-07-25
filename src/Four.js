function Four(){
    const fruits=["Mango","Apple","Grapes","Banana","Orange"];
    return (
        <div>
            <h1>List of fruits</h1>
            <ul>
                {
                fruits.map((fruit,index)  =>(
                <li key={index}>{fruit}</li>
                ))
                }
            </ul>
        </div>
    );
};
export default Four;