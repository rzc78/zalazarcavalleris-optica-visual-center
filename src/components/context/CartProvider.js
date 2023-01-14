import { useState } from 'react';
import CartContext from './CartContext';
import Checkout from '../checkout/Checkout';

//Importación de libreria de Toastify para notificaciones push
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CartProvider = ({ children }) => {

    //Variable de estado para el guardado de los productos en el carrito. 
    const [cart, setCart] = useState([])

    //Configuración de emisores de notificación de toastify VACIAR CARRITO
    const notifyClear = () => toast.info('Has vaciado el carrito. No tienes ningún producto', {
        position: "top-center", autoClose: 3000, hideProgressBar: true, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored",
    });

    //Configuración de emisores de notificación de toastify PRODUCTO ELIMINADO
    const notifyDelete = () => toast.error('Producto Eliminado', {
        position: "top-center", autoClose: 3000, hideProgressBar: true, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored",
    });

    //Función para agregar producto al carrito. En caso de repetir compra de un item y agregarlo, no se reemplaza el objeto con la nueva cantidad, sino que se suma a la anterior mediante búsqueda por id.
    const agregarProducto = (item, nuevaCantidad) => {
        //Busca el producto por id y si no lo encuentra devuelve un objeto vacío.
        const { cantidad = 0 } = cart.find(producto => producto.id === item.id) || {};
        const newCart = cart.filter(producto => producto.id !== item.id);
        //Seteo del carrito con la nueva cantidad mediante spread operator
        setCart([...newCart, { ...item, cantidad: cantidad + nuevaCantidad }])

    };

    //Función para sumar el precio de todos los productos agregados al carrito.
    const calcularPrecioTotal = () => {
        return cart.reduce((acum, item) => acum += item.price * item.cantidad, 0)
    };

    //Función para mostrar la cantidad de productos agregados (se muestra en el componente CartWidget)
    const contadorProductos = () => {
        return cart.reduce((acum, item) => acum += item.cantidad, 0)

    };

    //Función para borrar el carrito. Se setea con un array vacío.
    const clearCart = () => {
        setCart([])
        notifyClear();

    };

    //Función para borrar el carrito al final de la compra
    const clearCartCheckOut = () => {
        setCart([])
    };

    //Función para eliminar productos del carrito. Dejamos pasar todos los productos que no tengan el ID que viene por parámetro y seteamos el cart con un nuevo array filtrado.
    const deleteProduct = (id) => {
        setCart(cart.filter(product => product.id !== id))
        notifyDelete()

    }

    //Función para mapear el cart e imprimirlo en el componente CheckOut donde se pasan los valores mediante props
    const mapeoCheckout = () => {
        return (
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
        <CartContext.Provider value={{ cart, mapeoCheckout, clearCart, deleteProduct, agregarProducto, calcularPrecioTotal, contadorProductos, clearCartCheckOut }}>
            {children}
            <ToastContainer />
        </CartContext.Provider>
    )

}

export default CartProvider;