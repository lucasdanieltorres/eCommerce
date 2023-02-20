
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"



const ItemDetail = ({ producto }) => {
  const { agregarCarrito, cartList } = useCartContext()
  const [IsOnCart, setIsOnCart] = useState(false);

  const onAdd = (cant) => {
    agregarCarrito({...producto, cantidad: cant}) //
    setIsOnCart(true)
  }

  return (
    <div className="container itemDetail mt-5">
      <div className="row">
        <div className="col">
          <img className="w-75" src={producto.img} alt={producto.nombre} />
        </div>
        <div className="col">
          <h2>{producto.nombre}</h2>
          <h5>Categoría: {producto.categoria}</h5>
          <h4>${producto.precio}</h4>

          {
            IsOnCart?
              <>
                <Link to="/cart">
                  <button className="btn btn-warning">Ir al carrito</button>
                </Link>

                <Link to="/">
                  <button className="btn btn-success mx-1">Seguir comprando</button>
                </Link>
              </>
            :
              <ItemCount onAdd={onAdd} />
          }

        </div>
      </div>
    </div>
  )
}

export default ItemDetail