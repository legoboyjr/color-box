import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      boxColor: 'white',
      selectedColor: '#ffff00'
    };
    this.onColorSelect = this.onColorSelect.bind(this);
  }
  onColorSelect(event) {
    console.log(this)
    this.setState({
      selectedColor: event.target.value
    });
  }
  render() {
    return (
      <div className="App-container">
        <header className="App-header">
          <h1 className="title">Color Box</h1>
        </header>
        <main className="App-main">
          <div className="box"></div>
          <input type="color" 
            value={this.state.selectedColor} 
            onChange={this.onColorSelect} 
            className="color-selector" />
        </main>
        <footer className="App-footer">
          <p>Made by me!</p>
        </footer>
      </div>
    );
  }
}

export default App;
