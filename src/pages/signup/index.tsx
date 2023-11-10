import React from 'react';
import SignUpForm from "@/components/common/signup-form/SignUpForm";

const SignUp = () => {
    document.title = 'Сторінка реєстрації'
    return (
        <div>
            <SignUpForm />
        </div>
    );
};

export default SignUp;
