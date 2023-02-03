import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { mPromise } from "../helpers/fetch"

const ItemListContainer = () => {
    const[productos, setProductos] = useState([]);
    const[loading, setLoading] = useState(true);
    const { categoriaId } = useParams();

    console.log(categoriaId);
 
    useEffect(()=>{    
        if (categoriaId) {
            mPromise()
            .then(response  =>  {
                setProductos(response.filter(items => items.categoria === categoriaId));
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
        }
        else {
            mPromise()
            .then(response  =>  {
                setProductos(response);
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
        }

    },[categoriaId])


    return (
        <div id="ilc" className="mx-auto" >
            <h3 className="mx-auto my-3">Bievenido a Clean Solutions!</h3>

            <div className="listado text-center">   
                {   loading ? 
                        <h3 className="mx-auto">Cargando...</h3>
                        :
                        
                        
                        productos.map( (producto) =>
                        <div key={producto.id} className="card col-3    ">
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
            </div>
        </div>
    )
}

export default ItemListContainer