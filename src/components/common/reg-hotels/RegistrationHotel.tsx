import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
    TextField,
    Button,
    Typography,
    Container,
    Grid,
} from '@mui/material';
import * as styles from './RegistrationHotel.styles';

const HotelRegistration = () => {
    const [hotelName, setHotelName] = useState('');
    const [city, setCity] = useState('');
    const [description, setDescription] = useState('');

    const handleHotelNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setHotelName(event.target.value);
    };

    const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Дані про готель:', {
            hotelName,
            city,
            description,
        });
        setHotelName('');
        setCity('');
        setDescription('');
    };

    return (
        <Container sx={styles.container} maxWidth="sm">
            <Typography sx={styles.h4} variant="h4" align="center" gutterBottom>
                Реєстрація готелю
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            sx={styles.input}
                            fullWidth
                            label="Назва готелю"
                            value={hotelName}
                            onChange={handleHotelNameChange}
                            variant="outlined"
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            sx={styles.input}
                            fullWidth
                            label="Місто розташування"
                            value={city}
                            onChange={handleCityChange}
                            variant="outlined"
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            sx={styles.input}
                            fullWidth
                            label="Опис"
                            value={description}
                            onChange={handleDescriptionChange}
                            variant="outlined"
                            multiline
                            rows={4}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            sx={styles.buttonSend}
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Зареєструвати готель
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default HotelRegistration;
