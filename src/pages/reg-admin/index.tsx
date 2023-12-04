import React from 'react';
import Head from "next/head";
import RegHotel from "@/components/pages/reg-hotel/RegHotel";
import Header from "@/components/common/header/Header";
import GlobalStyle from "@/styles/GlobalStyle";
import Layout from "@/components/common/layout/Layout";

const SignUp = () => {
    return (
        <div>
            <Layout title={"Сторінка реєстрації адміністратора готелю"}/>
            <RegHotel />
            <GlobalStyle />
        </div>
    );
};

export default SignUp;
