import React from 'react';
import Layout from "@/components/common/layout/Layout";
import RoomDetailsPage from "@/components/pages/bookings/Bookings";

const BookingsPage = () => {
    return (
        <div>
            <Layout title={"Обліковий запис"}/>
            <RoomDetailsPage />
        </div>
    );
};

export default BookingsPage;