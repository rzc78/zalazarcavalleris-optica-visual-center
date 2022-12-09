
import { useEffect, useState } from 'react';
import ItemList from './ItemList';


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch(`https://638fa3d09cbdb0dbe32d7634.mockapi.io/catalogo/catalogo`)
            .then((resp) => resp.json())
            .then((resp) => {
                setProductos(resp)
            })
            .catch((error) => {
                console.error("Error de request: ", error)
            })
    }, [])

    return (
        <div className="container-fluid bg-container">
            <div className='row grupoItemListContainer'>
                <ItemList
                    productos={productos} />
            </div>
        </div>
    );
}

export default ItemListContainer;
