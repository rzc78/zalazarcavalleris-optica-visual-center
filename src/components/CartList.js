
import React from 'react';
import CartContext from './context/CartContext';
import Cart from './Cart'
import { useEffect, useContext } from 'react';

const CartList = () => {

    const {cart} = useContext(CartContext)

    useEffect(() => {
        console.log(cart)
    }, [cart])

    return(
        cart.map((el) =>
        <Cart
            cantidad={el.cantidadSeleccionada}
            name={el.nombreProd}
            description={el.descriptionProd}
            img={el.imgProd}
            price={el.priceProd}
            id={el.idProd}
        />)

    )
}
export default CartList;