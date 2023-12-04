import React from 'react';
import MainPage from "@/components/pages/main-page/MainPage";
import GlobalStyle from "@/styles/GlobalStyle";
import Layout from "@/components/common/layout/Layout";

const Main = () => {
    return (
        <div>
            <Layout title={"Головна сторінка"}>
            <MainPage />
            <GlobalStyle/>
            </Layout>
        </div>
    );
};

export default Main;
