import React from 'react';
import Layout from "@/components/common/layout/Layout";
import RoomRegistration from "@/components/pages/reg-rooms/RegistrationRooms";

const RegRooms = () => {
    return (
        <div>
            <Layout title={"Сторінка реєстрації адміністратора готелю"}/>
            <RoomRegistration />
        </div>
    );
};

export default RegRooms;
