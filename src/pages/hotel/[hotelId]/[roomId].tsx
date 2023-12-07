import React from 'react';
import Layout from "@/components/common/layout/Layout";
import RoomRegistration from "@/components/pages/reg-rooms/RegistrationRooms";
import BookingPage from "@/components/pages/booking-page/BookingPage";

const Booking = () => {
    return (
        <div>
            <Layout title={"Сторінка бронювання номеру"}/>
            <BookingPage />
        </div>
    );
};

export default Booking;
