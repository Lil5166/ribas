import React, {FormEvent, useState} from 'react';
import {Button, Container, InputAdornment, TextField, Typography} from '@mui/material';
import * as styles from './RegHotel.styles'
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {Admin, LoginFormDto} from "@/lib/api/auth/dto/auth";
import AuthApi from "@/lib/api/auth/AuthApi";
import Cookies from "js-cookie";
import {useRouter} from "next/router";

const RegAdminHotel: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (body: Admin) => {
        try {
            const {token} = await AuthApi.createAdmin(body);
            Cookies.set('token', token, {expires: 1});
            router.push('/reg-hotel');
        } catch (error) {
            setError('Помилка входу. Будь ласка, спробуйте знову.');
        }
    };

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleSubmit({email, password});
    };

    return (
        <Container component="main" maxWidth="xs" sx={styles.container}>
            <div>
                <Typography component="h1" variant="h5">
                    Реєстрація адміністратора готелю
                </Typography>
                <form onSubmit={handleFormSubmit}>
                    <TextField
                        type={"email"}
                        sx={styles.input}
                        label="Електронна адреса адміністратора готелю"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        type={showPassword ? 'text' : 'password'}
                        sx={styles.input}
                        label="Пароль"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowPassword(!showPassword)}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" sx={styles.button}>
                        Зареєструвати готель
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default RegAdminHotel;
