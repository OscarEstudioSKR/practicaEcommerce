import React, { Component } from 'react';
import $ from 'jquery';
import './css/Formulario.css';
import logoCecotec from './img/cecotec-logo.png';
import correo from './img/email.png';
import candado from './img/candado.png';
import usuarios from './img/usuarios.png';


class Formulario extends Component {

  render() {
    return (
      <div className="back">
        { this.props.state.panel === "login" && <this.PanelLogin state={this.props.state}/> }
        { this.props.state.panel === "newUser" && <this.NewUser state={this.props.state}/> }
      </div>
    );
  }


  PanelLogin(event){

    let cambiarPagina = ()=> event.state.changeState('panel', 'newUser');
    let validate = (e)=>{
      $('#mailErr').html('');
      $('#passErr').html('');
      e.preventDefault();
        
    if( event.state.users.some( ( user )=>{ return user.email === $( '#mail' ).val() }) === true){
        event.state.users.map((user, i)=>{      
            if(user.email === $('#mail').val() && user.pass === $('#pass').val()){
    
                event.state.changeState('userID', i);
                event.state.changeState('panel', '');
    
            }else{$('#passErr').html('Contraseña incorrecta');}                       
          });
    }else{$('#mailErr').html('Correo no encontrado')}


    }

    return(
      
      <form className="panel-login" onSubmit={validate}>
        <div className="panel-login-1">
          <img className="logoM" src={logoCecotec}/>
          <div className="contenedor-input">
            <img className="icono" src={correo}/>
            <input id="mail" type="email" placeholder="Correo" />          
          </div>
          <span id="mailErr" className="fallo"/>
          <div className="contenedor-input">
            <img className="icono" src={candado}/>
            <input id="pass" type="password" placeholder="Contraseña" />
          </div>
          <span id="passErr" className="fallo"/>
          <div className="contenedor-boton">
            <button className="boton-enviar" type="submit" >Enviar</button>
            <input className="boton-nuevaCuenta botonSinEstilo" onClick={cambiarPagina} defaultValue="Nueva cuenta"/>
          </div>
        </div>
        <div className="panel-login-2-3">
          <h1>Bienvenido!</h1>
          <p className="descripcion-text">Bienvenido al panel de gestión de tu Eccomerce. Por favor, introduce tus datos de usuario o crea una nueva cuenta.</p>
        </div>
      </form>
    )
  }
  NewUser(event){

    let cambiarPagina = ()=> event.state.changeState('panel', 'login');

    let validate = (e)=>{
      e.preventDefault();
      $('#newMailErr').html('');
      $('#newNameErr').html('');
      $('#newPassErr').html('');

      //Validación
      $('#newMail').val()
      if ( /^\w+@\w+\.([a-zA-Z]{2,})+$/.test( $('#newMail').val() )){
        if(/\w{3,}/.test( $('#newName').val())){
          if(/\w{4,}/.test( $('#newPass').val())){

            event.state.users.push({
              'nombre': $('#newName').val(),
              'email': $('#newMail').val(),
              'pass': $('#newPass').val(),
            });
            cambiarPagina();

          } else{ $('#newPassErr').html('La contraseña tiene que ser más larga'); }
        } else{ $('#newNameErr').html('Nombre demasiado corto'); }
      } else{ $('#newMailErr').html('El correo no es válido'); }
    }

    
    return(
      <form className="panel-login" onSubmit={validate}>
        <div className="panel-login-2-3">
          <h1>Nuevo usuario</h1>
          <p className="descripcion-text">Completa los campos para crear una nueva cuenta y poder disfrutar de nuestros servicios</p>
        </div>
        <div className="panel-login-4">
          <img className="logoM" src={logoCecotec}/>
          <div className="contenedor-input">
            <img className="icono" src={correo}/>
            <input id="newMail" type="email" placeholder="Correo" />          
          </div>
          <span id="newMailErr" className="fallo"/>
          <div className="contenedor-input">
            <img className="icono" src={usuarios}/>
            <input id="newName" type="text" placeholder="Nombre" />          
          </div>
          <span id="newNameErr" className="fallo"/>
          <div className="contenedor-input">
            <img className="icono" src={candado}/>
            <input id="newPass" type="password" placeholder="Contraseña" />          
          </div>
          <span id="newPassErr" className="fallo"/>
          <div className="contenedor-boton">
            <button className="boton-enviar" type="submit" >Registrar</button>
            <input className="boton-nuevaCuenta botonSinEstilo" onClick={cambiarPagina} defaultValue="Login"/>
          </div>
              
        </div>
      </form>
    )
    
  }
}

export default Formulario;
