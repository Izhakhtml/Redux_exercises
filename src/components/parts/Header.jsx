import { ModeProvider } from "../../context/Mode-context";
import { useContext } from "react";
const Header = () => {
const {mode} = useContext(ModeProvider);
    return (
        <header style={{ border: mode.border}}>
            <h1>Header</h1>
        </header>
    )
}
export default Header;