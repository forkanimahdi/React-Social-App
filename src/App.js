import React from 'react';
import { Signup } from './pages/Signup/Signup';
import { Feed } from './pages/Feed/Feed';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export function App() {
  return (

    <>
      {/* <Signup />
      <Feed /> */}

      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Signup</Link>
            </li>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route path="/">
            <Signup />
          </Route>
        </Switch>
      </Router>

    </>

  );
}

// export default App;
