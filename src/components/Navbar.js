import React, { useState } from 'react'
import GoogleSignInImg from "../img/google-signin.png";
import {auth} from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';


export default function Navbar() {

    const [user] = useAuthState(auth);

    const signIn = () =>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth,provider);
        // setUserSignedIn(true);
    }

    const signOut = () =>{
        auth.signOut();
        // setUserSignedIn(false);
    }

  return (
    <nav className='navbar'>
        <h1 className='navbar-brand'>React Chat-App</h1>
        {user ? <button onClick={signOut} className='sign-out'> Sign Out </button> : 
        <button className='signin' onClick={signIn}><img src={GoogleSignInImg} /></button>}
    </nav>
  )
}
