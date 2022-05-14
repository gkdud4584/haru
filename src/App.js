import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/' component={Service} />
      </Switch>
    </Router>
    </>
  );
}

export default App;