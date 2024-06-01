export const cartInitialState = []

export const cartReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'ADD_TO_CART': {
            const { id } = payload

            const value = state?.findIndex((pcart) => {
                return pcart.id === id
            })
            if (value >= 0) {
                const newCart = structuredClone(state)
                newCart[value].quantity += 1
                return newCart
            }

            return [
                ...state,
                {
                    ...payload,
                    quantity: 1
                }
            ]
        }
        case 'REMOVE_TO_CART': {
            /*
                const value = cart?.findIndex((pcart) => {
                    return pcart.id === p.id
                })
    
                const newCart = structuredClone(cart)
                newCart.splice(value,1)
    
                setCart(newCart)
            */

            const { id } = payload
            return state.filter(item => item.id != id)
        }
        case 'CLEAR_TO_CART': {
            return cartInitialState
        }
    }
    return state
}