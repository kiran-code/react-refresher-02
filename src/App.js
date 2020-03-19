import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidataionComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    inputEntered: ''
  }

  inputChangedHandler = (event) => {
    this.setState({inputEntered: event.target.value});
    // console.log('event input changed',event.target.value);
  }

  deleteCharComponentHandler = (index) => {
    console.log('index', index);
    const charArray = this.state.inputEntered.split('');

    charArray[index] = '';

    const updatedString = charArray.join('');

    this.setState({inputEntered: updatedString});
  }

  render(){
    const charArray = this.state.inputEntered.split('');
    
    let charComponents = null;

    if(charArray.length > 0){
      charComponents = (
        <div>
          {
            charArray.map((char, index) => {
              return <CharComponent 
                          character={char} 
                          key={index}
                          click={this.deleteCharComponentHandler.bind(this,index)}
                          />
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <h1>This is a React APP</h1>
        <input type="text" onChange={(event) => this.inputChangedHandler(event)} value={this.state.inputEntered}/>
        <ValidationComponent name={this.state.inputEntered}></ValidationComponent>
        {charComponents}
      </div>
    );
  }
}

export default App;
