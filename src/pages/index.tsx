import React from 'react';
import MainPage from "@/components/pages/main-page/MainPage";
import Layout from "@/components/common/layout/Layout";

const Main = () => {
    return (
        <div>
            <Layout title={"Головна сторінка"}>
            <MainPage />
            </Layout>
        </div>
    );
};

export default Main;
