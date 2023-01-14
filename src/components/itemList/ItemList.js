import Item from "./Item"

const ItemList = (props) => {
    //Desde ItemListContainer se trae mediante paso de props el array de productos generado, para ser mapeado y renderizado en el componente Item
    return (
        props.productos.map((e) =>
            <Item
                name={e.name}
                description={e.description}
                stock={e.stock}
                img={e.img}
                price={e.price}
                id={e.id}
            />)

    )

}

export default ItemList