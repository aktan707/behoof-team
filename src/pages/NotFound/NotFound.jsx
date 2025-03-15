import { Link } from 'react-router';
import { FaHome, FaSearch } from 'react-icons/fa';

function NotFound() {
    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-9xl font-bold text-primary mb-6">404</h1>
                <h2 className="text-3xl font-bold mb-4">Страница не найдена</h2>
                <p className="text-gray-medium max-w-md mx-auto mb-8">
                    Страница, которую вы ищете, могла быть удалена, ее название могло быть изменено или она временно недоступна.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Link to="/" className="btn btn-primary">
                        <FaHome className="mr-2" />
                        Вернуться на главную
                    </Link>
                    <Link to="/courses" className="btn btn-outline">
                        <FaSearch className="mr-2" />
                        Просмотр курсов
                    </Link>
                </div>

                <div className="max-w-md mx-auto">
                    <h3 className="font-semibold mb-4">Вас может заинтересовать:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Link to="/courses" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            Популярные курсы
                        </Link>
                        <Link to="/category/1" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            Веб-разработка
                        </Link>
                        <Link to="/category/2" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            Дизайн
                        </Link>
                        <Link to="/category/3" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            Бизнес
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;