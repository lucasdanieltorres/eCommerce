import { Link } from "react-router-dom"

export const Item = ( {producto} ) => {
  return (
    <div key={producto.id} className="card col-3">
    <img src={producto.img} className="card-img-top mx-auto my-auto" />
    <div className="card-body">
      <h5 className="card-title">{producto.nombre}</h5>
      <p className="card-text">${producto.precio}</p>
      <Link to={`/detail/${producto.id}`}>
      <button className="btn btn-outline-dark mx-auto w-100">Detalle</button>
      </Link>
    </div>
   </div>
   )
}
