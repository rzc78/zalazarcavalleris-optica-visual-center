
import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import ItemList from './ItemList';


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    

    useEffect(() => {
        const dataBase = getFirestore();
        const collectionProd = collection(dataBase, 'products');
        getDocs(collectionProd)
            .then(res => setProductos(res.docs.map(item => ({ id: item.id, ...item.data() }))))
            

    },[]);

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
