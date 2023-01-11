import { useState } from 'react';
import CartContext from './CartContext';
import Checkout from '../checkout/Checkout';

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    //Función para agregar producto al carrito. En caso de repetir compra de un item y agregarlo, no se reemplaza el objeto con la nueva cantidad, sino que se suma a la anterior.
    const agregarProducto = (item, nuevaCantidad) => {
        const { cantidad = 0 } = cart.find(producto => producto.id === item.id) || {};
        const newCart = cart.filter(producto => producto.id !== item.id);
        setCart([...newCart, { ...item, cantidad: cantidad + nuevaCantidad }])
        
    };

    console.log("que carga", cart)

    //Función para sumar el precio de todos los productos agregados al carrito.
    const calcularPrecioTotal = () => {
        return cart.reduce((acum, item) => acum += item.price * item.cantidad, 0)
    };

    //Función para mostrar la cantidad de productos agregados (se muestra en el componente CartWidget)
    const contadorProductos = () => {
        return cart.reduce((acum, item) => acum += item.cantidad, 0)

    };

    //Función para borrar el carrito. Se setea con un array vacío.
    const clearCart = () => setCart([]);

    //Función para evitar duplicados con método Find. 
    // const isInCart = (id) => cart.find(product => product.id === id) ? true : false

    //Función para eliminar productos del carrito. Dejamos pasar todos los productos que no tengan el ID que viene por parámetro y seteamos el cart con un nuevo array filtrado.
    const deleteProduct = (id) => {
        setCart(cart.filter(product => product.id !== id))

    }

    const mapeoCheckout=()=>{
        return(
            cart.map((el) =>
                <Checkout
                    cantidad={el.cantidad}
                    name={el.name}
                    description={el.description}
                    price={el.price}
                />)
        )
    }

    return (
        <CartContext.Provider value={{ cart, mapeoCheckout, clearCart, deleteProduct, agregarProducto, calcularPrecioTotal, contadorProductos }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;