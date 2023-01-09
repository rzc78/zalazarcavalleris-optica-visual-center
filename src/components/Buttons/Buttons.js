import React from 'react';

const ButtonsSmall=({disabled, manejador, value})=>{

    return(
            <button disabled={disabled} onClick={manejador}type="button" className="btn btn-primary btn-sm">{value}</button>
        
    )

}

export default ButtonsSmall