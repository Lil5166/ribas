import React from 'react';
import Layout from "@/components/common/layout/Layout";
import HotelRegistration from "@/components/pages/reg-hotels/RegistrationHotel";

const RegHotel = () => {
    return (
        <div>
            <Layout title={"Сторінка реєстрації готелю"}/>
            <HotelRegistration />
        </div>
    );
};

export default RegHotel;
