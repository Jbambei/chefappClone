import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
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
    }).then(res => console.log(res))
      
    console.log(this.state.email)
    console.log(this.state.username)
    console.log(this.state.password)

  };

  handleLoginSubmit(event) {
    event.preventDefault();
    // fetch(`http://localhost:3001/login`)
    // .then(response => response.json())
    // // console.log(this.state.email)
    // // console.log(this.state.username)
    // // console.log(this.state.password)
    axios.post(`/login`,{
      username: this.state.username,
      password: this.state.password
    }).then(res => console.log(res))
    
  };

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <form onSubmit={this.handleSubmit}>
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
          <h3>Login:</h3>
          <form onSubmit={this.handleLoginSubmit}>
            <label htmlFor="email">Enter your email: </label>
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
          <p>{this.state.username}</p><p>{this.state.password}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  
  }
}

export default App;
