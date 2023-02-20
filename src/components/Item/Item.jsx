import { Link } from "react-router-dom"

export const Item = ( {producto} ) => {
  return (
    <div key={producto.id} className="card col-3">
    <img src={producto.img} className="card-img-top mx-auto my-auto w-100" />
    <div className="card-body">
      <h5 className="card-title">{producto.nombre}</h5>
      <p className="card-text">${producto.precio}</p>
      {producto.envio && <span className="fs-6 p-1 text-success-emphasis rounded-3">Envío gratis</span>} 
        {producto.stock > 0 ?
          <Link to={`/detail/${producto.id}`}>
              <button className="btn btn-outline-dark mx-auto w-100">Detalle</button>
          </Link>
        :
          <button className="btn btn-outline-dark mx-auto w-100" disabled>Sin stock</button>
        }
     
    </div>
   </div>
   )
}
