import React from 'react';
import bannerImagen from '../../assets/images/handsome-man-in-optics-shop.jpg'
import './grupohome.css';


const SlideOfertas = () => {

    //En este momento aloja una imagen de bienvenida al sitio. Es un espacio para que pasen slides de oferts y promociones.

    return (
        <div>
            <div className="posicionBanner">
                <img className="imgForm" src={bannerImagen} alt="banner principal" />
            </div>
            <div >
                <h1 className="txt-centrado-main animate__animated animate__backInLeft">Visual Center</h1>
            </div>
        </div>

    )
}

export default SlideOfertas 