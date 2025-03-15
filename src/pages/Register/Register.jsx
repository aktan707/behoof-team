import { useState } from 'react';
import { Link } from 'react-router';
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (!agreeTerms) {
            alert('Please agree to the terms and conditions');
            return;
        }

        console.log('Register with:', { name, email, password });
    };

    return (
        <div className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-8">
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold mb-2">Создать учетную запись</h1>
                            <p className="text-gray-medium">
                                Присоединяйтесь к тысячам студентов, обучающихся на нашей платформе
                            </p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Полное имя
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaUser className="text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Введите свое полное имя"
                                        className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

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

                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                    Пароль
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaLock className="text-gray-400" />
                                    </div>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Создать пароль"
                                        className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        minLength="8"
                                    />
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                    Пароль должен быть длиной не менее 8 символов.
                                </p>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                    Подтвердите пароль
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FaLock className="text-gray-400" />
                                    </div>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        placeholder="Подтвердите свой пароль"
                                        className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex items-center mb-6">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    checked={agreeTerms}
                                    onChange={(e) => setAgreeTerms(e.target.checked)}
                                    className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                                />
                                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                                    Я согласен с{' '}
                                    <Link to="#" className="text-primary hover:underline">
                                        Условиями обслуживания
                                    </Link>{' '}
                                    и {' '}
                                    <Link to="#" className="text-primary hover:underline">
                                        Политикой конфиденциальности
                                    </Link>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-full mb-4"
                            >
                                Зарегистрироваться
                            </button>

                            <div className="text-center mb-6">
                <span className="text-gray-medium text-sm">
               У вас уже есть аккаунт?{' '}
                    <Link to="/login" className="text-primary font-medium hover:underline">
                    Войти
                  </Link>
                </span>
                            </div>

                            <div className="relative flex items-center justify-center mb-6">
                                <div className="border-t border-gray-200 absolute w-full"></div>
                                <div className="bg-white px-4 relative z-10 text-sm text-gray-500">
                                    Или зарегистрируйтесь с помощью
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

export default Register;
