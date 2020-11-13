import React from 'react';

import SingIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import './sign-in-and-sign-up.scss';


const SingInAndSignUp = props => {
    return (
        <div className="sign-in-and-sign-up">
            <SingIn />
            <SignUp />
        </div>
    );
};


export default SingInAndSignUp;