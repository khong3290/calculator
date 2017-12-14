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
      inputtwoValue: 0,
      resultValue: 0,
    }
  }
  handleClick = event => {
      this.setState({inputValue: event.target.innerText})
      
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Kevin's Calculator</h1>
        </header>
        <p>
          {this.state.inputValue}
        </p>
          <Button raised color='primary' onClick={this.handleClick}> 7 </Button>
          <Button raised color='primary' onClick={this.handleClick} id= 'eight'> 8 </Button>
          <Button raised color='primary' onClick={this.handleClick} id= 'nine'> 9 </Button>
        <br />
          <Button raised color='primary' onClick={this.handleClick} id='four'> 4 </Button>
          <Button raised color='primary' onClick={this.handleClick} id='five'> 5 </Button>
          <Button raised color='primary' onClick={this.handleClick} id='six'> 6 </Button>
        <br />
          <Button raised color='primary' onClick={this.handleClick} id='one'> 1 </Button>
          <Button raised color='primary' onClick={this.handleClick} id='two'> 2 </Button>
          <Button raised color='primary' onClick={this.handleClick} id='three'> 3 </Button>
        <br />
          <Button raised color='primary' onClick={this.handleClick} id='plus'> + </Button>
          <Button raised color='primary' onClick={this.handleClick} id='cero'> 0 </Button>
          <Button raised color='primary' onClick={this.handleClick} id='equals'> = </Button>

      </div>
    );
  }
  
}

export default App;
