import './countryDetail.css'
import { useParams } from "react-router"
import { bordersDict, countriesDict } from "../../utils/dictCountries"
import { BtnBackToHome } from "../../components/BtnBackToHome/BtnBackToHome"
import { BtnCountryBorder } from '../../components/BtnCountryBorder/BtnCountryBorder'
import { CountryFlag } from "../../components/countryFlag/CountryFlag"
import { CountryInfo } from '../../components/CountryInfo/CountryInfo'


export function CountryDetail() {
    const { countryname } = useParams()
    const { name, flag, borders, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages } = countriesDict[countryname]

    const borderCountries = borders ? borders.map(border => bordersDict[border]) : null
    return (
        <section className="countryDetails">
            <BtnBackToHome></BtnBackToHome>
            <section className="countryDetails__body">
                <div className="countryDetails__flag">
                    <CountryFlag imgSrc={flag}></CountryFlag>
                </div>
                <div className="countryDetails__content">
                    <h3 className="countryDetails__title">{name}</h3>
                    <section className="countryDetails__info">
                        <div className="countryDetails__col">
                            <CountryInfo info={{ nativeName: nativeName, population: population, region: region, subregion: subregion, capital: capital }}></CountryInfo>
                        </div>
                        <div className="countryDetails__col">
                            <CountryInfo info={{ topLevelDomain: topLevelDomain, currencies: currencies, languages: languages }}></CountryInfo>
                        </div>
                    </section>

                    <section className="countryDetails__borders">
                        <p className="countryDetails__borders-title">Border Countries:</p>
                        {
                            borderCountries ? (
                                <>
                                    {borderCountries.map((border, index) => (
                                        <BtnCountryBorder key={index} countryBorder={border.name}></BtnCountryBorder>
                                    ))}
                                </>
                            ) : <p className="countryDetails__borders-noInfo">{"The country has no borders with other countries."}</p>
                        }

                    </section>
                </div>
            </section>
        </section>
    )
}