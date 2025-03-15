import { useState } from "react";

const ProductRatingCard = () => {
  const initialFilters = [
    { name: "Дизайн", active: true },
    { name: "Портативность", active: true },
    { name: "Камера", active: false },
    { name: "Ответ", active: false },
    { name: "Дисплей", active: false },
    { name: "Батарея", active: false },
  ];

  const [filters, setFilters] = useState(initialFilters);

  // Функция для включения/выключения фильтра
  const toggleFilter = (name) => {
    setFilters(filters.map(f =>
      f.name === name ? { ...f, active: !f.active } : f
    ));
  };

  return (
    <div className={" app-container mt-[32px] border border-[red] "}>
      <div className=" flex gap-2 flex-wrap mb-[20px]">
        {filters.map((filter) => (
          <button
            key={filter.name}
            className={`px-3 py-1 border rounded-full flex items-center transition ${
              filter.active
                ? "text-red-500 border-red-500"
                : "text-gray-400 border-gray-300"
            }`}
            onClick={() => toggleFilter(filter.name)}
          >
            {filter.name}
            {filter.active && (
              <span
                className="ml-1 text-gray-400 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFilter(filter.name);
                }}
              >
              ✕
            </span>
            )}
          </button>
        ))}
      </div>
      <div>
        <div></div>

      </div>
    </div>

  );
};

export default ProductRatingCard;
