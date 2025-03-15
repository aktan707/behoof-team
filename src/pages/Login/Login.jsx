import { useState } from 'react';
import { Link } from 'react-router';
import { FaEnvelope, FaLock, FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login with:', { email, password, rememberMe });
    };

    return (
        <div className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-8">
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold mb-2">Добро пожаловать</h1>
                            <p className="text-gray-medium">
                                Войдите, чтобы получить доступ к своей учетной записи и продолжить обучение
                            </p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Адрес электронной почты
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaEnvelope className="text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Введите свой адрес электронной почты"
                                        className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-2">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Пароль
                                    </label>
                                    <Link to="#" className="text-sm text-primary hover:underline">
                                        Забыли пароль?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaLock className="text-gray-400" />
                                    </div>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Введите ваш пароль"
                                        className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex items-center mb-6">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                                />
                                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                                    Запомнить меня
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-full mb-4"
                            >
                                Авторизоваться
                            </button>

                            <div className="text-center mb-6">
                <span className="text-gray-medium text-sm">
              Нет аккаунта?{' '}
                    <Link to="/register" className="text-primary font-medium hover:underline">
                    Sign Up
                  </Link>
                </span>
                            </div>

                            <div className="relative flex items-center justify-center mb-6">
                                <div className="border-t border-gray-200 absolute w-full"></div>
                                <div className="bg-white px-4 relative z-10 text-sm text-gray-500">
                                    Или продолжить
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <button
                                    type="button"
                                    className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50"
                                >
                                    <FaGoogle className="text-red-500" />
                                </button>
                                <button
                                    type="button"
                                    className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50"
                                >
                                    <FaFacebook className="text-blue-600" />
                                </button>
                                <button
                                    type="button"
                                    className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50"
                                >
                                    <FaApple />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;