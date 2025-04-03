import { Glass } from "../icons/Glass";
import './searchFilter.css'

export function SearchFilter({ handleInputChange }) {
    const handleChange = (e) => {
        handleInputChange(e.target.value)
    }

    return (
        <div className="searchFilter">
            <label className="searchFilter__glass" htmlFor='search'>
                <Glass></Glass>
            </label>
            <input className="search" name="search" type="search" id="search" onChange={handleChange} placeholder="Search for a country..."></input>
        </div>
    )
}