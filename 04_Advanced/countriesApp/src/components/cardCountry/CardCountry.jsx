import './cardCountryStyle.css'
import { Link } from 'react-router'
import { CountryFlag } from '../countryFlag/CountryFlag'
import { CountryInfo } from '../CountryInfo/CountryInfo'


export function CardCountry({ countryData }) {
    const { name, flag, population, region, capital } = countryData
    return (
        <div className="cardCountry">
            <Link to={`/country/${name}`} className='cardCountry__header'>
                <CountryFlag imgSrc={flag}></CountryFlag>
            </Link>
            <div className='cardCountry__body'>
                <h3 className='cardCountry__title'>{name}</h3>

                <CountryInfo info={{ population: population, region: region, capital: capital }} className="countryInfo--cut"></CountryInfo>
            </div>
        </div>

    )
}