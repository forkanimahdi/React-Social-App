import React, { useState } from 'react';
import { Signup } from './pages/Signup/Signup';
import { Route, Routes } from 'react-router-dom';
import { Feed } from './pages/Feed/Feed';
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
        <Route exact path='/feed' element={<Feed onlineUser={onlineUser} setOnlineUser={setOnlineUser} />} />
      </Routes>

    </>

  );
}

