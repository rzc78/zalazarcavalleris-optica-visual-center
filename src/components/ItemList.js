import Item from "./Item"

const ItemList = (props) => {

        return(
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