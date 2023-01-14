
import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import ItemList from './ItemList';

const ItemListContainer = () => {
    // Variable de estado para el guardado de los productos traídos de la colección de Firebase
    const [productos, setProductos] = useState([]);

    //Petición a Firestore de la colección
    useEffect(() => {
        const dataBase = getFirestore();
        const collectionProd = collection(dataBase, 'products');
        getDocs(collectionProd)
            //La respuesta de la petición es guardada en la variable de estado productos: se mapea y con un spread operator se forma el nuevo array
            .then(res => setProductos(res.docs.map(item => ({ id: item.id, ...item.data() }))))

    }, []);

    return (
        <div className="container-fluid bg-container">
            <h2 className="textPrincipal">¡Bienvenidos a nuestra tienda!</h2>
            <div className='row grupoItemListContainer'>
                <ItemList
                    productos={productos} />
            </div>
        </div>
    );
}

export default ItemListContainer;
