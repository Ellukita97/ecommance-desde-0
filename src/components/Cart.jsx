import { useRef, useState } from 'react'
import './Cart.css'

import notFoundImg from '../assets/Image-not-found.png'

import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Cart() {

    const { cart, clearCart, removeCartItem } = useContext(CartContext)
    const [activated, setActivated] = useState(false)
    const checkRef = useRef()

    const handdleClickCheck = () => {
        const element = checkRef.current
        element.checked = !element.checked
        setActivated(!activated)
    }

    return (
        <>
            <input type="checkbox" ref={checkRef} className='check-cart' id="" />
            <button onClick={handdleClickCheck} className='button-start-cart'>
                {activated ? "X" : "Carrito"}
            </button>
            <section className="container-Cart">

                <h2>Cart</h2>
                <button onClick={clearCart}>Borrar carrito</button>
                <ul>
                    {
                        cart.map(p => (
                            <li key={p.id}>
                                <h3>{p.title}</h3>
                                <img src={notFoundImg} alt="image not found" loading='lazy' />
                                <p>Cantidad: {p.quantity}</p>
                                <button onClick={()=> removeCartItem(p)}>Borrar</button>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </>
    )
}