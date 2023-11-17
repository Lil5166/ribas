import React from 'react';
import MainPage from "@/components/pages/main-page/MainPage";
import Head from "next/head";
import GlobalStyle from "@/styles/GlobalStyle";

const Main = () => {
    return (
        <div>
            <Head>
                <title>Головна сторінка</title>
            </Head>
            <MainPage />
            <GlobalStyle/>
        </div>
    );
};

export default Main;
