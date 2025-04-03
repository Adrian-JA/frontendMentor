import { countriesList } from "../api/data"


const bordersDict = Object.fromEntries(countriesList.map(country => [country.alpha3Code, country]))
const countriesDict = Object.fromEntries(countriesList.map(country => [country.name, country]))

export { countriesDict, bordersDict }