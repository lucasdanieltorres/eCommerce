
import { useContext, useState } from "react"
import { useCartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"



const ItemDetail = ({ producto }) => {
  const { agregarCarrito, cartList } = useCartContext()
  const [IsOnCart, setIsOnCart] = useState(false);

  const onAdd = (cant) => {
    setIsOnCart(true)
    console.log(cant)
    agregarCarrito({...producto, cantidad: cant}) //
  }
  console.log(cartList)

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
          {
            IsOnCart?
            <Link to="/cart">
              <button className="btn btn-success-outline">Ir al carrito</button>
            </Link>
            :
            <ItemCount onAdd={onAdd} />
          }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail