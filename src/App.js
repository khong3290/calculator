import React, { Component } from 'react';
import './App.css';
import Button from 'material-ui/Button';


class App extends Component {
  // To Create Calculator App, First we need to have numbers in a specific order
  // Each number should correspond to a specific number
  // Creating Number Buttons
  // Enabling keyboard to enter numbers
  // Recalling numbers that are entered into calculator


  constructor(props) {
    super(props)

    this.state = {
      inputValue: 0,
      resultValue: 0,

      // this.handleClick = this.handleClick.bind(this);

    }
  }

    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Kevin's Calculator</h1>
          </header>
          <p className="App-intro">
            <h2>
              {this.state.inputValue}
              
            </h2>

          </p>
          <Button raised color='primary' onClick={this.inputValue} id='inputValue == 7'> 7 </Button>
          <Button raised color='primary' handleClick={this.handleClick} type='input'>8 </Button>
          <Button raised color='primary' handleClick={this.handleClick} type='input'>9 </Button>
          <br />
          <Button raised color='primary' handleClick={this.handleClick} type='input'>4 </Button>
          <Button raised color='primary' handleClick={this.handleClick} type='input'>5 </Button>
          <Button raised color='primary' handleClick={this.handleClick} type='input'>6 </Button>
          <br />
          <Button raised color='primary' handleClick={this.handleClick} type='input'>1 </Button>
          <Button raised color='primary' handleClick={this.handleClick} type='input'>2</Button>
          <Button raised color='primary' handleClick={this.handleClick} type='input'>3 </Button>
          <br />
          <Button raised color='primary' handleClick={this.handleClick} type='action'>+ </Button>
          <Button raised color='primary' handleClick={this.handleClick} type='input'>0 </Button>
          <Button raised color='primary' handleClick={this.handleClick} type='action'>= </Button>

        </div>
      );
    }
  
}

export default App;
