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
        { this.state.panel === "login" && <this.PanelLogin /> }
      </div>
    );
  }


  PanelLogin(){
    let validate = ()=>{
      var mail = $('#mail').val();
      var pass = $('#pass').val();
    }
    return(
      <form className="panel-login" onSubmit={validate()}>
        <div className="panel-login-1">
          <img className="logoM" src={logoCecotec}/>
          <div className="contenedor-input">
            <img className="icono" src={correo}/>
            <input id="mail" type="email" placeholder="Correo" />
            <p className="mailErr"/>
          </div>
          <div className="contenedor-input">
            <img className="icono" src={candado}/>
            <input id="pass" type="text" placeholder="Contraseña" />
            <p className="passErr"/>
          </div>
          <div className="contenedor-boton">
            <button className="boton-enviar" type="submit">Enviar</button>
            <button className="boton-nuevaCuenta botonSinEstilo">Nueva cuenta</button>
          </div>
        </div>
        <div className="panel-login-2">
          <h1>Bienvenido!</h1>
          <p>Binvenido al panel de gestión de tu Eccomerce. Por favor, introduce tus datos de usuario o crea una nueva cuenta.</p>
        </div>
      </form>
    )
  }
}

export default App;
