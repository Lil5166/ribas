import React from 'react';
import Head from "next/head";
import Header from "@/components/common/header/Header";
import GlobalStyle from "@/styles/GlobalStyle";

const SignUp = () => {
    return (
        <div>
            <Head>
                <title>Сторінка авторизації</title>
            </Head>
            <Header/>
            <GlobalStyle/>
        </div>
    );
};

export default SignUp;