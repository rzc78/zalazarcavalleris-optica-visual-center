import React from 'react'
import sucursal from '../../assets/images/empresa1.png'
import './grupohome.css'

const Sucursal = () => {
  return (
    <div>
        <div>
            <img className="sucursalImg" src={sucursal} alt="sucursal nuevo centro cba" />
        </div>
        <div className="txt-centrado">
            <h2>Nos encontramos en el Shopping NuevoCentro de la ciudad de Córdoba</h2>
            <h3>Av. Duarte Quiros 1400 - Ciudad de Córdoba - Argentina</h3>
            <p>Local 56 3er Piso</p>
            <p>Tel. 7747592935 - mail: visualcenter@xnetd.com</p>

        </div>
    </div>
  )
}

export default Sucursal