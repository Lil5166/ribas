import React from 'react';
import SignUpForm from "@/components/common/signup-form/SignUpForm";
import Head from "next/head";
import Header from "@/components/common/header/Header";

const SignUp = () => {
    return (
        <div>
            <Head>
                <title>Сторінка реєстрації</title>
            </Head>
            <Header />
            <SignUpForm />
        </div>
    );
};

export default SignUp;
