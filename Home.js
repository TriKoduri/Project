import { useContext } from "react";
import Onboard from "./Onboard";
import Welcome from "./Welcome";
import { globalContext } from "./App";

// export const UserContext = createContext(); // create context
function Home(){
    // const [isLogin, setIsLogin]=useState(false);
    const {globalIsLogin} = useContext(globalContext);
    
    return(
       
            <div>
            {
                globalIsLogin ? <Welcome /> : <Onboard />
            }
            </div>
    );
}
export default Home;