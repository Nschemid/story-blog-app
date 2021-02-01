import React from 'react'
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';

export const NavBar = ({ user }) => {
    const history = useHistory();


    const onClickSignIn = async () => {
        history.push('/sign-in');
    }

    const onClickMyStories = async () => {
        history.push('/list-my-stories');
    }

    

    const onClickSignOut = async () => {
        firebase.auth().signOut();
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">My ideas</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    {user ?
                        <div style= {{display: 'flex'}} >
                            <h5 style= {{display: 'flex',  color: 'white'}}>Welcome {user.email}</h5>
                            <button
                                className="btn btn-sm btn-dark btn-block"
                                onClick={onClickMyStories}>My Stories</button>
                            <button
                                className="btn btn-sm btn-dark btn-block"
                                onClick={onClickSignOut}>Log out</button>
                        </div>



                        :
                        (<form className="form-inline my-2 my-lg-0">
                            <button
                                className="btn btn-sm btn-dark btn-block"
                                onClick={onClickSignIn}>Sign In</button>
                        </form>)}

                </div>
            </nav>

        </div>
    )
}
