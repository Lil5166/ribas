import React from 'react';
import RegAdminHotel from "@/components/pages/reg-admin-hotel/RegAdminHotel";
import Layout from "@/components/common/layout/Layout";

const RegAdmin = () => {
    return (
        <div>
            <Layout title={"Сторінка реєстрації адміністратора готелю"}/>
            <RegAdminHotel />
        </div>
    );
};

export default RegAdmin;
