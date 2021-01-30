import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';

export const SignInPage = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [signInError, setSignInError] = useState('');
    const history = useHistory();

    const onClickSignIn = async () => {
        try {
            setSignInError('');
            await firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
            history.push('/add-story');
        } catch (e) {
            setSignInError(e);
        }
    }

    return (

                <div className= "text-center">
            <form className="form-signin">
                <h1>
                    Sign-in
                        </h1>
                {signInError
                    ? <div><p className="error-message">{signInError.message}</p></div>
                    : null}
                
                    <div class="form-group">
                        <input
                            type="text"
                            value={emailValue}
                            placeholder="Email address"
                            className="form-control"
                            onChange={e => setEmailValue(e.target.value)} />
                    </div>

                    <div class="form-group">
                        <input
                            type="password"
                            value={passwordValue}
                            placeholder="Password"
                            className="form-control"
                            onChange={e => setPasswordValue(e.target.value)} />
                    </div>
                    <button
                        className="btn btn-lg btn-dark btn-block"
                        onClick={onClickSignIn}>Sign In</button>

                </form>
                </div>
    );
}