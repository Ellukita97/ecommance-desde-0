import Filters from './components/Filters'
import CardContainer from './components/CardContainer'
import Cart from './components/Cart'

import { FilterProvider } from './context/FilteresContext'
import { CartProvider } from './context/CartContext'

export default function App() {

    return (

        <main>
            <header>
                <nav>
                    <h1>Aplicacion Ecomance</h1>
                </nav>
            </header>
            <CartProvider>
                <Cart />
                <FilterProvider>
                    <Filters />
                    <CardContainer />
                </FilterProvider>
            </CartProvider>
        </main>
    )
}