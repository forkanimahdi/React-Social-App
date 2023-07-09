import React from 'react';
import { Signup } from './pages/Signup/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import { Feed } from './pages/Feed/Feed';
export function App() {

  return (

    <>

      <Router>
          <Routes>
            <Route exact path='/' element={<Signup />}>
            </Route>
            <Route exact path='/feed' element={<Feed />} />
          </Routes>
      </Router>

    </>

  );
}

// export default App;
