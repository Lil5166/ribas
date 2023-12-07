import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, TextField, Typography, Container } from '@mui/material';
import { BookingDto } from '@/lib/api/hotel/dto/BookingDto';
import HotelApi from "@/lib/api/hotel/HotelApi";

const BookingPage = () => {
    const router = useRouter();
    const { hotelId, roomId } = router.query;

    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');

    const calculateNights = (start: Date, end: Date): number => {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const nights = Math.round(Math.abs((start.getTime() - end.getTime()) / oneDay));
        return nights;
    };

    const handleBooking = async () => {
        try {
            if (!startDate || !endDate) {
                return;
            }

            const start = new Date(startDate);
            const end = new Date(endDate);

            const bookingData: BookingDto = {
                startDate: start,
                endDate: end,
                nights: calculateNights(start, end),
            };

            await HotelApi.bookingRoom(roomId as string, bookingData);
            router.push('/user/bookings')
            console.log('Room booked successfully!');
        } catch (error) {
            console.error('Error booking room:', error);
        }
    };

    // Get today's date in the format 'yyyy-MM-dd'
    const today = new Date().toISOString().split('T')[0];

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Booking Form
            </Typography>
            <form>
                <TextField
                    label="Start Date"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    fullWidth
                    margin="normal"
                    inputProps={{ min: today }}
                />
                <TextField
                    label="End Date"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    fullWidth
                    margin="normal"
                    inputProps={{ min: today }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleBooking}
                    fullWidth
                    style={{ marginTop: '1rem' }}
                >
                    Book Room
                </Button>
            </form>
        </Container>
    );
};

export default BookingPage;
