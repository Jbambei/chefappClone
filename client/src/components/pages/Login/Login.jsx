import React, { Component } from "react";
import axios from 'axios'

class Login extends Component { 
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
        token: ''
      };
      this.handleChange = this.handleChange.bind(this)
      this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }
    handleChange(event) {
      const {name, value} = event.target
      this.setState({ [name]: value });
    }
  
    handleLoginSubmit(event) {
      event.preventDefault();
      axios.post(`/login`,{
        username: this.state.username,
        password: this.state.password
      }).then(res => {
        this.setState({token: res.data.authToken.token})
          console.log(this.state)})
      
    };
  
    render(){
      return (
        <div className="Login">
            <h3>Login:</h3>
            <form onSubmit={this.handleLoginSubmit}>
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
  
  export default Login;