import React from 'react';

const ButtonsSmall = ({ disabled, manejador, value }) => {

    return (
        <button disabled={disabled} onClick={manejador} type="button" className="btn btn-primary buttonSet">{value}</button>
    )

}

export default ButtonsSmall