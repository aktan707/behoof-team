import { Star, Heart, BarChart2, Check, X, ChevronRight, ChevronDown } from 'lucide-react';
import './ProductPage.css';
import React from "react";
import {Link}  from 'react-router';
import Dropdown from "../Dropdown/Dropdown.jsx";

const Graf2 = () => {
    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6   bg-gray-100 border border-gray-200 rounded-2xl">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <a href="/" className="hover:text-gray-700 transition-colors">Главная</a>
                <ChevronRight className="w-4 h-4" />
                <span>Смартфоны</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <h1 className="text-2xl sm:text-3xl font-medium">Смартфоны</h1>
                <a href="#" className="flex items-center text-red-500 text-sm group">
                    Все что нужно знать при выборе
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h2 className="font-medium mb-4">Качественные характеристики</h2>

                    <div className="mb-6">
                        <div className="flex justify-between text-sm text-gray-500 mb-2">
                            <span>От 12 511 ₽</span>
                            <span>До 99 511 ₽</span>
                        </div>
                        <div className="space-y-3">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="price" className="w-4 h-4" defaultChecked />
                                <span className="text-sm">0 - 10 000 ₽</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="price" className="w-4 h-4" />
                                <span className="text-sm">10 000 - 20 000 ₽</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="price" className="w-4 h-4" />
                                <span className="text-sm">20 000 - 30 000 ₽</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="price" className="w-4 h-4" />
                                <span className="text-sm">{'> 30 000 ₽'}</span>
                            </label>
                        </div>
                    </div>

                    <button className="flex items-center text-sm text-gray-700 hover:text-gray-900 transition-colors group">
                        <span>По последним отзывам</span>
                        <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:translate-y-0.5" />
                    </button>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm space-y-6">
                    <div>
                        <h3 className="font-medium mb-4">Батарея</h3>
                        <div className="space-y-3">
                            {['Text label', 'Text label', 'Text label', 'Text label'].map((label, index) => (
                                <label key={index} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="battery"
                                        className="w-4 h-4"
                                        defaultChecked={index === 0}
                                    />
                                    <span className="text-sm">{label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-medium mb-4">Камера</h3>
                        <div className="space-y-3">
                            {['Text label', 'Text label', 'Text label', 'Text label'].map((label, index) => (
                                <label key={index} className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="camera"
                                        className="w-4 h-4"
                                        defaultChecked={index === 0}
                                    />
                                    <span className="text-sm">{label}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="font-medium">Дополнительные фильтры</h2>
                        <a href="#" className="text-red-500 text-sm flex items-center group">
                            Все фильтры
                            <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-medium mb-4">Ответ</h3>
                            <div className="space-y-3">
                                {['Text label', 'Text label', 'Text label', 'Text label'].map((label, index) => (
                                    <label key={index} className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="response"
                                            className="w-4 h-4"
                                            defaultChecked={index === 0}
                                        />
                                        <span className="text-sm">{label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-medium mb-4">Портативность</h3>
                            <div className="space-y-3">
                                {['Text label', 'Text label', 'Text label', 'Text label'].map((label, index) => (
                                    <label key={index} className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="portability"
                                            className="w-4 h-4"
                                            defaultChecked={index === 0}
                                        />
                                        <span className="text-sm">{label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between items-center pt-2">
                            <span className="font-medium">4G (LTE)</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function ProductCard() {
    return (
        <div className={"bg-gray rounded-2xl "}>
            <div className="prod transition-transform  rounded-2xl border border-gray   bg-white  transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out ">
                <div
                    className="flex flex-col lg:flex-row items-start gap-6 p-6  rounded-xl shadow-md hover:shadow-2xl transition-all duration-300">
                    <div className="w-full lg:w-48 mb-6 lg:mb-0 rounded-lg overflow-hidden">
                        <img
                            src="https://compasia.com.ph/cdn/shop/files/iphone-13-pro-max-us-variant-128267.png?v=1738308099"
                            alt="iPhone 13 Pro Max"
                            className="w-full h-auto object-cover transition-all duration-300 hover:scale-110"
                        />
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4 ">
                            <span className="text-emerald-500 text-sm">4.4 Оценка экспертов</span>
                            <div className="flex items-center gap-1">
                                <span className="text-sm">4.0</span>
                                {[1, 2, 3, 4, 5].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 text-yellow-400"
                                        fill={i < 4 ? 'currentColor' : 'none'}
                                    />
                                ))}
                                <span className="text-gray-500 text-sm ml-2">4.47 Отзывов</span>
                            </div>
                            <div className="ml-auto flex items-center gap-2">
                                <Heart
                                    className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors duration-200"/>
                                <BarChart2
                                    className="w-5 h-5 text-gray-400 hover:text-blue-500 transition-colors duration-200"/>
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Apple iPhone 13 Pro Max 256 ГБ
                            серый</h2>
                        <div className="grid grid-cols-2 gap-y-3 mb-4">
                            {[{text: 'Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC', success: true},
                                {text: '4 GB RAM, 128 GB inbuilt', success: true},
                                {text: '6.1 inches, 1170 × 2532 px Display with Small Notch', success: true},
                                {text: 'Memory Card Not Supported', success: false},
                                {text: '3240 mAh Battery with Fast Charging', success: true},
                                {text: 'Bionic A15, Hexa Core, 3.22 GHz Processor', success: true},
                                {text: '12 MP + 12 MP Dual Rear & 12 MP Front Camera', success: true},
                                {text: 'iOS v15', success: true}].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    {item.success ? (
                                        <Check className="w-4 h-4 text-emerald-500"/>
                                    ) : (
                                        <X className="w-4 h-4 text-red-500"/>
                                    )}
                                    <span className="text-sm text-gray-700">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-baseline gap-2">
                                <span className="text-emerald-500 text-sm">↑ 13%</span>
                                <span className="text-2xl font-bold text-gray-800">78 999 ₽</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-48 shrink-0">
                        <div className="space-y-4">
                            {['Дизайн', 'Батарея', 'Дисплей', 'Камера', 'Ответ', 'Портативность'].map((label, i) => {
                                const width = Math.random() * 40 + 60;
                                return (
                                    <div key={i} className="space-y-1">
                                        <div className="text-sm font-medium text-gray-700">{label}</div>
                                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden flex">
                                            {Array.from({length: 4}, (_, j) => (
                                                <div
                                                    key={j}
                                                    className="h-full bg-red-500 rounded-full mr-1 last:mr-0"
                                                    style={{width: "60px"}}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <Link to={'/product'}>
                            <button
                                className="w-full mt-6 bg-red-500 text-white py-3 px-6 rounded-lg text-sm font-medium hover:bg-red-600 transition-all duration-200">
                                Перейти к товару
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

function ProductPage() {
    return (
        <div className="min-h-screen ">
            <div className="max-w-7xl mx-auto py-12">
                <div>
                    <Graf2/>
                    <br/>
                    <Dropdown/>
                    <br/>
                </div>
                <div className="space-y-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((_, i) => (
                        <div key={i}
                             className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300">
                            <ProductCard/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;