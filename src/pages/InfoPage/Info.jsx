import React, { useState } from 'react';
import kom1  from "../../assets/kom1.png"
import kom2  from "../../assets/kom2.png"
import kom3  from "../../assets/kom3.png"
import kom4  from "../../assets/kom4.png"
import girl  from "../../assets/girl.svg"
import './Info.css';


function Info() {
    const [activeColorIndex, setActiveColorIndex] = useState(2);
    const [activeMemory, setActiveMemory] = useState('256 ГБ');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showFullSpecs, setShowFullSpecs] = useState(false);

    const colors = [
        { name: 'Золотой', hex: '#F9E5C9' },
        { name: 'Розовый', hex: '#F4D4CE' },
        { name: 'Серый', hex: '#4E4F53' },
        { name: 'Голубой', hex: '#9BB5CE' },
        { name: 'Мятный', hex: '#90EEE1' },
        { name: 'Розовый', hex: '#F8C8E0' }
    ];


    const reviews = [
        {
            name: "Jerome Bell",
            avatar: girl,
            date: "12.10.23",
            title: "Восхитительный мобильный",
            text: "Я перешел с Samsung через 7 лет без iPhone, так что это странно и возвращаюсь, однако я еще не был разочарован, единственное, чего мне может не хватать, это лучшей камеры, но этого достаточно, вам нужно все выяснить еще раз, но, очевидно, рекомендация отсюда 😁 💪🏼",
        },
        {
            name: "Jerome Bell",
            avatar: girl,
            date: "12.10.23",
            title: "Восхитительный мобильный",
            text: "Этот телефон просто работает. Моментальный отклик на любое действие. Все механизмы отлажены. В совокупности с остальными девайсами от apple образует органичную инфраструктуру, которой легко и просто пользоваться. Интерфейс не перегружен бесполезными, запутанными и лишними элементами, как в Андроид телефонах. Просто разобраться, где что настроить и при этом не утонуть в лабиринте из меню, переходов, надстроек и дополнительных танцев, как в какой нибудь самсе.",
        },
        {
            name: "Jerome Bell",
            avatar: girl,
            date: "12.10.23",
            title: "Восхитительный мобильный",
            text: "Этот телефон просто работает. Моментальный отклик на любое действие. Все механизмы отлажены. В совокупности с остальными девайсами от apple образует органичную инфраструктуру, которой легко и просто пользоваться. Интерфейс не перегружен бесполезными, запутанными и лишними элементами, как в Андроид телефонах. Просто разобраться, где что настроить и при этом не утонуть в лабиринте из меню, переходов, надстроек и дополнительных танцев, как в какой нибудь самсе.",
        },

        {
            name: "Jerome Bell",
            avatar: girl,
            date: "12.10.23",
            title: "Восхитительный мобильный",
            text: "Этот телефон просто работает. Моментальный отклик на любое действие. Все механизмы отлажены. В совокупности с остальными девайсами от apple образует органичную инфраструктуру, которой легко и просто пользоваться. Интерфейс не перегружен бесполезными, запутанными и лишними элементами, как в Андроид телефонах. Просто разобраться, где что настроить и при этом не утонуть в лабиринте из меню, переходов, надстроек и дополнительных танцев, как в какой нибудь самсе.",
        },
        {
            name: "Jerome Bell",
            avatar: girl,
            date: "12.10.23",
            title: "Восхитительный мобильный",
            text: "Этот телефон просто работает. Моментальный отклик на любое действие. Все механизмы отлажены. В совокупности с остальными девайсами от apple образует органичную инфраструктуру, которой легко и просто пользоваться. Интерфейс не перегружен бесполезными, запутанными и лишними элементами, как в Андроид телефонах. Просто разобраться, где что настроить и при этом не утонуть в лабиринте из меню, переходов, надстроек и дополнительных танцев, как в какой нибудь самсе.",
        },

    ];

    const memoryOptions = ['128 ГБ', '256 ГБ', '512 ГБ'];

    const images = [
        'https://technolove.ru/upload/iblock/f8a/cgvh4e94wei4xfj1tqkt021q6nwb2a8h.webp',
        'https://technolove.ru/upload/iblock/79e/x0zqgvxme198z5vnph2zvnqidv5jawas.webp',
        'https://technolove.ru/upload/iblock/d51/nzbarwuvn0j2ezbch03pkaiify60mazp.webp',
    ];

    const specs = [
        { name: 'Камера', value: '48 МПх' },
        { name: 'Система', value: 'iOS' },
        { name: 'Диагональ', value: '6.7"' },
        { name: 'Зарядка', value: 'Беспроводная' }
    ];

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handleFavoriteClick = () => {
        alert('Товар добавлен в избранное!');
    };

    const handleBuyClick = () => {
        alert('Товар добавлен в корзину!');
    };

    return (
        <div className="container mx-auto p-4">
            <div className="review-container">
                <div className="r">
                    <div className="product-page">
                        <div className="product-gallery">
                            <div className="main-image">
                                <button className="arrow-btn prev-btn" onClick={handlePrevImage}>&lt;</button>
                                <img src={images[currentImageIndex]} alt="iPhone 13 Pro Max серый"/>
                                <button className="arrow-btn next-btn" onClick={handleNextImage}>&gt;</button>
                            </div>

                            <div className="thumbnail-gallery">
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                                        onClick={() => setCurrentImageIndex(index)}
                                        style={{width: '100px', overflow: 'hidden'}}
                                    >
                                        <img
                                            src={image}
                                            alt={`iPhone 13 Pro Max вид ${index + 1}`}
                                            style={{width: '170px', height: 'auto'}}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="product-info">
                            <h2 className="product-title">Apple iPhone 13 Pro Max 256 ГБ серый</h2>

                            <div className="flex flex-col space-y-3 p-4 bg-white rounded-lg shadow">
                                {["Дизайн", "Батарея", "Дисплей", "Камера", "Ответ", "Портативность"].map((label, index) => (
                                    <div key={index} className="flex flex-col">
                                        <span className="text-gray-500 text-sm">{label}</span>
                                        <div className="flex space-x-2 mt-1">
                                            {[...Array(4)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`h-1 w-30 rounded-full ${index !== 1 || i < 2 ? "bg-red-500" : "bg-gray-200"}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="product-price">
                                <h3>78 999 ₽</h3>
                                <p className="delivery">Доставка бесплатная</p>
                            </div>

                            <div className="product-colors">
                                <p>Цвет:</p>
                                <div className="color-options">
                                    {colors.map((color, index) => (
                                        <div
                                            key={index}
                                            className={`color-option ${activeColorIndex === index ? 'active' : ''}`}
                                            style={{backgroundColor: color.hex}}
                                            onClick={() => setActiveColorIndex(index)}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="product-memory">
                                <p>Память:</p>
                                <div className="memory-options">
                                    {memoryOptions.map((memory) => (
                                        <div
                                            key={memory}
                                            className={`memory-option ${activeMemory === memory ? 'active' : ''}`}
                                            onClick={() => setActiveMemory(memory)}
                                        >
                                            {memory}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="product-buttons">
                                <button className="btn favorite-btn" onClick={handleFavoriteClick}>Избранный</button>
                                <button className="btn buy-btn" onClick={handleBuyClick}>Купить</button>
                            </div>
                        </div>
                    </div>

                    <section className="product-specs">
                        <h3>Характеристики Apple iPhone 13 Pro Max 256 ГБ серый</h3>
                        <div className="specs-list">
                            {specs.map((spec, index) => (
                                <div key={index} className="spec-item">
                                    <span className="spec-name">{spec.name}</span>
                                    <span className="spec-value">{spec.value}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            className="specs-toggle"
                            onClick={() => setShowFullSpecs(!showFullSpecs)}
                        >
                            Полный список характеристик <span className="arrow-down">{showFullSpecs ? '▲' : '▼'}</span>
                        </button>
                    </section>

                    <section className="product-description">
                        <h3>Описание</h3>
                        <p>Смартфон Apple iPhone 13 выполнен в компактном корпусе с привлекательной отделкой корпуса под
                            и увеличенной диагональю по сравнению с iPB. Мощный чип A15 Bionic обеспечивает быструю и
                            стабильную работу при запуске приложений, просмотре видео, веб-серфинге и выполнении других
                            задач...</p>
                    </section>
                </div>
            </div>


            <div className="mb-10">
                <h2 className="text-2xl font-bold mb-5">Обзоры</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-[#F2F3F5] p-5 rounded-xl shadow-lg">
                        <img src={kom2} alt="Смартфон"
                             className="w-full h-60 object-cover  mb-3"/>
                        <h3 className="text-lg  font-semibold">Обзор устаревших смартфонов</h3>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur. Rhoncus risus
                            viverra enim nunc.</p>
                        <button className="mt-2 text-red-500 flex items-center">Смотреть &gt;</button>
                    </div>
                    <div className="bg-[#F2F3F5] p-5 rounded-xl shadow-lg">
                        <img src={kom1} alt="Компьютер"
                             className="w-full h-60 object-cover rounded-lg mb-3"/>
                        <h3 className="text-lg font-semibold">Обзор устаревших смартфонов</h3>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur. Rhoncus risus
                            viverra enim nunc.</p>
                        <button className="mt-2 text-red-500 flex items-center">Смотреть &gt;</button>
                    </div>
                    <div className="bg-[#F2F3F5] p-5 rounded-xl shadow-lg">
                        <img src={kom3} alt="Аудиоколонка"
                             className="w-full h-60 object-cover rounded-lg mb-3"/>
                        <h3 className="text-lg font-semibold">Обзор устаревших смартфонов</h3>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur. Rhoncus risus
                            viverra enim nunc.</p>
                        <button className="mt-2 text-red-500 flex items-center">Смотреть &gt;</button>
                    </div>
                    <div className="bg-[#F2F3F5] p-5 rounded-xl shadow-lg">
                        <img src={kom4} alt="Наушники"
                             className="w-full h-60 object-cover rounded-lg mb-3"/>
                        <h3 className="text-lg font-semibold">Обзор устаревших смартфонов</h3>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur. Rhoncus risus
                            viverra enim nunc.</p>
                        <button className="mt-2 text-red-500 flex items-center">Смотреть &gt;</button>
                    </div>
                </div>
                <div className="text-right mt-3">
                    <a href="#" className="text-red-500 flex items-center justify-end">К обзорам &gt;</a>
                </div>
            </div>


            <div className="mb-10">
                <h2 className="text-2xl  font-bold mb-5">Отзывы</h2>
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-[#F2F3F5] p-5 rounded-xl shadow-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full"/>
                                <div>
                                    <p className="font-semibold">{review.name}</p>
                                    <p className="text-sm text-gray-500">{review.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center mb-2">
                                <span className="text-red-500">★★★★★</span>
                            </div>
                            <h3 className="text-lg font-semibold">{review.title}</h3>
                            <p className="text-sm text-gray-500">{review.text}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-5">
                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg">Показать еще</button>
                </div>
            </div>

        </div>
    );
}

export default Info;
