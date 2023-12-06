import React from 'react';
import RegAdminHotel from "@/components/pages/reg-hotel/RegAdminHotel";
import Layout from "@/components/common/layout/Layout";

const SignUp = () => {
    return (
        <div>
            <Layout title={"Сторінка реєстрації адміністратора готелю"}/>
            <RegAdminHotel />
        </div>
    );
};

export default SignUp;
