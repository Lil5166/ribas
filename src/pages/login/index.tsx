import React from 'react';
import GlobalStyle from "@/styles/GlobalStyle";
import Layout from "@/components/common/layout/Layout";
import Login from "@/components/common/login";

const SignUp = () => {
    return (
        <div>
            <Layout title={"Сторінка входу в обліковий запис"}/>
            <GlobalStyle/>
            <Login />
        </div>
    );
};

export default SignUp;
