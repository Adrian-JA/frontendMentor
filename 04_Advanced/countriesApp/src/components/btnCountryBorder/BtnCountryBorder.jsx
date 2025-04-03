import "./btnCountryBorder.css"
import { Link } from "react-router"

export function BtnCountryBorder({ countryBorder }) {
    return (
        <Link to={`/country/${countryBorder}`} className="btnCountryBorder">
            <p>{countryBorder}</p>
        </Link>
    )
}
