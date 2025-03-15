import { useEffect, useState } from 'react';
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineShoppingCart
} from 'react-icons/ai';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.svg';
import { catalogApi } from "../../api/productsApi.js";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [catalog, setCatalog] = useState([]);
  const [products, setProducts] = useState([]);
  const [subProducts, setSubProducts] = useState([]);

  useEffect(() => {
    catalogApi.getAllCatalog().then(response => {
      setCatalog(response);
    });
  }, []);

  const toggleDropdown = () => {
    setDropdown(prev => {
      if (prev) {
        setProducts([]);
        setSubProducts([]);
      }
      return !prev;
    });
  };

  const getProducts = async (id) => {
    const data = await catalogApi.getCatalogById(id);
    setProducts(data);
    setSubProducts([]); // Очистить подпродукты при выборе новой категории
  };

  const getSubProducts = async (id) => {
    const data = await catalogApi.getProductsById(id);
    setSubProducts(data);
  };

  return (
    <header className='w-full bg-white shadow-md relative'>
      <div className='container mx-auto flex items-center justify-between py-3 px-4'>

        {/* Логотип и слоган */}
        <div className='flex items-center gap-2'>
          <NavLink to='/home'>
            <h1 className='text-2xl font-bold flex items-center gap-1'>
              <img className='mr-[5px]' width={25} src={logo} alt="Logo" />
              <span className='text-red-500'>Behoof</span>
            </h1>
          </NavLink>
          <span className='text-sm text-gray-500 hidden sm:block ml-[5px]'>
            Лучшие цены <br /> в интернет-магазинах
          </span>
        </div>

        {/* Каталог товаров */}
        <div className='relative'>
          <button
            className='bg-red-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-600 transition-all'
            onClick={toggleDropdown}
          >
            Каталог товаров ▼
          </button>

          {/* Категории */}
          {dropdown && (
            <div className='absolute left-0 mt-2 w-[300px] bg-white shadow-lg rounded-md p-4 z-50'>
              <ul className='space-y-2'>
                {catalog.length > 0 ? (
                  catalog.map((item) => (
                    <li
                      onClick={() => getProducts(item.id)}
                      key={item.id}
                      className='hover:text-red-500 cursor-pointer'
                    >
                      {item.name}
                    </li>
                  ))
                ) : (
                  <li className='text-gray-500'>Каталог пуст</li>
                )}
              </ul>
            </div>
          )}

          {dropdown && (
            <div className='absolute left-[310px] mt-2 w-[300px] bg-white shadow-lg rounded-md p-4 z-50'>
              {products.length > 0 ? (
                <ul className='space-y-2'>
                  {products.map((item) => (
                    <li
                      key={item.id}
                      className='hover:text-red-500 cursor-pointer'
                      onClick={() => getSubProducts(item.id)}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className='text-gray-500'>Продукт не найден</p>
              )}
            </div>
          )}


          {dropdown && subProducts.length > 0 && (
            <div className='absolute left-[620px] mt-2 w-[300px] bg-white shadow-lg rounded-md p-4 z-50'>
              <ul className='space-y-2'>
                {subProducts.map((item) => (
                  <li key={item.id} className='hover:text-red-500 cursor-pointer'>
                    {item.name}
                  </li>
                ))}
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
          <NavLink to={'/cart'} >
          <AiOutlineShoppingCart className='text-gray-600 cursor-pointer' size={24} />
          </NavLink>

          <NavLink to={'/login'} >
          <AiOutlineUser className='text-gray-600 cursor-pointer' size={24} />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
