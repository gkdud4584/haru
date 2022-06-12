import React, {useState} from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import PrivateRoute from './pages/PrivateRoute'
import Home from './pages/Home';
import Service from './pages/Service'
import Market from './pages/Market'
import Login from './pages/Login'
import { signIn } from './jsonData/auth';
import Profile from '../src/pages/Profile';
import AuthRoute from '../src/pages/AuthRoute';
import Tutorial from './pages/Tutorial';
import Register from './pages/Register';
import LoginPost from './pages/LoginPost';
import Mypage from './pages/Mypage'
import Logout from './pages/Logout';

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ email, password }) => setUser(signIn({ email, password }));

  return (
    <div>

    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}   />
        <Route path='/mypage' component={Service} />
        <Route path='/market' component={Market} />

        <Route path='/register' component={Register} />
        <Route path='/loginpost' component={LoginPost} />
        <PrivateRoute path='/mypage' component={Mypage} />
        <PrivateRoute path='/logout' component={Logout} />
        <Route
            path="/login"
            render={props => (
              <Login authenticated={authenticated} login={login} {...props} />
            )}
        />
        <AuthRoute
            authenticated={authenticated}
            path="/profile"
            render={props => <Profile user={user} {...props} />}
          />
          <Route path='/tutorial' component={Tutorial}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;