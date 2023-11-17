import React from 'react';
import SignUpForm from "@/components/common/signup-form/SignUpForm";
import Head from "next/head";
import Header from "@/components/common/header/Header";
import GlobalStyle from "@/styles/GlobalStyle";

const SignUp = () => {
    return (
        <div>
            <Head>
                <title>Сторінка реєстрації</title>
            </Head>
            <Header />
            <SignUpForm />
            <GlobalStyle />
        </div>
    );
};

export default SignUp;
