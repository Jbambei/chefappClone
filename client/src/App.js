import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavTabs from './components/NavTabs'
import Home from './components/pages/Home/Home'
import ClientSignUp from './components/pages/ClientSignUp/ClientSignUp'
import Login from './components/pages/Login/Login'
import FindAChef from './containers/FindAChef/FindAChef'
import FindAMeal from './containers/FindAMeal/FindAMeal'
import BookNew from './components/pages/Bookings/BookNew'
import tempGeoLocation from './components/pages/tempGeoLocation/tempGeoLocation'
import withAuth from './withAuth'

class App extends Component { 
  render() {
    return (
      <Router>
      <div>
        <NavTabs/>
        <Route exact path="/" component={Home} />
        <Route exact path="/ClientSignUp" component={ClientSignUp} />
        <Route exact path="/Login" component = {Login} />
        <Route exact path="/FindAChef" component = {withAuth(FindAChef)} />
        <Route exact path="/FindAMeal" component = {withAuth(FindAMeal)} />
        <Route exact path="/BookNew" component = {withAuth(BookNew)} />
        <Route exact path="/tempGeoLocation" component = {withAuth(tempGeoLocation)} />
      </div>
    </Router>
    )
  
  }
}

export default App;
