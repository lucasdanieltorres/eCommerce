import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartContextProvider = ({ children }) => {


    const [cartList, setCartList] = useState([]);
  
    const agregarCarrito = (newProduct) => {

        
        // si findIndex encuentra el product, retorna su posicion, si no, retorna -1
        const idx = cartList.findIndex(product => product.id === newProduct.id);
        
        if (idx !== -1) {
            cartList[idx].cantidad += newProduct.cantidad; 
            setCartList([...cartList])
        } else {
            // no está, lo agrego normalmente
            setCartList([...cartList, newProduct]);
        }

    }

    const cantidadTotal = () => cartList.reduce((count, objProductos) => count += objProductos.cantidad , 0 )

    
    const precioTotal = () => cartList.reduce((count, objProductos) => count += (objProductos.cantidad*objProductos.precio) , 0 )

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
            eliminarProducto,
            cantidadTotal,
            precioTotal
        }}>
            {children}
        </CartContext.Provider>
    )

  }
