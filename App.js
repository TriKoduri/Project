import { BrowserRouter, Routes } from "react-router-dom";
import CardListUI from "./CardList";

function App(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<CardListUI/>}/>;
        
        </Routes>
    </BrowserRouter> 
    )
}
export default App;