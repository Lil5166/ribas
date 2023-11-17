import React from 'react';
import Head from "next/head";
import RegHotel from "@/components/pages/reg-hotel/RegHotel";
import Header from "@/components/common/header/Header";
import GlobalStyle from "@/styles/GlobalStyle";

const SignUp = () => {
    return (
        <div>
            <Head>
                <title>Сторінка реєстрації готеля</title>
            </Head>
            <Header />
            <RegHotel />
            <GlobalStyle />
        </div>
    );
};

export default SignUp;
