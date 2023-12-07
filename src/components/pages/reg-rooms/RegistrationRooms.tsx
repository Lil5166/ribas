import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
    TextField,
    Button,
    Typography,
    Container,
    Grid,
} from '@mui/material';
import * as styles from './RegistrationRooms.styles';


const RoomRegistration = () => {
    const [roomName, setRoomName] = useState('');
    const [description, setDescription] = useState('');
    const [pricePerNight, setPricePerNight] = useState('');

    const handleRoomNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRoomName(event.target.value);
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const handlePricePerNightChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPricePerNight(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Дані про номер:', {
            roomName,
            description,
            pricePerNight,
        });
        setRoomName('');
        setDescription('');
        setPricePerNight('');
    };

    return (
        <Container sx={styles.container} maxWidth="sm">
            <Typography sx={styles.h4} variant="h4" align="center" gutterBottom>
                Реєстрація номера
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            sx={styles.input}
                            fullWidth
                            label="Назва номеру"
                            value={roomName}
                            onChange={handleRoomNameChange}
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
                        <TextField
                            sx={styles.input}
                            fullWidth
                            label="Вартість за ніч"
                            value={pricePerNight}
                            onChange={handlePricePerNightChange}
                            variant="outlined"
                            required
                            type="number"
                            inputProps={{ min: '0', step: '0.01' }}
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
                            Зареєструвати номер
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default RoomRegistration;
