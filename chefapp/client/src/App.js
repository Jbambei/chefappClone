import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

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
  }
  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    // event.preventDefault();
    // fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
    // .then(response => response.json())
    // .then(state => this.setState(state));

    event.preventDefault();

    const body = JSON.stringify({
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    })

    fetch(`/register`, {
      method: 'POST',
      body: body
    })
    console.log(body)
    console.log(this.state.email)
    console.log(this.state.username)
    console.log(this.state.password)

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
          <p>{this.state.username}</p>
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
