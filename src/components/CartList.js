
import React from 'react';
import CartContext from './context/CartContext';
import Cart from './Cart'
import { useContext } from 'react';

const CartList = () => {

    const { cart } = useContext(CartContext)

    return (
        cart.map((el) =>
            <Cart
                cantidad={el.cantidad}
                name={el.name}
                description={el.description}
                img={el.img}
                price={el.price}
                id={el.id}
            />)
    )
}

export default CartList;