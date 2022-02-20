import { useContext } from "react";
import { ModeProvider } from "../../context/Mode-context";
const Home = () => {
const {mode} = useContext(ModeProvider)  
    return (
        <div className="main" style={{border:mode.border}}>
            <h1>Home</h1>
        </div>
    )
}
export default Home;