import { useState } from 'react';
import {
    AiOutlineSearch,
    AiOutlineMenu,
    AiOutlineClose,
    AiOutlineHeart,
    AiOutlineUser,
    AiOutlineShoppingCart
} from 'react-icons/ai';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.svg';
const Header = () => {
    // const [nav, setNav] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    return (
        <header className='w-full bg-white shadow-md relative'>
            <div className='container mx-auto flex items-center justify-between py-3 px-4'>
                {/* Логотип и слоган */}
                <div className='flex items-center gap-2'>
                    <NavLink to='/'>
                        <h1 className='text-2xl font-bold flex items-center gap-1'>
                            <img className={'mr-[5px]'} width={25} src={logo} alt=""/>
                            <span className='text-red-500'>Behoof</span>
                        </h1>
                    </NavLink>
                    <span className='text-sm text-gray-500 hidden sm:block ml-[5px]'>Лучшие цены <br/> в интернет-магазинах</span>
                </div>

                {/* Каталог товаров */}
                <div className='relative'>
                    <button
                        className='bg-red-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-600 transition-all'
                        onClick={() => setDropdown(!dropdown)}
                    >
                        Каталог товаров ▼
                    </button>
                    {dropdown && (
                        <div className='absolute left-0 mt-2 w-[300px] bg-white shadow-lg rounded-md p-4 z-50'>
                            <ul className='space-y-2'>
                                <li className='hover:text-red-500 cursor-pointer'> Смартфоны</li>
                                <li className='hover:text-red-500 cursor-pointer'> Ноутбуки</li>
                                <li className='hover:text-red-500 cursor-pointer'> Планшеты</li>
                                <li className='hover:text-red-500 cursor-pointer'> Аксессуары</li>
                                <li className='hover:text-red-500 cursor-pointer'> Принтеры и сканеры</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Поиск */}
                <div className='flex items-center bg-gray-100 rounded-full px-4 py-2 w-64 sm:w-96'>
                    <AiOutlineSearch className='text-gray-500' size={20} />
                    <input
                        type='text'
                        placeholder='Поиск товаров'
                        className='bg-transparent w-full focus:outline-none px-2'
                    />
                </div>

                {/* Иконки */}
                <div className='flex items-center gap-4'>
                    <AiOutlineHeart className='text-gray-600 cursor-pointer' size={24} />
                    <AiOutlineUser className='text-gray-600 cursor-pointer' size={24} />
                    <AiOutlineShoppingCart className='text-gray-600 cursor-pointer' size={24} />
                </div>
            </div>
        </header>
    );
};

export default Header;
