import React, { Component } from 'react';
import './App.css';
import MainPage from './containers/mainPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to NaviStock!</h1>
          <MainPage/>
        </header>
      </div>
    );
  }
}

export default App;
