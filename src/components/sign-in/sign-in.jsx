import React, { useState } from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import './sign-in.scss';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';



const SignIn = props => {
    const [state, setStste] = useState({
        email: "",
        password: ""
    });

    const handleSubmite = async event => {
        event.preventDefault();

        const { email, password } = state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setStste({email: "", password: ""});
        } catch (error) {
            console.log(error);
        }
    };

    const handleChage = event => {
        const {value, name} = event.target;

        setStste({...state, [name]: value});
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>sign in with your email and password</span>

            <form onSubmit={handleSubmite}>
                <FormInput 
                    name="email" 
                    type="email" 
                    value={state.email} 
                    required 
                    handleChange={handleChage}
                    label="email"
                />
                <FormInput 
                    name="password"
                    type="password" 
                    value={state.password} 
                    required
                    handleChange={handleChage}
                    label="password"
                />

                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    );
};


export default SignIn;