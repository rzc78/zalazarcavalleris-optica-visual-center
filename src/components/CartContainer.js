
import React from 'react';
import CartContext from './context/CartContext';
import CartList from './CartList'
import { useState, useEffect, useContext } from 'react';

const CartContainer = () => {

    const [totalProductos, setTotalProductos] = useState(0)
    const { cart, clearCart } = useContext(CartContext)

    useEffect(() => {
        setTotalProductos(cart.reduce((acc, item) => {
            return acc += item.priceProd * item.cantidadSeleccionada
        }, 0));
    }, [cart]);

    console.log("suma", totalProductos)

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Detalle</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Quitar del carrito</th>
                    </tr>
                </thead>
                <tbody>
                    <CartList />
                </tbody>
                <thead>
                    <tr>
                        <th scope="col">Total:</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">${totalProductos}</th>

                    </tr>
                </thead>
            </table>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <button>Finalizar Compra</button>

        </div>



    )

}
export default CartContainer;