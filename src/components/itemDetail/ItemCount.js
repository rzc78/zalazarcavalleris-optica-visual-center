import * as React from 'react';
import ButtonsSmall from '../Buttons/Buttons';
import { useState, useEffect } from "react";


const ItemCount = ({ stock, initial, onAdd }) => {

    let [count, setCount] = useState(parseInt(initial))

    //Al montaje inicial, siempre se carga el valor inicial del contador en 1
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