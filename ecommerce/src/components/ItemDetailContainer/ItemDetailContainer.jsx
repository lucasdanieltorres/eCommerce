import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mPromise } from "../helpers/fetch"
import ItemDetail from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
  const {productoId} = useParams()
  const [producto, setProducto] = useState({})

  
  useEffect(()=>{
    mPromise(productoId)
    .then(resp => setProducto(resp) )
  },[])

    return (
    <ItemDetail producto={producto}/>
  )
}
