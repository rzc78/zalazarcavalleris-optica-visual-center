import carrito from '../../assets/images/iconocarrito.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import './grupoNavBar.css';

const CartWidget = () => {
    //Se importa del context la función para contar la cantidad de productos agregados al carrito y se llama directamente dentro del renderizado. El contador cuenta cantidades sin importar si son del mismo producto. Siemre se actualiza.
    const { contadorProductos } = useContext(CartContext);

    return (
        <div className='carrito'>
                <p className="cartNumber">{contadorProductos()}</p>
            <Link to={"/cart"}>
                <img className='cart' src={carrito} alt="logocarrito" />
            </Link>

        </div>
    )
}

export default CartWidget;