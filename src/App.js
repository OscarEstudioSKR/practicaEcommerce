import React, { Component } from 'react';
import './css/App.css';
import logoCecotec from './img/cecotec-logo.png';
import correo from './img/email.png';
import candado from './img/candado.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      'panel': "login",
    }
  }
  render() {
    return (
      <div className="App">
        {
        this.state.panel === "login" &&
          <div className="panel-login">
            <div className="panel-login-1">
              <img className="logoM" src={logoCecotec}/>
              <div>
                <img className="icono" src={correo}/>
                <input placeholder="Correo" />
              </div>
              <div>
                <img className="icono" src={candado}/>
                <input placeholder="Contraseña" />
              </div>
              <button className="boton-nuevaCuenta botonSinEstilo">Nueva cuenta</button>

            </div>
            <div className="panel-login-2">
              <h1>Bienvenido!</h1>
              <p>Binvenido al panel de gestión de tu Eccomerce. Por favor, introduce tus datos de usuario o crea una nueva cuenta.</p>
            </div>

          </div>
        }
      </div>
    );
  }
}

export default App;
