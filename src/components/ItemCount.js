import * as React from 'react';
import ButtonsSmall from './Buttons/Buttons';
import CartContext from './context/CartContext';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";


const ItemCount = ({ stock, initial, description, img, name, price, id }) => {

    let [count, setCount] = useState(initial)
    let [cantidadStock, setCantidadStock] = useState(stock)


    //Uso de CartContext: variable cart para mantener la compra en la navegación.
    const {cart} = useContext (CartContext)

    useEffect(() => {
        setCantidadStock(stock)
    }, [stock])

    //Funciones de aumento y disminución de ítems
    let agregarProducto = () => {
        count < cantidadStock ? setCount(++count) : setCount(cantidadStock);
    }
    let quitarProducto = () => {
        count > 1 ? setCount(--count) : setCount(1);
    }

    //Función de agregar productos al Carro utilizando el método push, cargando la propiedad al array vacio que está en el context
    const onAddCarrito = () => {
        if (count >= 1) { //¿¿Acá se puede poner una condicional para que diga que no hay el stock requerido?? ||
            let cantidadSeleccionada = count;
            let idProd = id;
            let nombreProd = name;
            let descriptionProd = description;
            let imgProd = img;
            let priceProd = price;
            cart.push({ cantidadSeleccionada, idProd, nombreProd, descriptionProd, imgProd, priceProd })

            console.log(cart)

        } else {
            alert("Algo anda mal...")

        }
    }

    //Función para terminar la compra: debe llevar al carro con todos los elementos seleccionados.

    const terminarCompra = () => {<Link to={"/Cart"}></Link>}

    return (
        <span className="conjuntoBotonesItemDetail">
            <div className="ordenButtons">
                <ButtonsSmall
                    manejador={quitarProducto}
                    value="-"
                />
                <p className="contador">{count}</p>
                <ButtonsSmall
                    manejador={agregarProducto}
                    value="+"
                />
            </div>
            <div className="botonCart">
                <ButtonsSmall
                    manejador={onAddCarrito}
                    value="Agregar al carrito"
                />
            </div>
            <div className="botonCart">
                <ButtonsSmall
                    manejador={terminarCompra}
                    value="Terminar Compra"
                />
            </div>
        </span>
    )


}

export default ItemCount;