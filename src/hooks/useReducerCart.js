import { cartInitialState, cartReducer } from "../reducers/cartReducer";
import { useReducer } from "react";
import { TYPE_TO_CART_ACTIONS } from "../../constants";

export default function useReducerCart() {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const setCartItem = (p) => dispatch({
        type: TYPE_TO_CART_ACTIONS.ADD_TO_CART,
        payload: p
    })

    const removeCartItem = (p) => dispatch({
        type: TYPE_TO_CART_ACTIONS.REMOVE_TO_CART,
        payload: p
    })

    const clearCart = () => dispatch({
        type: TYPE_TO_CART_ACTIONS.CLEAR_TO_CART
    })

    return { cart: state, setCartItem, removeCartItem, clearCart }

}