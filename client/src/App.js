import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavTabs from './components/NavTabs'
import Home from './components/pages/Home/Home'
import ClientSignUp from './components/pages/ClientSignUp/ClientSignUp'
import Login from './components/pages/Login/Login'
import FindAChef from './containers/FindAChef/FindAChef'
function App() { 
  return (
    <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Route exact path="/ClientSignUp" component={ClientSignUp} />
      <Route exact path="/Login" component = {Login} />
      <Route exact path="/FindAChef" component = {FindAChef} />
    </div>
  </Router>
  )
}

export default App;
