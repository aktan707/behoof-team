import React from 'react';

const Features = () => {
  return (
    <div className="container">
      <div className="bg-gray-50 p-6 rounded-lg text-center mb-6">
        <h2 className="text-xl font-bold">Наша цель - создать фантастический сервис для всех покупателей</h2>
        <div className="flex gap-4 flex-wrap justify-center mt-4">
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

      <div className="flex bg-[#F6F7FA] gap-4 md:gap-10 px-4 md:px-[80px] py-6 md:py-[80px]">
        <h2 className="text-[20px] md:text-[48px] font-bold text-left mb-4 md:mb-[32px]">
          <span className="text-[#FF4D4D]">Экономьте</span> свое время <br />
          и получайте
          <span className="text-[#FF4D4D]">максимум</span> <br /> от ежедневных покупок
        </h2>
        <img className="w-full md:w-auto" src="path_to_your_image.jpg" alt="Image description" />
      </div>
    </div>

  );
};

export default Features;