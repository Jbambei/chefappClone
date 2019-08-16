import React, { Component } from "react";
import axios from 'axios'
import { Redirect } from 'react-router-dom';

class ClientSignUp extends Component { 
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        username: '',
        password: '',
        redirect: false
      };
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      const {name, value} = event.target
      this.setState({ [name]: value });
    }
    handleSubmit(event) {
      event.preventDefault();
      axios.post(`/register`, {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      }).then(res => {
          localStorage.setItem('token', res.data.authToken.token)
          const loc = window.location.pathname
          const dir = loc.substring(0, loc.lastIndexOf('/'));
          window.location.pathname = dir + '/FindAMeal'
          // this.setState({redirect: true})
          // this.renderRedirect();
        })
    };
    // renderRedirect = () => {
    //   if (this.state.redirect) {
    //     return <Redirect to="/Login" />
    //   }
    // }
  
    render(){
      if (this.state.redirect) {
        return <Redirect to="/FindAMeal" />
      } else
      return (
        <div className="ClientSignUp">
            <form className="form-group" onSubmit={this.handleSubmit}>
              <label htmlFor="email">Enter your email: </label>
              <input
                id="email"
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <label htmlFor="username">Enter your username: </label>
              <input
                id="username"
                name="username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <label htmlFor="password">Enter your password: </label>
              <input
                id="password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <button type="submit">Submit</button>
            </form>
        </div>
      );
    
    }
  }
  
  export default ClientSignUp;