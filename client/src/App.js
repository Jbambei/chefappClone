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

class App extends Component { 
  state = {
    username: "",
    password: ""
  }

  render() {
    let name= null;

    if (this.props.confirm) {
      name = this.props.confirm.username;
    }

    return (
      <Router>
      <div>
        <NavTabs confirmedUser = {name}/>
        <Route exact path="/" component={Home} />
        <Route exact path="/ClientSignUp" component={ClientSignUp} />
        <Route exact path="/Login" component = {Login} />
        <Route exact path="/FindAChef" component = {FindAChef} />
        <Route exact path="/FindAMeal" component = {FindAMeal} />
        <Route exact path="/BookNew" component = {BookNew} />
        <Route exact path="/tempGeoLocation" component = {tempGeoLocation} />
      </div>
    </Router>
    )
  
  }
}

export default App;
