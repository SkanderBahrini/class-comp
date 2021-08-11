import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from '@testing-library/react';

class App extends React.Component {
   state ={

     fullname:"messi",
     bio:"football",
     professsion:"barca",
     imgsrc:"",

     boul:false

    };
       handleclick=()=>{
         this.setState({boul : true})
   this.setState({bio:"khadem"})}

 
  render(){

      return (
    <div className="App">

   {  this.state.boul && <div> {this.state.bio} and {this.state.profession} and { this.state.imgsrc} </div> }
      
     <buton onClick={this.handleclick()}> click me {setInterval(alert('change time'))} </buton>

    </div>
  );
  }
  
      
   
  
}

export default App;
