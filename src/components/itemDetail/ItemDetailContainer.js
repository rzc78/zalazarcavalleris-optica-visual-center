import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from './ItemDetail'



const ItemDetailContainer = () => {

    const [detalleItem, setDetalleItem] = useState();
    //Hook de use params que guarda la id del producto para pasarlo a la url dinamicamente
    const { id } = useParams();

    
    //UseEffects que trae de array de dependencia al id del producto elegido en ITEM, el que está seteado en useParams
    useEffect(() => {
        const dataBase = getFirestore();
        const queryProd = doc(dataBase, 'products', id);
        getDoc(queryProd)
        //Como Id viene por fuera de array traido de firebase, se setea el nuevo array de producto que se carga al cart, con el id del documento de FS.
            .then(res => setDetalleItem({ id:res.id, ...res.data() }))


    }, [id]);

    return (
        <div>
            <ItemDetail
            producto={detalleItem}/>
        </div>

    )
}

export default ItemDetailContainer
