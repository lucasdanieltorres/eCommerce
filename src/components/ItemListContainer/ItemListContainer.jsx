import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {
    const[productos, setProductos] = useState([]);
    const[loading, setLoading] = useState(true);
    const { categoriaId } = useParams();

    useEffect(()=>{    
        const db = getFirestore()
        const queryCollection = collection(db, "productos")
        const queryCollectionFilter = categoriaId ? query(queryCollection, where ('categoria', '==', categoriaId)) : queryCollection; 

        getDocs(queryCollectionFilter)
            .then(response => {
                setProductos(response.docs.map(prod => (    {   id: prod.id, ...prod.data()    }   )))
            })
            .catch((err) => console.log(err))
            .finally(()=> setLoading(false))
    
    },[categoriaId])
    return (
        <div id="ilc" className="" >
            <h3 className="mx-auto mt-2">Bievenido a Clean Solutions!</h3>

            <div className="listado text-center my-4">   
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