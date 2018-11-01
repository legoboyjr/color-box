import React, { Component } from 'react';
import { HuePicker } from 'react-color';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      boxColor: 'white',
      selectedColor: '#ffff00'
    };
    this.onColorSelect = this.onColorSelect.bind(this);
    this.changeBackground = this.changeBackground.bind(this);
  }
  onColorSelect(color, event) {
    this.setState({
      selectedColor: color.hex
    });
  }

  changeBackground(event) {
    this.setState({
      boxColor: this.state.selectedColor
    });
  }
  render() {
    const boxStyles = {
      backgroundColor: this.state.boxColor
    }
    return (
      <div className="App-container">
        <header className="App-header">
          <h1 className="title">Color Box</h1>
        </header>
        <main className="App-main">
          <div className="box" onClick={this.changeBackground} style={boxStyles}></div>
          <HuePicker onChange={this.onColorSelect} color={this.state.selectedColor} /> 
        </main>
        <footer className="App-footer">
          <p>Made by me!</p>
        </footer>
      </div>
    );
  }
}

export default App;
