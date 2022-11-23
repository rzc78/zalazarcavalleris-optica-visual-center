//Dentro del ItemListContainer se ubicarán las cards de productos. En la idea original, irán debajo de un slide de imágenes con anuncios!

const ItemListContainer = ({ armazones, lentesSol, productosLimpieza, accesorios }) => {
    return (
        <div>
            <h1 className="itemListBG">En este List Container irán alojadalas CARDS con los productos de la tienda, que son: {armazones}{lentesSol}, {productosLimpieza} y {accesorios}</h1>
        </div>


    )

}
export default ItemListContainer;