import React from 'react';

const Checkout = ({cantidad, name, description, price}) => {


    return (
        <div>
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
