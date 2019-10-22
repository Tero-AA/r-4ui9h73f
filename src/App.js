import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.updateText = this.updateText.bind(this)

    this.state = {
      text: ""
    }
  }


  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.updateText} />
        <p className="repeater">{this.state.text}</p>
      </div>
    );
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    })
  }
}

export default App;
