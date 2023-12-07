import React from 'react';
import {
    Container,
    Typography,
    Grid,
    Button
} from '@mui/material';
import {useRouter} from 'next/router';
import Box from "@mui/material/Box";
import Image from "next/image";
import * as styles from './MainPage.styles';

const MainPage = () => {
    const router = useRouter();

    const handleViewAllHotels = () => {
        router.push('/hotels');
    };
    return (
        <Container sx={styles.container} maxWidth="md">
            <Typography sx={styles.title} variant="h4" gutterBottom>
                Вітаємо на нашому сайті бронювання готелів!
                Занурюйтесь в атмосферу комфорту разом з Ribas!
            </Typography>
            <Box sx={styles.image}>
                <Image src="/icons/room.jpg" alt="room" width={800} height={400} />
            </Box>
            <Grid item xs={12} md={12}>
                <Button sx={styles.button} variant="contained" color="primary" onClick={handleViewAllHotels}>
                    Переглянути готелі
                </Button>
            </Grid>
        </Container>
    )
};
export default MainPage;
