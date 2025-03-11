// import logo from '../../assets/logo.png';
// import vk1 from '../../assets/vk1.svg';
// import vk2 from '../../assets/vk2.svg';
// import vk3 from '../../assets/vk3.svg';
// import vk4 from '../../assets/vk4.svg';
// import vk5 from '../../assets/vk5.svg';

import {NavLink} from "react-router";
import logo from "../../assets/logo.svg";

const Footer = () => {
    return (
        <div className={'container'
        }>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <div className="space-y-4 sm:space-y-6">
                        <div className='flex items-center gap-2'>
                            <NavLink to='/'>
                                <h1 className='text-2xl font-bold flex items-center gap-1'>
                                    <img className={'mr-[5px]'} width={25} src={logo} alt=""/>
                                    <span className='text-red-500'>Behoof</span>
                                </h1>
                            </NavLink>
                            {/*<span className='text-sm text-gray-500 hidden sm:block ml-[5px]'>Лучшие цены <br/> в интернет-магазинах</span>*/}
                        </div>
                        <div className="text-gray-600">
                            <p className="text-sm sm:text-base mb-3">Мы в соц сетях</p>
                            <div className="flex items-center space-x-4">
                                <a href="#" className="transform hover:scale-110 transition-transform duration-200">
                                    {/*<img src={vk1} alt="Social Icon" className="w-6 h-6 sm:w-8 sm:h-8"/>*/}
                                </a>
                                <a href="#" className="transform hover:scale-110 transition-transform duration-200">
                                    {/*<img src={vk2} alt="Social Icon" className="w-6 h-6 sm:w-8 sm:h-8"/>*/}
                                </a>
                                <a href="#" className="transform hover:scale-110 transition-transform duration-200">
                                    {/*<img src={vk3} alt="Social Icon" className="w-6 h-6 sm:w-8 sm:h-8"/>*/}
                                </a>
                                <a href="#" className="transform hover:scale-110 transition-transform duration-200">
                                    {/*<img src={vk4} alt="Social Icon" className="w-6 h-6 sm:w-8 sm:h-8"/>*/}
                                </a>
                                <a href="#" className="transform hover:scale-110 transition-transform duration-200">
                                    {/*<img src={vk5} alt="Social Icon" className="w-6 h-6 sm:w-8 sm:h-8"/>*/}
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="mt-8 sm:mt-0">
                        <h3 className="text-gray-900 font-medium text-lg mb-4">Пользователю</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#"
                                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base">
                                    Связаться с нами
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base">
                                    Поддерка пользователей
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base">
                                    FAQ & Руководства
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base">
                                    Политика конфиденциальности
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base">
                                    Пользовательское соглашение
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-8 lg:mt-0">
                        <h3 className="text-gray-900 font-medium text-lg mb-4">Популярные категории</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#"
                                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base">
                                    Смартфоны
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base">
                                    Teteras electricas
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base">
                                    Стиральные машины
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base">
                                    Телевизоры
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base">
                                    Ноутбуки
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div className="mt-8 lg:mt-0">
                        <h3 className="text-gray-900 font-medium text-lg mb-4">Команда Behoof</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base">
                                    О нас
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base">
                                    Работа у нас
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 sm:mt-12 pt-8 border-t border-gray-200">
                    <p className="text-gray-600 text-xs sm:text-sm text-center sm:text-left">
                        Copyright © 2023 Behoof, Inc. Все права защищены
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;