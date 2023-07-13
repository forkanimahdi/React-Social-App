import React, { useState } from 'react';
import { Signup } from './pages/Signup/Signup';
import { Route, Routes } from 'react-router-dom';
import {Home } from './pages/Home/Home';
export function App() {


  let [onlineUser, setOnlineUser] = useState({
    username: "",
    userEmail: "",
    userPassword: ""
  })


  return (

    <>
      <Routes>
        <Route exact path='/' element={<Signup onlineUser={onlineUser} setOnlineUser={setOnlineUser} />}>
        </Route>
        <Route exact path='/Home' element={<Home onlineUser={onlineUser} setOnlineUser={setOnlineUser} />} />
      </Routes>
    </>

  );
}

