import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
  const  productoId = useParams()
  console.log(productoId);
  return (
    <div>ItemDetailContainer{productoId}</div>
  )
}
