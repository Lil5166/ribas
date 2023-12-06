import React from 'react';
import Layout from "@/components/common/layout/Layout";
import Login from "@/components/common/login";

const SignUp = () => {
    return (
        <div>
            <Layout title={"Сторінка входу в обліковий запис"}/>
            <Login />
        </div>
    );
};

export default SignUp;
