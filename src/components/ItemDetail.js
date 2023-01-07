import React from 'react';
// import Link from 'react-router-dom';
import '../components/styles/GrupoItemDetail.css'
import ItemCount from './ItemCount'

const ItemDetail = ({ producto }) => {

    
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
                    <span>
                        <ItemCount
                            description={producto?.description}
                            stock={producto?.stock}
                            img={producto?.img}
                            name={producto?.name}
                            price={producto?.price}
                            initial={1}
                            id={producto?.id}
                        />
                    </span>
                </div>
            </div>
        </div>

    )


}

export default ItemDetail