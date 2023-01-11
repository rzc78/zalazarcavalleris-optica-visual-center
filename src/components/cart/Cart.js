
import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const Cart = ({ cantidad, name, description, img, price, id }) => {

    //Importaciones desde CartContext: función de eliminar producto
    const { deleteProduct } = useContext(CartContext);

    // isInCart(id)

    return (
        <tr>
            <th scope="row">{cantidad}</th>
            <td>{name}</td>
            <td>{description}</td>
            <td>{price}</td>
            <td><button onClick={() => deleteProduct(id)}>Eliminar</button></td>
        </tr>

    )

}

export default Cart;