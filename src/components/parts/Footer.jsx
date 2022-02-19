import { ModeProvider } from "../../context/Mode-context";
import { useContext } from "react";
const Footer = () => {
const {mode} = useContext(ModeProvider);
    return (
        <footer style={{ border: mode.border}}>
            <h1>Footer</h1>
        </footer>
    )
}
export default Footer;