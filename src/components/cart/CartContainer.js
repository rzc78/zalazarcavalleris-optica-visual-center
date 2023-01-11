
import React from 'react';
import CartContext from '../context/CartContext';
import CartList from './CartList'
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartContainer = () => {

    const { cart, clearCart, calcularPrecioTotal } = useContext(CartContext);

    //Condicional para que renderice mensaje si el carrito está vacío, o de lo contrario que muestre el componente CartList con los productos.

    if (cart.length === 0) {
        return (
            <div>
                <h1>NO HAY ELEMENTOS EN EL CARRITO, VAMOS A COMPRAR!</h1>
                <Link to='/'>Ir a la tienda</Link>
            </div>
        );
    } else {
        return (
            <div>
                <table className="table">
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
                            <th scope="col">${calcularPrecioTotal()}</th>

                        </tr>
                    </thead>
                </table>
                <button onClick={clearCart}>Vaciar Carrito</button>
                <Link to='/checkout'>Finalizar Compra</Link>
            </div>
        )
    }
}
export default CartContainer;