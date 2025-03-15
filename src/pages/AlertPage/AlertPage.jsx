import { Link } from 'react-router';

const AlertPage = () => {
    return (
        <div className={"container mx-auto p-4"}>
            <div>
                <div className={"alert1"}>
                    <div className="flex flex-col items-center justify-center min-h-screen text-center">
                        <h1 className="text-6xl font-bold">Упс...</h1>
                        <h2 className="text-2xl font-semibold mt-4">
                            Страница не найдена
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Тут что-то упало и это не страшно! <br/> Но мы всё сохранили ;)
                        </p>
                        <Link to="/notfound">
                            <button className="mt-6 px-6 py-3 bg-red-500 text-white text-lg font-medium rounded-lg hover:bg-red-600 transition">
                                Перейти на главную
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlertPage;
