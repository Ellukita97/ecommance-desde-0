import { createContext } from "react";
import useReducerCart from "../hooks/useReducerCart";

export const CartContext = createContext()

export function CartProvider({ children }) {

    const { cart, setCartItem, removeCartItem, clearCart } = useReducerCart()

    return (
        <CartContext.Provider value={
            {
                cart,
                setCartItem,
                removeCartItem,
                clearCart
            }
        }>
            {children}
        </CartContext.Provider>
    )
}