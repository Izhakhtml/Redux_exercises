import { ModeProvider } from "../../context/Mode-context";
import { useContext } from "react";
const Header = () => {
const {mode,setMode} = useContext(ModeProvider);
let light = {background:"white",color:"black",border:"2px solid black",isMode:false}
let dark = {background:"black",color:"white",border:"2px solid white",isMode:true}
    return (
        <header style={{ border: mode.border}}>
                    <button onClick={()=>{
                    mode.isMode?
                    setMode(light):
                    setMode(dark)
                }}>CHANGE</button>
            <h1>Header</h1>
        </header>
    )
}
export default Header;