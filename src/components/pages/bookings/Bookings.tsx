// RoomDetailsPage.tsx

import React, { useEffect, useState } from 'react';
import { Container, Card, CardContent, Typography } from '@mui/material';
import HotelApi from '@/lib/api/hotel/HotelApi';

const RoomDetailsPage = () => {
    const [bookings, setBookings] = useState<any[]>([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const data = await HotelApi.getBookingsByUserId();
                setBookings(data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);

    if (bookings.length === 0) {
        return (
            <Container style={{ paddingTop: "300px", paddingLeft: "420px", fontSize: "30px" }}>
                У вас ще немає бронювань
            </Container>
        );
    }

    const formatDate = (dateString: string) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US');
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
                Room Details
            </Typography>
            {bookings.map((booking) => (
                <Card key={booking.id} style={{ marginBottom: '16px' }}>
                    <CardContent>
                        <Typography variant="subtitle1">
                            Room ID: {booking.hotelId}
                        </Typography>
                        <Typography variant="subtitle1">
                            Booking Price: ${booking.bookingPrice}
                        </Typography>
                        <Typography variant="subtitle1">
                            Start Date: {formatDate(booking.startDate)}
                        </Typography>
                        <Typography variant="subtitle1">
                            End Date: {formatDate(booking.endDate)}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Container>
    );
};

export default RoomDetailsPage;
