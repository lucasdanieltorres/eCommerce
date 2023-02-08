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
    <div className="card">
        <div className="card-body row mx-auto">
            <div className="col mx-auto">
            <button className="btn btn-outline-dark mx-auto w-100" onClick={handleSuma}>+</button>
            </div>

            <div className="col mx-auto">
            <label>{count}</label>
            </div>

            <div className="col mx-auto">
            <button className="btn btn-outline-dark mx-auto w-100" onClick={handleRestar}>-</button>
            </div>
        </div>
        <div className="card-footer">
            <button className="btn btn-outline-dark w-100" onClick={handleOnAdd}>Agregar al carrito</button>
        </div>

    </div>
  )
}

export default ItemCount