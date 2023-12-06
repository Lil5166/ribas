import React, {FormEvent, useState} from 'react';
import Cookies from 'js-cookie';
import AuthApi from '@/lib/api/auth/AuthApi';
import {LoginFormDto} from '@/lib/api/auth/dto/auth';
import {useRouter} from 'next/router';
import {Button, Container, TextField, Typography} from '@mui/material';
import * as styles from './Login.styles';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (body: LoginFormDto) => {
        try {
            await AuthApi.login(body)
            const {token} = await AuthApi.login(body);
            Cookies.set('token', token, {expires: 1});
            router.push('/');
        } catch (error) {
            setError('Помилка входу. Будь ласка, спробуйте знову.');
        }
    };

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleSubmit({email, password});
    };

    return (
        <Container component="div" maxWidth="xs">
            <Typography sx={styles.h4} variant="h4">Сторінка входу</Typography>
            {error && <Typography color="error">{error}</Typography>}
            <form onSubmit={handleFormSubmit}>
                <TextField
                    sx={styles.input}
                    type="email"
                    label="Електронна пошта"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    sx={styles.input}
                    type="password"
                    label="Пароль"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    sx={styles.buttonSend}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth>
                    Увійти
                </Button>
            </form>
        </Container>
    );
};

export default Login;
