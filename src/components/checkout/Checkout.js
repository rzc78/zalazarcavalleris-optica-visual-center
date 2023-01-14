import React from 'react';

const Checkout = ({cantidad, name, description, price}) => {

    //Renderiza dentro de CheckoutContainer el listado final de los productos existente en el CART. La lógica del mapeo se encuentra en el CartProvider.

    return (
        <div className="mapeoCheckoutContainer">
            <ol className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{name}</div>
                    {description}
                    $ {price}
                </div>
                <span className="badge bg-primary rounded-pill">{cantidad}</span>
            </li>
            </ol>
        </div>
    );
};

export default Checkout;
