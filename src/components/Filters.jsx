import { useContext, useState } from "react"
import { FilterContext } from "../context/FilteresContext"

export default function Filters() {

    const { setFilters, filters } = useContext(FilterContext)

    const handdleOnChangeSelect = (e) => {
        const value = e.target.value
        setFilters({
            ...filters,
            category: value
        })
    }

    const handdleOnChangeInput = (e) => {
        const value = e.target.value
        setFilters({
            ...filters,
            minPrice: value
        })
    }

    return (
        <section>
            <h2>filters</h2>
            <div>
                <select onChange={handdleOnChangeSelect}>
                    <option value="all">Todo</option>
                    <option value="home-decoration">Decoracion</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
                <label htmlFor="">precio</label>
                <input
                    type="range"
                    min='0'
                    max='1000'
                    onChange={handdleOnChangeInput}
                    id="" />
                <label htmlFor="">{filters.minPrice}</label>
            </div>
        </section>
    )
}