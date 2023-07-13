// import React, { useEffect } from 'react';
import React from 'react';
import '../../styles/Signup.sass'
import { SignupComponent } from './components/signupComponent';
// import { useLocation } from 'react-router-dom';



export function Signup(props) {


    return (
        <>
            <SignupComponent onlineUser={props.onlineUser} setOnlineUser={props.setOnlineUser}/>
        </>
    );
}






