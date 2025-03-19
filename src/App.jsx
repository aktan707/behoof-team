import { Routes, Route, Navigate } from "react-router";
import Layout from "./layout/Layout.jsx";
import Menu from "./pages/menu/Menu.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Info from "./pages/InfoPage/Info.jsx";
import AlertPage from "./pages/AlertPage/AlertPage.jsx";
import HomePage from "./pages/home-page/HomePage.jsx";
import LikePage from "./pages/LikePage/LikePage.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/like" element={<LikePage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/smart" element={<ProductPage />} />
                    <Route path="/product" element={<Info />} />
                    <Route path="/notfound" element={<HomePage/>} />
                    {/* Если путь не найден, показываем AlertPage */}
                    <Route path="*" element={<AlertPage />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
