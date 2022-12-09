import * as React from 'react';
import { useState } from "react";

const ItemCount = () => {

    const [contador, setContador] = useState(0)

    return (
        <div>
            <button onClick={() => setContador(contador + 1)}>Agregar</button>
            <button onClick={() => setContador(contador - 1)}>Quitar</button>
            <p>{contador}</p>
        </div>
    )


}

export default ItemCount;