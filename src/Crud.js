import React, { Component } from 'react';
import './css/Crud.css';
import logoCecotec from './img/cecotec-logo.png';
import imgTienda from './img/fondoTienda.jpg';
import usuario from './img/usuario.png';
import sinImagen from './img/sinImagen.png';



class Crud extends Component {
    constructor(props){
        super(props);
    }

  render() {
    let cambiarPagina = (value)=> this.props.state.changeState('panel', value);

    return (
      <div className="contenedor-crud">
        {this.props.state.panel === "newProduct" && <this.NewProduct state={this.props.state}/>}
            
        <nav>
            <img src={usuario}/>
            <a onClick={()=>cambiarPagina('login')}>{this.props.state.users[this.props.state.userID].nombre}</a>
        </nav>
        <header>
            <div>
                <img src={logoCecotec} />
                <h2>Panel de gestión de productos</h2>
            </div>
            <nav>
                {this.props.state.filter.map((item)=>{ return <a className="enlace-nav">{item.toUpperCase()}</a> })}
                <a >NUEVA CATERGORÍA</a>
            </nav>
        </header>
        <div>
            <img src={imgTienda} />
            <button id="boton-new-product" onClick={()=>cambiarPagina('newProduct')} className="boton-new">Nuevo producto</button>
        </div>
        
      </div>
    );
  }

  NewProduct(event){
      return(
          <form>
            <section className="section-1-form">
                <img src={sinImagen}/>
                <button>Subir imagen</button>
                <p>*Tamaño de imagen recomendada (500px750px).</p>
            </section>
            <section className="section-2-form"> 
                <h1>Nuevo producto</h1>
                <input placeholder="Nombre"/>
                <input placeholder="Descripción"/>
                <input placeholder="Precio"/>
                <div className="botones">
                  <button className="boton-form">Descartar</button>
                  <button className="boton-form">Guardar</button>
                </div>
            </section>
          </form>
      )
  }

}

export default Crud;
