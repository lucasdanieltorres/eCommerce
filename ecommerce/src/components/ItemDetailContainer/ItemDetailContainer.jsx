import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mPromise } from "../helpers/fetch"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loader from "../Loader/Loader"

export const ItemDetailContainer = () => {
  const {productoId} = useParams()
  const [producto, setProducto] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  
  useEffect(()=>{
    mPromise(productoId)
    .then(resp => {
      setProducto(resp)
      setIsLoading(false) 
    })
    .catch((err) => {
      setErrorMessage(`Error: ${err}`)
    })
    .finally(()=>setIsLoading(false))
  },[])

  if (errorMessage !== null) {
    return (
      <div className="py-4 mx-auto text-center ">
        <h2>ERROR</h2>
        <p className="my-3 p-3 text-danger-emphasis bg-danger-subtle border border-danger-subtle">{errorMessage}</p>
      </div>
    )
  }

    return (
      isLoading ?
      <Loader/>
      :
    <ItemDetail producto={producto}/>
  )
}
