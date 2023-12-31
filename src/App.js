import React, { useState } from 'react';
import { Signup } from './pages/Signup/Signup';
import {  Route, Routes } from 'react-router-dom';
import {Home } from './pages/Home/Home';
import { Notification } from './pages/Notification/Notification';
export function App() {


  let [onlineUser, setOnlineUser] = useState({
    username: "",
    userEmail: "",
    userPassword: ""
  })
  


  return (


    <>
      <Routes>
        <Route  path='/' element={<Signup onlineUser={onlineUser} setOnlineUser={setOnlineUser}  />}></Route>
        <Route  path='/Home' element={<Home onlineUser={onlineUser} setOnlineUser={setOnlineUser} />} />
        <Route  path='/Notification' element={<Notification onlineUser={onlineUser} setOnlineUser={setOnlineUser}  />}></Route>

      </Routes>
    </>

  );
}

