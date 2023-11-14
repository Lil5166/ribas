import React, { useState } from 'react';
import { TextField, Button, Container, Typography, InputAdornment } from '@mui/material';
import * as styles from './RegHotel.styles'
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const RegHotel: React.FC = () => {
    const [hotelName, setHotelName] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <Container component="main" maxWidth="xs" sx={styles.container}>
            <div>
                <Typography component="h1" variant="h5">
                    Реєстрація готеля
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
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        sx={styles.input}
                        label="Назва готелю"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        value={hotelName}
                        onChange={(e) => setHotelName(e.target.value)}
                    />
                    <TextField
                        sx={styles.input}
                        label="Місце розташування"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <TextField
                        sx={styles.input}
                        label="Опис готелю"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        multiline
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" sx={styles.button}>
                        Зареєструвати готель
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default RegHotel;
