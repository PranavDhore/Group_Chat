import React, { useState } from 'react'
import logo from '../logo.svg';
import GoogleSignInImg from "../img/google-signin.png"; 

import {auth} from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

export default function Welcome(props) {

    const [user] = useAuthState(auth);

    const googleSignIn = () =>{
        props.setLoading(true);
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth,provider);
    }

  return (
    <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Welcome to our chat app<br></br> Please sign-in to chat with your friends</code> 
        </p>
        <button style={{marginTop:'20px'}} onClick={googleSignIn} className="app-google-btn">
          <img src={GoogleSignInImg}  />
        </button>
      </header>
  )
}
