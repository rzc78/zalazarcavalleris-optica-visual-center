import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import CartContext from '../context/CartContext';
import AuthContext from '../context/AuthContext';
import './checkout.css';

//Importación de libreria de Toastify para notificaciones push
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckoutContainer = () => {

    const { cart, mapeoCheckout, contadorProductos, calcularPrecioTotal, clearCartCheckOut } = useContext(CartContext);
    const { usuario, setIdOrder } = useContext(AuthContext);

    //Configuración de emisores de notificación de toastify VACIAR CARRITO
    const notifyThanks = () => toast.success('¡Gracias por tu compra!', {
        position: "top-center", autoClose: 3000, hideProgressBar: true, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored",
    });

    //Constructor de fecha y dia de compra mediante DATE
    const dateActual = new Date().toLocaleString()


    //Array para cargar los datos del comprador y los productos elegidos. Se mapean los arrays con el método map y se cargan a la orden que se enviará por firestore a la colección orders, donde se genera un nuevo documento por cada compra.
    const ordenCompra = {
        fecha: dateActual,
        cliente: usuario.map(item => ({ name: item.name, email: item.mail, telefono: item.phone, direccion: item.direccion, ciudad: item.ciudad })),
        items: cart.map(producto => ({ id: producto.id, producto: producto.name, precio: producto.price, cantidad: producto.cantidad })),
        precioTotal: calcularPrecioTotal(),

    }

    //Función manejadora de evento de compra. Realiza el envío de datos a Firestore Database y como response trae el id autogenerado de el nuevo documento con el pedido. Finalmente realiza la limpieza del Cart llamando a la función correspondiente.
    const handleCompra = () => {
        const dataCompra = getFirestore();
        const ordenCollection = collection(dataCompra, 'orders');
        addDoc(ordenCollection, ordenCompra)
            .then(({ id }) => setIdOrder(id))
        clearCartCheckOut()
        notifyThanks()

    }

    return (
        <div>
            <div className="checkout-container">
                <h2 className="textCenter">Estás a punto de generar una orden de compra por: {contadorProductos()} items</h2>
                <div>
                    {mapeoCheckout()}
                </div>
                <div className="order-data-container">
                    <h3>Total de tu compra: $ {calcularPrecioTotal()}</h3>
                    <h5>Te registraste con estos datos. Tené en cuenta que estos datos son los que utilizaremos para contactarte y enviarte tus productos</h5>
                    <p>Nombre: {(usuario[0].name)}</p>
                    <p>E-mail: {(usuario[0].mail)}</p>
                    <p>Teléfono: {(usuario[0].phone)}</p>
                </div>


                <Link to='/brief' onClick={handleCompra}>Comprar!</Link>
                <ToastContainer />

            </div>
        </div>
    )

}

export default CheckoutContainer;
