
import './CardContainer.css'
import CardProd from './CardProd'
import { useContext } from 'react'
import { FilterContext } from '../context/FilteresContext'
import { CartContext } from '../context/CartContext'

export default function CardContainer() {

    const {filterProducts} = useContext(FilterContext)
    const {setCartItem} = useContext(CartContext)

    const addProductsToCart = (p) => {
        setCartItem(p)
    }
    return (
        <section className='card-container'>
            {
                filterProducts.map((p) => (
                    <CardProd key={p.id} p={p} handdleClick={addProductsToCart} />
                ))
            }
        </section>
    )
}