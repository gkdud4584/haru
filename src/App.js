import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service'
import Market from './pages/Market'
import Signup from './pages/Signup';
import Login from './pages/Login'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/mypage' component={Service} />
        <Route path='/market' component={Market} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;