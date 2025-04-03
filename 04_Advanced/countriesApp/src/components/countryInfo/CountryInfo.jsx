import "./countryInfo.css"
import { formatCountryInfo } from "../../utils/formatCountryInfo"

export function CountryInfo({ info, className }) {
    const titleInfo = Object.keys(info).map(title => title.charAt(0).toUpperCase() + title.slice(1))
    const textInfo = Object.values(info)

    const formatTextInfo = formatCountryInfo(titleInfo, textInfo)

    return (
        <>
            {
                titleInfo.map((title, index) => {
                    return (
                        <p key={index} className={`infoTitle ${className ? className : ""}`}>{title}: <span className="infoContent"> {formatTextInfo[index]}</span></p>
                    )
                })
            }
        </>
    )
}