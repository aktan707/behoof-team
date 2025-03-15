import { Routes, Route, Navigate } from "react-router";
import Layout from "./layout/Layout.jsx";
import HomePage from "./pages/home-page/HomePage.jsx";
import Login from "./pages/Login/Login.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Register from "./pages/Register/Register.jsx";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cart" element={<Cart />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;