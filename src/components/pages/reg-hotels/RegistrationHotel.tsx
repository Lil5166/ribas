import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
    TextField,
    Button,
    Typography,
    Container,
    Grid,
} from '@mui/material';
import * as styles from './RegistrationHotel.styles';
import Cookies from "js-cookie";
import {HotelDto} from "@/lib/api/hotel/dto/HotelDto";
import {useRouter} from "next/router";
import HotelApi from "@/lib/api/hotel/HotelApi";

const HotelRegistration = () => {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleHotelNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLocation(event.target.value);
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const handleSubmit = async (body: HotelDto) => {
        try {
            await HotelApi.createHotel(body);
            router.push('/hotel');
        } catch (error) {
            setError('Помилка створення готелю. Будь ласка, спробуйте знову.');
        }
    };

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleSubmit({title, location, description});
    };

    return (
        <Container sx={styles.container} maxWidth="sm">
            <Typography sx={styles.h4} variant="h4" align="center" gutterBottom>
                Реєстрація готелю
            </Typography>
            <form onSubmit={handleFormSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            sx={styles.input}
                            fullWidth
                            label="Назва готелю"
                            value={title}
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
                            value={location}
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
