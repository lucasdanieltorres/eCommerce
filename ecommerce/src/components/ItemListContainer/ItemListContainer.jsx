import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { mPromise } from "../helpers/firebase";
import { ItemList } from "../ItemList/ItemList";
import Loader from "../Loader/Loader";

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
        <div id="ilc" className="" >
            <h3 className="mx-auto my-3">Bievenido a Clean Solutions!</h3>

            <div className="listado text-center">   
                {   loading ? 

                        <Loader/>

                        :

                       <ItemList productos={productos}/>
                                                             
                } 
            </div>
        </div>
    )
}

export default ItemListContainer