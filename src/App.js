import React, { useState } from 'react';
import { Signup } from './pages/Signup/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import { Feed } from './pages/Feed/Feed';
export function App() {


  let [onlineUser, setOnlineUser] = useState({
    username: "",
    userEmail: "",
    userPassword: ""
    })





  return (


    <>

      <Router>
        <Routes>
          <Route exact path='/' element={<Signup onlineUser={onlineUser} setOnlineUser={setOnlineUser} />}>
          </Route>
          <Route exact path='/feed' element={<Feed onlineUser={onlineUser} setOnlineUser={setOnlineUser} />} />
        </Routes>
      </Router>

    </>

  );
}

// export default App;
