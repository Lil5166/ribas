import React from 'react';
import Layout from "@/components/common/layout/Layout";
import SignUpPage from "@/components/pages/regster-page/SignUpPage";

const SignUp = () => {
    return (
        <div>
            <Layout title={"Сторінка реєстрації"}/>
            <SignUpPage />
        </div>
    );
};

export default SignUp;