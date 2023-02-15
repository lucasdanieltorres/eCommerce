import { useContext, useState } from 'react'
import { createContext } from 'react'

//crear un context

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

