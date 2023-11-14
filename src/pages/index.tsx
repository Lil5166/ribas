import React from 'react';
import MainPage from "@/components/pages/main-page/MainPage";
import Head from "next/head";

const Main = () => {
    return (
        <div>
            <Head>
                <title>Головна сторінка</title>
            </Head>
            <MainPage />
        </div>
    );
};

export default Main;
