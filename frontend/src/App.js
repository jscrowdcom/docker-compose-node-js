import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { users: [] }
  }

  async componentDidMount() {
    const response = await fetch(`${process.env.REACT_APP_API_HOST}/users`)
    const users = await response.json()

    this.setState({ users })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {this.state.users.map(user => <p key={user.id}>{JSON.stringify(user)}</p>)}
      </div>
    );
  }
}

export default App;
