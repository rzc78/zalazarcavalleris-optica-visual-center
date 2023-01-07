import React from 'react';

const ButtonsSmall=({manejador, value})=>{

    return(
            <button onClick={manejador}type="button" className="btn btn-primary btn-sm">{value}</button>
        
    )

}

export default ButtonsSmall