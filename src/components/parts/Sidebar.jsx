import { Link } from "react-router-dom";
const SideBar = () => {

    return (
        <nav>
            <Link to="/"><button>HOME</button></Link>
            <Link to="/Todo"><button>TODO</button></Link>
        </nav>
    )
}
export default SideBar;