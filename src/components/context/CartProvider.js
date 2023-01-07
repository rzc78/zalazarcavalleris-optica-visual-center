import { useState } from 'react';
import CartContext from './CartContext';


const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])


    //Función para borrar el carrito. Se setea con un array vacío.
    const clearCart = () => setCart([]);

    //Función para evitar duplicados con método Find. 
    const isInCart = (id) => cart.find(product=>product.idProd===id)? true: false

    
    //Función para eliminar productos del carrito. Dejamos pasar todos los productos que no tengan el ID que viene por parámetro y seteamos el cart con un nuevo array filtrado.
    const deleteProduct = (id) => {
        setCart(cart.filter(product => product.idProd !== id))
        // console.log("sdasdsa", id)
    }

    return (
        <CartContext.Provider value={{cart, clearCart, deleteProduct, isInCart}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;