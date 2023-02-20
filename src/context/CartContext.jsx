import { useContext, useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

