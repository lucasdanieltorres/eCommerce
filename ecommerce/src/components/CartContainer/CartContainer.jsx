import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

export const CartContainer = () => {

  const { cartList, vaciarCarrito, eliminarProducto } = useCartContext()

  return (

    <>
      {
        cartList.length > 0 ? 
          <div>
            {cartList.map(prod => 
            <div key={prod.id} className="card" style={{width: "18rem"}}>
              <img className="card-img-top" src={prod.img}/>
              <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <p className="card-text">{prod.precio}</p>
                <button className="btn btn-outline-danger" onClick={()=> eliminarProducto(prod.id)}>Quitar del carrito</button>
              </div>
            </div>)  }
            <button className="btn btn-outline-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
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
