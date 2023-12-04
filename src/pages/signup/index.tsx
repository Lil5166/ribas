import React from 'react';
import SignUpForm from "@/components/common/signup-form/SignUpForm";
import GlobalStyle from "@/styles/GlobalStyle";
import Layout from "@/components/common/layout/Layout";

const SignUp = () => {
    return (
        <div>
            <Layout title={"Сторінка реєстрації"}/>
            <SignUpForm />
            <GlobalStyle />
        </div>
    );
};

export default SignUp;
