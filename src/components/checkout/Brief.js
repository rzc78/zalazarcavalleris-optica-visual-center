import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';
import compras from '../../assets/images/las-compras-en-linea.png'
import './checkout.css'


const Brief = () => {

  //Variable de estado de AuthContext donde se encuenta el ID devuelto por Firestore luego de realizar la compra.
  const { idOrder } = useContext(AuthContext);

  return (
    <div className="brief-position">
      <div>
        <img className="img-position" src={compras} alt="" />
      </div>
      <div className="checkout-container">
        <h1>¡Gracias por tu compra!</h1>
        <p>Gracias por confiar en nosotros. Nos contactaremos en las próximas 24 horas para coordinar la entrega de tu compra. Tené a mano este ID de tu orden para cuando nos contactemos contigo o siemplemente para agilizar tu reclamo.</p>

        <h5>ID de orden: </h5>
        <div className="idOrderStyle">
          <p>{idOrder}</p>
        </div>
      </div>
    </div>

  )
}

export default Brief