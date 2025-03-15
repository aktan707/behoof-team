import { Routes, Route, Navigate } from "react-router";
import Layout from "./layout/Layout.jsx";
import { headerMenu } from "./router/Router.jsx";
import Menu from "./pages/menu/Menu.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Phones from "./pages/Phones/Phones.jsx";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to={headerMenu[0].path} />} />
                    {headerMenu.map((item) => (
                        <Route key={item.name} path={item.path} element={item.element} />
                    ))}
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={
                        <div className="container max-w-[1290px] mx-auto text-[25px] font-bold pl-[20px]">
                            Ошибка: Страница не найдена
                            <Navigate to="/home" replace />
                            <a href="/home" className="underline text-[blue] ml-[15px]">Главная</a>
                            <img className={'pr-[40px]'} src='' alt="Error"/>
                        </div>
                    } />
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/register'} element={<Register />} />
                    <Route path={'/phones'} element={<Phones />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App
