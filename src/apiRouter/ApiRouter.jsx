import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/parts/Header";
import Footer from "../components/parts/Footer";
import SideBar from "../components/parts/Sidebar";
import Todo from "../components/screen/Todo";
import Home from "../components/screen/Home";
import { ModeProvider } from "../context/Mode-context";
import { useContext } from "react";
const ApiRouter = () => {
let {mode} = useContext(ModeProvider);
 return (
        <div className="base_container" style={{background:mode.background,color:mode.color}}>
            <BrowserRouter>
                <Header />
                <SideBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    {/* <Route exact path="/Todo" element={<Todo />} /> */}
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>

    )
}
export default ApiRouter;