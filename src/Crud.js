import React, { Component } from 'react';
import './css/Crud.css';
import logoCecotec from './img/cecotec-logo.png';



class Crud extends Component {

  render() {
    return (
      <div className="contenedor-crud">
        <header>
            <img src={logoCecotec} />
            <nav>

            </nav>
        </header>
      </div>
    );
  }

}

export default Crud;
