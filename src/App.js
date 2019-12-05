import React, {Component} from 'react';


import './App.css';
import Userinput from './usercontent/UserInput'
import Useroutput from './usercontent/UserOutput'



class App extends Component {
  state ={
    person: {name: "Mizanur"}
  }
  evenhandler=(event)=>{
    this.setState ({
      person: {name: event.target.value}
    })
  };


  render(){
  return (
    <div className="App">
      <Userinput event={this.evenhandler} username={this.state.person.name}></Userinput>
      
      <Useroutput username={this.state.person.name}>this is</Useroutput>
      <Useroutput username={this.state.person.name}>this is</Useroutput>
    </div>
    
  );
  }
}

export default App;
