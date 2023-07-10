// import React, { useEffect } from 'react';
import React from 'react';
import '../../styles/Signup.sass'
import { Component1 } from '../../components/signupComponent/component1';
// import { useLocation } from 'react-router-dom';



export function Signup(props) {


    return (
        <>
            <Component1 onlineUser={props.onlineUser} setOnlineUser={props.setOnlineUser}/>
        </>
    );
}






