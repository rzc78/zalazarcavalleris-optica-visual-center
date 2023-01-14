
import React from 'react';
import CartContext from '../context/CartContext';
import CartList from './CartList'
import './cart.css'
import cartVacio from '../../assets/images/las-compras-en-linea.png';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartContainer = () => {

    const { cart, clearCart, calcularPrecioTotal } = useContext(CartContext);

    //Condicional para que renderice mensaje si el carrito está vacío, o de lo contrario que muestre el componente CartList con los productos.
    if (cart.length === 0) {
        return (
            <div className="text-container">
                <img className="imgCartVacio" src={cartVacio} alt="carrito vacio"></img>
                <h3>NO HAY ELEMENTOS EN EL CARRITO, VAMOS A COMPRAR!</h3>
                <Link to='/category/:id' className="btn btn-primary btn-lg">Ir a la tienda</Link>
            </div>
        );
    } else {
        return (
            <div className="centradoCartContainer">
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
                <div className="button-center">
                    <button className="btn btn-secondary btn-md" onClick={clearCart}>Vaciar Carrito</button>
                    <Link className="btn btn-secondary btn-md" to='/auth'>Finalizar Compra</Link>
                </div>
            </div>
        )
    }
}

export default CartContainer;