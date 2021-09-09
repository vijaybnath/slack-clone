import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import "./Login.css";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            console.log(result);
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch (error => {
            alert(error.message);
        })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src="" 
                    alt="" 
                />
                <h1>Sign In to Clever Programmer HQ</h1>
                <p>cleverprogrammer.slack.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    );
}

export default Login;
