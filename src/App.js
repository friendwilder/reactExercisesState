import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
let numQuestions = 0;
let numCorrect = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State',
      numQuestions: numQuestions,
      numCorrect: numCorrect
    };
    this.handleTrueClick = this.handleTrueClick.bind(this);
    this.handleFalseClick = this.handleFalseClick.bind(this);

  }
  handleTrueClick() {
    if (value1 + value2 + value3 === proposedAnswer) {
    	numCorrect += 1;
		numQuestions += 1;
    	this.setState({
      		name: "React Rocks!",
      		numQuestions: numQuestions,
      		numCorrect: numCorrect
    	})      
    } else {
		numQuestions += 1;
    	this.setState({
      		name: "React Rocks!",
      		numQuestions: numQuestions
    	})
  	}  
  }

  handleFalseClick() {
    if (value1 + value2 + value3 !== proposedAnswer) {
    	numCorrect += 1;
		numQuestions += 1;
    	this.setState({
      		name: "React Rocks!",
      		numQuestions: numQuestions,
      		numCorrect: numCorrect
    	})      
    } else {
		numQuestions += 1;
    	this.setState({
      		name: "React Rocks!",
      		numQuestions: numQuestions
    	})
  	}  
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
		  <p>{this.state.name}</p>	
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={this.handleTrueClick}>True</button>
          <button onClick={this.handleFalseClick}>False</button>
		  
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
