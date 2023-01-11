import '../itemList/grupoItemListContainer.css'
import * as React from 'react';
import { Link } from 'react-router-dom';


const Item = ({ name, stock, img, price, id }) => {

    return ( 
            <div className="card cuerpoCard" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Stock: {stock}</p>
                    <p className="card-text">Precio: {price}</p>
                    <a href="#index" className="btn btn-primary">
                        Agregar al carrito
                    </a>
                    <Link to={"/item/" + id} className="btn btn-secondary">Detalle
                    </Link>
                </div>
            </div>
    )

}

export default Item
