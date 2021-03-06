import React, { Component } from 'react';
import './css/Crud.css';
import logoCecotec from './img/cecotec-logo.png';
import imgTienda from './img/fondoTienda.jpg';
import usuario from './img/usuario.png';
import botonLista from './img/lista.png';
import sinFoto from './img/sinFoto.jpeg';



class Crud extends Component {
    constructor(props){
        super(props);

        //Producto nuevo en creación, se usa para el formulario de nuevo producto
        this.state = {
            'id': 0,
            'img': sinFoto,
            'nombre': "",
            'marca': "",
            'talla': "",
            'precio': "",
            'categorias': [],    
        }     
    }
    styleSelect = {
        'border-bottom': '2px solid rgb(152, 214, 255)',
        'filter': 'brightness(2)'
      };

    //Cierra y abre menus por nombre
    cambiarPagina(value){ this.props.state.changeState('panel', value) };

    //Abre el menu editar
    editarProducto(producto){
        this.setState({
            'id': producto.id,
            'img':  producto.img,
            'nombre':  producto.nombre,
            'marca':  producto.marca,
            'talla':  producto.talla,
            'precio':  producto.precio,
            'categorias': producto.categorias,
        });
        this.cambiarPagina('newProduct');
    }

     //Cambiar state del padre
     cambiarStatePadre(campo, value){ this.props.state.changeState(campo, value) };

    //Cambia valores de this.state
    cambiarValor(e){ this.setState({ [e.target.name]: e.target.value }) }


    //Añade categorías al this.state
    cambiarCategoria(e){ 
        console.log(">>>>> "+ JSON.stringify(this.state.categorias));
        let newCategoriaArr = this.state.categorias;
        let id = 0;

        //Si tiene la categoría
        if( this.state.categorias.some((obj, i)=>{ id = i; return obj === e.target.name;})){
            
            if(!e.target.checked){
                newCategoriaArr.splice(id,1);
                this.setState({ 'categorias': newCategoriaArr })
            }

        //Si no tiene la categoría
        }else{
            if(e.target.checked){
                newCategoriaArr.push(e.target.name);
                this.setState({ 'categorias': newCategoriaArr })
            }
        }

    }

    //Valida si debe guardar un nuevo producto o si existe uno similar y lo sustituye
    validar(e){
        e.preventDefault();
        let newStoreArr = this.props.state.store;

        //Si no existe
        if(this.props.state.store.some((obj)=>{return obj.nombre === this.state.nombre})===false){

            this.setState({'id':this.props.state.store.length});
            newStoreArr.push(this.state);
            this.cambiarStatePadre('store', newStoreArr);
        
        //Si ya existe
        }else{
            newStoreArr.map((obj, i)=>{
                if(obj.nombre === this.state.nombre){
                    newStoreArr.splice(i,0,this.state);
                    this.cambiarStatePadre('store', newStoreArr);
                }
            })       

                
        }
        this.props.state.changeState('panel', '');
    }

  render() {

    // Api filer para añadir los enlaces de imagenes a los productos
      let subirImagen = (e)=>{

        let archivo = e.target.files[0];
        let lector = new FileReader();

        if(archivo.type.match(/image/)){

            lector.readAsDataURL(archivo);
            lector.addEventListener('load',(e)=>{
                this.setState({
                    'img': e.target.result
                });
            },false);

        }else{ alert("El archivo "+archivo.name+' no es una imagen!'); }
      }

    return (
      <div className="contenedor-crud">
        
        {/* Panel formulario de nuevo producto*/}
        {this.props.state.panel === "newProduct" && 

            <form>
                <div className="fondoCompleto" />

                <section className="section-1-form">
                    <img src={this.state.img}/>
                    <div className="contenedor-archivo">

                        <input type= "file" id="archivo" onChange={subirImagen}/>
                        
                    </div>
                    <p>*Tamaño de imagen recomendada (500px750px).</p>
                </section>

                <section className="section-2-form"> 



                    <h1>Nuevo producto</h1>

                    <input onChange={this.cambiarValor.bind(this)} name="nombre" className="input-form" type='text' placeholder="Nombre" value={this.state.nombre}/>
                    <input onChange={this.cambiarValor.bind(this)} name="marca" className="input-form" type='text' placeholder="Marca" value={this.state.marca}/>
                    <input onChange={this.cambiarValor.bind(this)} name="talla" className="input-form" type='text' placeholder="Talla" value={this.state.talla}/>
                    <input onChange={this.cambiarValor.bind(this)} name="precio" className="input-form" type='number' placeholder="Precio" value={this.state.precio}/>
                    


                    <p>Categorías:</p>

                    <div className="caja-checkbox">
                    {this.props.state.filter.map((filtro, i)=>{ 
                        return ( 
                            <div>
                                <input onClick={this.cambiarCategoria.bind(this)}
                                name={filtro} 
                                checked={ this.state.categorias.some((cat)=>{ return cat === filtro }) }
                                className="checkbox"
                                type="checkbox"/>

                                {filtro.toUpperCase()}
                            </div> 
                            )})}           
                    </div>
                    <div className="botones">
                        <button onClick={()=>this.cambiarPagina('')} className="boton-form">Eliminar</button>
                        <button onClick={this.validar.bind(this)} className="boton-form">Guardar</button>
                    </div>
                </section>
            </form>
        }



        {/* Crud de productos (web)*/}  

        <nav className="nav-superior">
            <img src={usuario}/>
            <a onClick={()=>this.cambiarPagina('login')}>{this.props.state.users[this.props.state.userID].nombre}</a>
        </nav>
        <header>
            <div>
                <img src={logoCecotec} />
                <h2>Panel de gestión de productos</h2>
            </div>
            <nav>
                <a>MAIN</a>
                <a className='main-selected'>PRODUCTOS</a>
                <a>CUENTA</a>
            </nav>
        </header>
        <section>
            <img src={imgTienda} />
            <button id="boton-new-product" 
                onClick={()=>{
                    this.cambiarPagina('newProduct');
                    this.setState({
                        'id': 0,
                        'img': sinFoto,
                        'nombre': "",
                        'marca': "",
                        'talla': "",
                        'precio': "",
                        'categorias': [],    
                    })
                    }}
                className="boton-new">
                Nuevo producto
            </button>

        </section>


        {
            //Categorias
        }

        <nav className="nav-categorias">
            <input type="checkbox" id="boton-categorias"></input>
            <label htmlFor="boton-categorias"><img src={botonLista} /></label>

            <nav className="menu-categorias">
                <ul>
                    <li><a className="enlace-nav">{'CATEGORÍAS'}</a></li>

                    {this.props.state.filter.map((item, i)=>{ 

                        return (
                            <li>
                                <a key={item+i} 
                                onClick ={(e)=>{this.cambiarStatePadre('filterSelected', item)}} 
                                className="enlace-nav"
                                
                                style={item === this.props.state.filterSelected ? this.styleSelect : undefined}>
                                {item.toUpperCase()}
                                </a>
                            </li>
                        ) 
                        })}

                </ul>
            </nav>

        </nav>

        
 
        <main>
            {
                //Fichas de los productos

            this.props.state.store.map((obj,i)=>{
                if(obj.categorias.some((categoria)=>{
                    return categoria === this.props.state.filterSelected || categoria === "Todas" || this.props.state.filterSelected === "Todas";
                })){
                    return(
                    <div className="obj-store">

                        <div className="contenedor-img-producto">
                            <img src={obj.img}/>
                        </div>

                        <div className="cobertura-botones"></div>

                        <button className="boton-1" onClick={(e)=>{
                            this.cambiarStatePadre.bind(this, 'store',this.props.state.store.splice(i,1));
                            this.editarProducto(obj);
                            }}>Editar</button>

                        <button onClick={()=>{
                            this.cambiarStatePadre.bind(this, 'store',this.props.state.store.splice(i,1));
                            this.cambiarPagina();}

                            } className="boton-2">X</button>
                        <div className="linea-datos">
                            <p className="p-marca">{obj.marca === "" ? '*sin marca' : obj.marca}</p> 
                            <p className="p-talla">{obj.talla === "" ? "talla no indicada" : "Talla: "+obj.talla}</p>
                            <p className="p-nombre"> { obj.nombre === "" ? 'Sin nombre' : obj.nombre } </p>
                            <p className="p-precio">{obj.precio === "" ? "0 €" : obj.precio+"€"}</p>
                        </div>

                    </div>
                )}
                }
                
            )}
        </main>    
      </div>
    );
  }
}

export default Crud;
