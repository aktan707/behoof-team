import HomePage from "../pages/home-page/HomePage.jsx";
import Cart from "../pages/Cart/Cart.jsx";
import Login from "../pages/Login/Login.jsx";
import Menu from "../pages/menu/Menu.jsx";

export const headerMenu = [
    {
        name: "Главный",
        path: "/home",
        element: <HomePage/>
    },
    {
        name: "Каталог товаров",
        path: "/menu",
        element: <Menu/>
    },
    {
        name: "Карзина",
        path: "/cart",
        element: <Cart/>
    },
    {
        name: "Логин",
        path: "/login",
        element: <Login/>
    },
]