import { createContext } from "react";
import useFilters from "../hooks/useFilters";

export const FilterContext = createContext()

export function FilterProvider({ children }) {

    const { filterProducts, setFilters, filters } = useFilters()

    return (
        <FilterContext.Provider value={{ filterProducts, setFilters, filters }}>
            {children}
        </FilterContext.Provider>
    )
}