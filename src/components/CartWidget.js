import carrito from '../assets/images/iconocarrito.png';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from './context/CartContext';

const CartWidget = () => {
    //Se importa del context la función para contar la cantidad de productos agregados al carrito
    const { contadorProductos } = useContext(CartContext);


    return (
        <div className='carrito'>
            <p>{contadorProductos()}</p>
            <Link to={"/cart"}>
                <img className='cart' src={carrito} alt="logocarrito" />
            </Link>

        </div>
    )
}

export default CartWidget;