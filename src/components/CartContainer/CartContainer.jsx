import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import OrderForm from "../OrderForm/OrderForm"

export const CartContainer = () => {

    const { cartList, vaciarCarrito, eliminarProducto, precioTotal } = useCartContext()

    return (

        <>
            {
                cartList.length > 0 ?
                    <div className="cartLleno ">
                        <div className="cartMain">

                            <div>
                                {cartList.map(prod =>
                                    <div key={prod.id} className="cartCard card mx-2 my-2" style={{ width: "18rem" }}>
                                        <img className="card-img-top w-50" src={prod.img} />
                                        <div className="card-body">
                                            <h3 className="card-title ">{prod.nombre}</h3>
                                            <h4 className="card-text">${prod.precio}</h4>
                                            <h5 className="card-text">Cantidad: {prod.cantidad}</h5>
                                            <button className="btn btn-outline-danger btnEliminar" onClick={() => eliminarProducto(prod.id)}>Quitar del carrito</button>
                                        </div>
                                    </div>)
                                }
                            </div>

                            <div className="form">
                                <OrderForm />
                            </div>

                        </div>

                        <div className="precioTotal">
                            <h2>Precio total: ${precioTotal()}</h2>
                            <button className="btn btn-outline-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
                        </div>
                    </div>
                    :
                    <div className="cartVacio">
                        <h3>No hay nada por aquí!</h3>
                        <Link to={"/"}>
                            <button className="btn btn-outline-info"> Volver a inicio </button>
                        </Link>
                    </div>
            }
        </>

    )
}
