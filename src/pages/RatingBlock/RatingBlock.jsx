const RatingBlock = ({ expertRating, userRating, reviewsCount }) => {
    return (
        <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center bg-gray-100 text-green-600 text-sm font-medium px-3 py-1 rounded-xl">
                <span className="text-lg font-semibold">{expertRating}</span>
                <span className="ml-2">Оценка экспертов</span>
            </div>

            <div className="flex items-center bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1 rounded-xl">
                <span className="text-lg font-semibold">{userRating}</span>
                <div className="flex ml-2">
                    {/* Генерация звезд */}
                    {Array.from({ length: 5 }).map((_, index) => (
                        <span key={index} className={`text-xl ${index < Math.floor(userRating) ? "text-[#FF4D4F]" : "text-gray-300"}`}>
              ★
            </span>
                    ))}
                </div>
                <span className="ml-2">{reviewsCount} Отзывов</span>
            </div>
        </div>
    );
};

export default RatingBlock;
