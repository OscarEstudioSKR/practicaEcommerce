import React, { Component } from 'react';
import './css/App.css';
import logoCecotec from './img/cecotec-logo.png';
import Formulario from './Formulario.js';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      'panel': "login",
      changeState: (campo, valor)=>this.setState({ [campo]: valor }),
      'userID': "",
      'users': [
        {
          'nombre': 'admin',
          'email': 'admin@gmail.com',
          'pass': '1234',
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
       <Formulario state={this.state}/>
      </div>
    );
  }

}

export default App;
