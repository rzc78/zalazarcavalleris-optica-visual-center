import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './GrupoItemDetail.css'
import CartContext from '../context/CartContext';
import ItemCount from './ItemCount'

//Importación de libreria de Toastify para notificaciones push
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ producto }) => {

    //Variable que almacena un booleano false como default. Si se agrega el producto, OnAdd llama a la función y la setea a true, por lo que se reemplaza agregar al carrito en pantalla por "terminar compra". 
    const [irAlCarrito, setIrAlCarrito] = useState(false);

    //Llamada a la función agregar producto traída desde el CartContext
    const { agregarProducto } = useContext(CartContext);

    //Configuración de emisor de notificación de toastify
    const notify = () => toast.success('Producto agregado!', { position: "top-center", autoClose: 3000, hideProgressBar: true, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored",
        });;

    //Función onAdd trae desde el item count la cantidad elegida, que se agrega a la información de producto para pasarla por parámetros a la función agregarProducto del CartContext
    const onAdd = (cantidad) => {
        setIrAlCarrito(true)
        //Se manda por parámetros producto y cantidad a la función "agregar producto" del CartContext
        agregarProducto(producto, cantidad)
        notify()
         
    }

    return (
        <div className="card mb-3 grupoDetail" style={null}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={producto?.img} className="img-fluid rounded-start imgPos" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body body">
                        <h5 className="card-title titleDetail">{producto?.name}</h5>
                        <p className="card-text">
                            Detalles: {producto?.description}
                        </p>
                        <p className="card-text textPrice">$ {producto?.price}
                        </p>
                        <small className="text-muted"> El precio expresado es para consumidor final, IVA incluído</small>
                    </div>
                    <span className="btn-cart-seguir">
                        {irAlCarrito ? <div><Link to='/cart' className="botonCart">Ver Carrito</Link> <Link to='/category/:id' className="botonCart">Seguir Comprando</Link></div> : <ItemCount stock={producto?.stock} initial={1} onAdd={onAdd} />}
                    </span>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
    }


export default ItemDetail