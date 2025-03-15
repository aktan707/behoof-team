import { Routes, Route, Navigate } from "react-router";
import Layout from "./layout/Layout.jsx";
import { headerMenu } from "./router/Router.jsx";
import Menu from "./pages/menu/Menu.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Phones from "./pages/Phones/Phones.jsx";
import HomePage from "./pages/home-page/HomePage.jsx";
import Footer from "./layout/Footer/Footer.jsx";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/register'} element={<Register />} />
                    <Route path={'/phones'} element={<Phones />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App
