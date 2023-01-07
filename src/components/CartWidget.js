import carrito from '../assets/images/iconocarrito.png';
// import CartContext from './context/CartContext';
// import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';

const CartWidget = () => {
    //Contador de productos para el CartWidget: se actualiza ante cada cambio del CART

    // useEffect(() => {
    //     setContadorCart(cart.reduce((acc, item)=>{
    //         return acc += item.cantidadSeleccionada
    //     },0))
    // }, [cart]);

    // console.log("cantidad items", contadorCart)

    return (
        <div className='carrito'>
            <p>{1}</p>
            <Link to={"/cart"}>
                <img className='cart' src={carrito} alt="logocarrito" />
            </Link>

        </div>
    )
}

export default CartWidget;