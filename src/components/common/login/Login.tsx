import React, {FormEvent, useState} from 'react';
import Router from 'next/router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Будь ласка, заповніть всі поля');
            return;
        }

        try {
            await Router.push('/dashboard');
        } catch (error) {
            setError('Помилка входу. Будь ласка, спробуйте знову.');
        }
    };

    return (
        <div>
            <h1>Сторінка входу</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Електронна пошта:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Пароль:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">Увійти</button>
            </form>
        </div>
    );
};

export default Login;

