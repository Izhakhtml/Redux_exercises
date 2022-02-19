import { Link } from "react-router-dom";
import { ModeProvider } from "../../context/Mode-context";
import { useContext } from "react";
const SideBar = () => {
const { mode} = useContext(ModeProvider);
    return (
        <nav style={{ border: mode.border}}>
            <Link to="/"><button>HOME</button></Link>
            {/* <Link to="/Todo"><button>TODO</button></Link> */}
        </nav>
    )
}
export default SideBar;