import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="title">Color Box</h1>
        </header>
        <main className="App-main">
          <div className="box"></div>
          <input type="color" value="#ff0000" className="color-selector" />
        </main>
        <footer className="App-footer">
          <p>Made by me!</p>
        </footer>
      </div>
    );
  }
}

export default App;
