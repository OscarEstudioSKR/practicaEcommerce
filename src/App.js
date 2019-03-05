import React, { Component } from 'react';
import $ from 'jquery';
import './css/App.css';
import logoCecotec from './img/cecotec-logo.png';
import correo from './img/email.png';
import candado from './img/candado.png';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      'panel': "login",
      changeState: (campo, valor)=>this.setState({ [campo]: valor }),
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
        { this.state.panel === "login" && <this.PanelLogin state={this.state}/> }
      </div>
    );
  }


  PanelLogin(event){

    let validate = (e)=>{
      e.preventDefault();
      event.state.users.map((user)=>{
        if(user.email === $('#mail').val() && user.pass === $('#pass').val()){

          $('#mailErr').html('');
          $('#passErr').html('');
          event.state.changeState('panel', '');

        }else{
          user.email != $('#mail').val() && $('#mailErr').html('Correo no encontrado');
          user.pass != $('#pass').val() && $('#passErr').html('Contraseña incorrecta');
        }
      });
    }

    return(
      <form className="panel-login" onSubmit={validate}>
        <div className="panel-login-1">
          <img className="logoM" src={logoCecotec}/>
          <div className="contenedor-input">
            <img className="icono" src={correo}/>
            <input id="mail" type="email" placeholder="Correo" />          
          </div>
          <span id="mailErr"/>
          <div className="contenedor-input">
            <img className="icono" src={candado}/>
            <input id="pass" type="text" placeholder="Contraseña" />
          </div>
          <span id="passErr"/>
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
