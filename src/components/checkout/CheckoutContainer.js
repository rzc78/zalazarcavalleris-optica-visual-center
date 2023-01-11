import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {addDoc, collection, getFirestore} from 'firebase/firestore';

import CartContext from '../context/CartContext';


const CheckoutContainer = () => {

    const { cart, mapeoCheckout, contadorProductos, calcularPrecioTotal, clearCart } = useContext(CartContext);

    // const [isLoguin, setIsLoguin] = useState(false);

    // useEffect(() => {
        
    // }, [isLoguin]);


//Array y función para guardar los datos del comprador
    const ordenCompra = {
        cliente: {
            nombre: "x",
            email: "sadsa@das",
            telefono: 84719748917,
            direccion: "dasda"
        },
        items: cart.map(producto => ({ id: producto.id, producto: producto.name, precio: producto.price, cantidad: producto.cantidad })),
        precioTotal: calcularPrecioTotal(),

    }

    
//Función para realizar la compra
    const handleCompra=()=>{
        const dataCompra=getFirestore();
        const ordenCollection= collection(dataCompra, 'orders');
        addDoc(ordenCollection, ordenCompra)
        .then(({id})=>console.log(id))
        clearCart()

    }

    // const getDate = () => {
    //     const time = new Date();
    //     return `Compra realizada el día ${time.getFullYear()} a las ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    //   };

    //   console.log(getDate())

    return (
        <div>

            <div>
                <h5>Estás a punto de generar una orden de compra por: {contadorProductos()}
                 items</h5>
                <div>
                    {mapeoCheckout()}
                </div>
                <h3>Total de tu compra: $ {calcularPrecioTotal()}</h3>
                <h5>Te registraste con estos datos. Tené en cuenta que estos datos son los que utilizaremos para contactarte y enviarte tus productos</h5>
                <p>Nombre:</p>
                <p>E-mail:</p>
                <p>Teléfono:</p>
                <p>Dirección:</p>

                <Link to='/' onClick={handleCompra}>Comprar!</Link>

            </div>
        </div>
    )

}

export default CheckoutContainer;
