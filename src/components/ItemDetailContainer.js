import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

    const [detalleItem, setDetalleItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://638fa3d09cbdb0dbe32d7634.mockapi.io/catalogo/catalogo/${id}`)
            .then((resp) => resp.json())
            .then((resp) => {
                setDetalleItem(resp)
                console.log("recibe", resp)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [id]);

    return (

            <ItemDetail
                producto={detalleItem}
            />
        )



}

export default ItemDetailContainer
