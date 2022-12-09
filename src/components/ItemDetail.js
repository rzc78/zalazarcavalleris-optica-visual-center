import React from 'react';
// import Link from 'react-router-dom';
import '../components/styles/GrupoItemDetail.css'

const ItemDetail = ({ producto }) => {

    console.log("llega?", producto)

    //Estuve horas intentando resolver un error que me daba consola cuando llamaba a cada key del array del producto, lo que no me permitía renderizar el componente. Finalmente encontré algo de encadenamiento opcional, que funciona con el operador ?, aunque no lo termino de entender del todo. De esta forma se solucionó

    return (
        <div className="card mb-3 grupoDetail" style={null}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={producto?.img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title titleDetail">{producto?.name}</h5>
                        <p className="card-text">
                            {producto?.description}
                        </p>
                        <p className="card-text textPrice">$ {producto?.price}
                        </p>
                        <small className="text-muted"> El precio expresado es para consumidor final, IVA incluído</small>
                    </div>
                </div>
            </div>
        </div>

    )


}

export default ItemDetail