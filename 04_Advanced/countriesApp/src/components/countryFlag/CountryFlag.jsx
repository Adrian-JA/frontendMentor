import './countryFlag.css'

export function CountryFlag({ imgSrc }) {
    return (
        <img src={imgSrc} className="countryFlag" alt='countryFlag'></img>
    )
}