import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({producto}) => {

    const onAdd = (cant) =>{
        console.log(cant)
    }

    return (
        <div className="container">
      <div className="row">
        <div className="col">
          <img src={producto.img} alt={producto.nombre} />
        </div>
        <div className="col">
          <h2>{producto.nombre}</h2>
          <h5>{producto.categoria}</h5>
          <h4>$ {producto.precio}</h4>
          <ItemCount onAdd={onAdd}/>
        </div>
      </div>
    </div>
    )
}

export default ItemDetail