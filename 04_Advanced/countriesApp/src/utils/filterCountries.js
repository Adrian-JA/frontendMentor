import { countriesList } from '../api/data.js'
export function filterCountries(filter) {
    if (!filter) return countriesList

    return countriesList.filter((country) =>
        country.name.toLowerCase().startsWith(filter.toLowerCase()) ||
        country.region.toLowerCase() === filter.toLowerCase()
    )
}

