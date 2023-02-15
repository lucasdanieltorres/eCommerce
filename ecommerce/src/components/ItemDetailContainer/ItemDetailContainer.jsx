import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleItem } from "../helpers/firebase"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loader from "../Loader/Loader"

export const ItemDetailContainer = () => {
  const {productoId} = useParams()
  const [producto, setProducto] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  // useEffect(()=>{
  //   mPromise(productoId)
  //   .then(resp => {
  //     setProducto(resp)
  //     setIsLoading(false) 
  //   })
  //   .catch((err) => {
  //     setErrorMessage(`Error: ${err}`)
  //   })
    // .finally(()=>setIsLoading(false))
  // },[])

  useEffect(()=>{
    getSingleItem(productoId)
    .then(resp => {
      resp !== null ? setProducto(resp) : setError(true)
      // setProducto(resp)
      setIsLoading(false)
    })
    .finally(()=>setIsLoading(false))



  },[])
  
  if (error) {
    return (
      <div className="py-4 mx-auto text-center ">
        <h2>ERROR</h2>
        <p className="my-3 p-3 text-danger-emphasis bg-danger-subtle border border-danger-subtle">Item no encontrado en la base de datos</p>
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
