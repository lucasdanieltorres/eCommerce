import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

export const CartContainer = () => {

  const { cartList, vaciarCarrito, eliminarProducto, precioTotal } = useCartContext()

  return (

    <>
      {
        cartList.length > 0 ? 
          <div>
            {cartList.map(prod => 
            <div key={prod.id} className="card" style={{width: "18rem"}}>
              <img className="card-img-top" src={prod.img}/>
              <div className="card-body">
                <h3 className="card-title">{prod.nombre}</h3>
                <h4 className="card-text">{prod.precio}</h4>
                <h5 className="card-text">Cantidad: {prod.cantidad}</h5>
                <button className="btn btn-outline-danger" onClick={()=> eliminarProducto(prod.id)}>Quitar del carrito</button>
              </div>
            </div>)  }
            <button className="btn btn-outline-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
            <h2>Precio total: {precioTotal()}</h2>
          </div>
        :   
          <div>
          <h3>No hay nada por aquí!</h3>
          <Link to={"/"}>
          <button> Volver a inicio </button>
          </Link>
          </div>
      }
    </>

  )
}
