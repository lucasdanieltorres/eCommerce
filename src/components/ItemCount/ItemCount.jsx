import { useState } from "react"

const ItemCount = ({initial=1, stock=10, onAdd}) => {
    const [count, setCount] = useState(initial) 
    const handleSuma = () => {
        if(count < stock ) {
            setCount(count + 1);
        } else {}
    }
    const handleRestar = () => {
        if (count > initial) {
            setCount(count - 1);
        }
        else {}
    }

    const handleOnAdd = () => {
        onAdd(count) 
    }

  return (
    <div className="itemCount">
        <div className="cant my-auto">
            <div className="mx-auto">
            <button className="btn btn-outline-dark" onClick={handleSuma}>+</button>
            </div>

            <div className="mx-3 my-auto">
            <label>{count}</label>
            </div>

            <div>
            <button className="btn btn-outline-dark" onClick={handleRestar}>-</button>
            </div>
        </div>
        <div className="mt-2">
            <button className="btn btn-outline-dark w-100" onClick={handleOnAdd}>Agregar al carrito</button>
        </div>

    </div>
  )
}

export default ItemCount