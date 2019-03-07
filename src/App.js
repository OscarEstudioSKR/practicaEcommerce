import React, { Component } from 'react';
import './css/App.css';
import Formulario from './Formulario.js';
import Crud from './Crud.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      'panel': "",
      changeState: (campo, valor)=>this.setState({ [campo]: valor }),
      'userID': 0,
      'users': [
        {
          'nombre': 'admin',
          'email': 'admin@gmail.com',
          'pass': '1234',
        }
      ],
      'filter': [
        'Todas',
        'Ropa de hombre',
        'Ropa de mujer',
        'Ropa de niños',
        'Ropa mixta adultos',
        'Ropa de verano',
        'En oferta',
        'Ropa de abrigo',
        'Promocionada'
      ],
      'filterSelected': "Ropa de hombre",
      'store': [],
    }
  }

  render() {
    return (
      <div className="App">

        {console.log("Store: " + JSON.stringify(this.state.store))}

       {(this.state.panel == "login" || this.state.panel == "newUser") && <Formulario state={this.state}/>}
       <Crud state={this.state}/>
      </div>
    );
  }

}

export default App;
