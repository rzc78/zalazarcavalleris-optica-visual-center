import * as React from 'react';
import ButtonsSmall from './Buttons/Buttons';
import { useState, useEffect } from "react";


const ItemCount = ({ stock, initial, onAdd }) => {

    let [count, setCount] = useState(parseInt(initial))

    useEffect(() => {
        setCount(parseInt(initial))
    }, [initial])

    //Función incrementadora del Count
    const incrementarContador=()=>{
        setCount(count+1);

    };
    //Función decrementadora del Count
    const decrementarContador=()=>{
        setCount(count-1);

    };

    //Funciones de aumento y disminución de ítems
    // let agregarProducto = () => {
    //     count < cantidadStock ? setCount(++count) : setCount(cantidadStock);
    // }
    // let quitarProducto = () => {
    //     count > 1 ? setCount(--count) : setCount(1);
    // }

    //Función de agregar productos al Carro utilizando el método push, cargando la propiedad al array vacio que está en el context
    // const onAddCarrito = () => {
    //     if (count >= 1) { //¿¿Acá se puede poner una condicional para que diga que no hay el stock requerido?? ||
    //         let cantidadSeleccionada = count;
    //         let idProd = id;
    //         let nombreProd = name;
    //         let descriptionProd = description;
    //         let imgProd = img;
    //         let priceProd = price;
    //         cart.push({ cantidadSeleccionada, idProd, nombreProd, descriptionProd, imgProd, priceProd })

    //         console.log(cart)

    //     } else {
    //         alert("Algo anda mal...")

    //     }
    // }

    //Función para terminar la compra: debe llevar al carro con todos los elementos seleccionados.

    return (
        <span className="conjuntoBotonesItemDetail">
            <div className="ordenButtons">
                <ButtonsSmall disabled={count<=initial}
                    manejador={decrementarContador}
                    value="-"
                />
                <p className="contador">{count}</p>
                <ButtonsSmall disabled={count>=stock}
                    manejador={incrementarContador}
                    value="+"
                />
            </div>
            <div className="botonCart">
                <ButtonsSmall
                    disabled={stock<=0}
                    manejador={()=>onAdd(count)}
                    value="Agregar al carrito"
                />
            </div>
        </span>
    )


}

export default ItemCount;