import React from 'react';
import { Container, Typography, Paper, TextField, Select, MenuItem, InputLabel, FormControl, Grid, InputAdornment } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';
import HotelIcon from '@mui/icons-material/Hotel';

const MainPage = () => {
    return (
        <Container>
            <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h5">Заповніть інформацію про подорож</Typography>

                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6}>
                            <FormControl fullWidth>
                                <InputLabel id="city-label">Місто</InputLabel>
                                <Select
                                    labelId="city-label"
                                    id="city"
                                    defaultValue="Kyiv"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <LocationOnIcon />
                                        </InputAdornment>
                                    }
                                >
                                    <MenuItem value="Kyiv">Київ</MenuItem>
                                    <MenuItem value="Lviv">Львів</MenuItem>
                                    <MenuItem value="Kharkiv">Харків</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                id="checkin-date"
                                label="Дата заїзду"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CalendarTodayIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>

                        {/* Дата виїзду */}
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                id="checkout-date"
                                label="Дата виїзду"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CalendarTodayIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>

                        {/* Кількість дорослих */}
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                id="adults"
                                label="Кількість дорослих"
                                type="number"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PeopleIcon />
                                        </InputAdornment>
                                    ),
                                    inputProps: { min: 1 },
                                }}
                            />
                        </Grid>

                        {/* Кількість дітей */}
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                id="children"
                                label="Кількість дітей"
                                type="number"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PeopleIcon />
                                        </InputAdornment>
                                    ),
                                    inputProps: { min: 0 },
                                }}
                            />
                        </Grid>

                        {/* Кількість номерів */}
                        <Grid item xs={12} md={3}>
                            <TextField
                                id="rooms"
                                label="Кількість номерів"
                                type="number"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <HotelIcon />
                                        </InputAdornment>
                                    ),
                                    inputProps: { min: 1 },
                                }}
                            />
                        </Grid>

                        {/* Додайте кнопку для відправлення форми, якщо потрібно */}
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default MainPage;
