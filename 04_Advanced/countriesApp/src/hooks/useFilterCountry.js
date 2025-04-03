import { useState } from 'react'
import { filterCountries } from '../utils/filterCountries'


export function useFilterCountry(countries) {
    const [filteredCountries, setFilteredCountries] = useState(countries)

    const addFilters = (filter) => {
        setFilteredCountries(filterCountries(filter))
    }

    return { addFilters, filteredCountries }
}