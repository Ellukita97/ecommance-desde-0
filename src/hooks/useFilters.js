import { useState } from "react"
import {products} from '../mocks/products.json'

export default function useFilters() {
    const [productos, setProductos] = useState(products)
    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 0
    })

    const filterProd = (prod) => {
        return prod.filter(p => {
            return p.price >= filters.minPrice && (
                filters.category === 'all' ||
                filters.category === p.category
            )
        })
    }

    const filterProducts = filterProd(productos)

    return { filterProducts, setFilters, filters }
}