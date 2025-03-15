import React from 'react';
import BestCard from "./BestCard.jsx";

const categories = [
  {categoryImage: "", categoryName: "Смартфоны"},
  {categoryImage: "https://ap71.ru/wp-content/uploads/2019/02/mbp-spacegray-2024.png", categoryName: "Ноутбуки"},
  {categoryImage: "", categoryName: "Планшеты"},
  {categoryImage: "", categoryName: "Умные часы"},
  {categoryImage: "", categoryName: "Игровые приставки"},
  {categoryImage: "", categoryName: "Наушники"},
  {categoryImage: "", categoryName: "Портативные колонки"},
  {categoryImage: "", categoryName: "Аксессуары"},
];


const BestChoose = () => {
  return (
    <div className="app-container">
      <h3 className="mb-[20px] text-[24px] font-bold">Лучший выбор</h3>
      <div className="overflow-x-auto pb-4 md:overflow-hidden">
        <div className="flex gap-[18px] w-max">
          {categories.map((category, index) => (
            <BestCard
              key={index}
              img={category.categoryImage.length > 0 ? category.categoryImage : "https://systema.kg/img/p/ru-default-home_default.jpg"}
              text={category.categoryName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestChoose;