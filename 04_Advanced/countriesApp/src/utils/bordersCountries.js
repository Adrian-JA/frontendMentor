import { countriesList } from '../api/data'
const countriesDict = Object.fromEntries(countriesList.map(country => [country.alpha3Code, country]))

export function bordersCountries(borders) {
    if (!borders) return

    return borders.map((border) => countriesDict[border])
}