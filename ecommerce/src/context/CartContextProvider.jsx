import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartContextProvider = ({ children }) => {


    const [cartList, setCartList] = useState([]);
  
    const agregarCarrito = (product) => {
        setCartList([...cartList, product]);
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    const eliminarProducto = (id) => {
        setCartList((cart) => cart.filter((prod)=> prod.id !== id));
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )

  }
