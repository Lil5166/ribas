import React from 'react';
import Layout from "@/components/common/layout/Layout";
import UserProfile from "@/components/pages/user/UserProfile";

const User = () => {
    return (
        <div>
            <Layout title={"Обліковий запис"}/>
            <UserProfile />
        </div>
    );
};

export default User;