import React from 'react';

const Features = () => {
  return (
    <div className={"app-container"}>
      <div className="bg-gray-50 p-6 rounded-lg text-center mb-6">
        <h2 className="text-xl font-bold">Наша цель - создать фантастический сервис для всех покупателей</h2>
        <div className="flex gap-[20px] flex-wrap justify-center gap-4 mt-4">
          <div className="text-center">
            <span className="text-2xl font-bold text-[#FF4D4D]">5</span> лет работы
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-[#FF4D4D]">30</span> магазинов
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-[#FF4D4D]">300</span> товаров в каталоге
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-[#FF4D4D]">8</span> лет на рынке
          </div>
        </div>
      </div>
      <div className={"flex bg-[#F6F7FA] gap-[10pc]"}>
        <h2 className={" pl-[80px] py-[80px] text-[20px] md:text-[48px] mb-4 md:mb-[32px] font-bold "}><span
          className={" text-[#FF4D4D]"}>Экономьте</span> свое время <br/>
          и получайте
          <span className={" text-[#FF4D4D]"}>максимум</span> <br/> от ежедневных покупок </h2>
        <img className={""} src="" alt=""/>
      </div>

    </div>

  );
};

export default Features;