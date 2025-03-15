import React from 'react';
import Button from "../UI/Button/Button.jsx";
import ArrowIcon from '../../assets/arrow.svg'

const Hero = () => {
    return (
      <div className="app-container flex flex-col md:flex-row gap-6 md:gap-[30px] pt-[40px] pb-[120px]">
        <div className="bg-[#F2F5F9] p-6 md:p-[40px] font-[800] rounded-[16px] w-full md:w-[900px]">
          <h2 className="text-[20px] md:text-[48px] mb-4 md:mb-[32px]">
            Купить товаров в магазинах найди,
            <span className="text-[#FF4D4D]"> выберай</span> !
          </h2>
          <Button className="flex items-center gap-2">
            Перейти к категориям
            <img src={ArrowIcon} alt="" />
          </Button>
        </div>
        <div className="bg-[#F2F5F9] p-6 md:p-[40px] pt-[40px] md:pt-[60px] rounded-[16px] w-full md:w-[510px]">
          <h2 className="font-[800] text-[20px] md:text-[40px] mb-6 md:mb-[40px]">
            <span className="text-[#FF4D4D]">Топ-10</span> смартфонов 2024 года
          </h2>
          <Button className="flex items-center gap-2">
            Смотреть
            <img src={ArrowIcon} alt="" />
          </Button>
        </div>
      </div>

    );
};

export default Hero;