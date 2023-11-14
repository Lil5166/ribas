import React from 'react';
import Head from "next/head";
import RegHotel from "@/components/pages/reg-hotel/RegHotel";
import Header from "@/components/common/header/Header";

const SignUp = () => {
    return (
        <div>
            <Head>
                <title>Сторінка реєстрації готеля</title>
            </Head>
            <Header />
            <RegHotel />
        </div>
    );
};

export default SignUp;
