
import { countriesList } from '../../api/data.js'
import { CardCountry } from '../../components/cardCountry/CardCountry'
import { RegionFilter } from '../../components/regionFilter/RegionFilter'
import { SearchFilter } from '../../components/searchFilter/SearchFilter'
import './homeStyle.css'
import { useFilterCountry } from '../../hooks/useFilterCountry'

export function Home() {
    const { filteredCountries, addFilters } = useFilterCountry(countriesList)

    const handleInputChange = (valueSearched) => {
        addFilters(valueSearched)
    }

    return (
        <section className="home">
            <section className='home__filters'>
                <SearchFilter handleInputChange={handleInputChange}></SearchFilter>
                <RegionFilter handleInputChange={handleInputChange}></RegionFilter>
            </section>
            <section className='home__countriesList'>
                {
                    filteredCountries && (
                        filteredCountries.map((country) =>
                            <CardCountry key={country.alpha2Code} countryData={country}></CardCountry>
                        )
                    )
                }
            </section>
        </section>
    )
}