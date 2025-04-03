import './regionFilterStyle.css'
import { useState } from 'react'
import { Arrow } from '../icons/Arrow'

export function RegionFilter({ handleInputChange }) {
    const [isHide, setHide] = useState(false)

    const handleSelectClick = () => {
        setHide(!isHide)
    }
    const handleOptionClick = (e) => {
        handleInputChange(e.target.id.toLowerCase())
    }

    return (
        <div className="regionSelect" onClick={handleSelectClick}>
            <button className='regionSelect__btn' >
                <span className="regionSelect__text">Filter by Region</span>
                <span className='regionSelect__arrow' >
                    <Arrow></Arrow>
                </span>
            </button>

            {
                isHide ? (
                    <ul className='regionSelect__dropdown' >
                        <li className='optionSelect' onClick={handleOptionClick} id='Africa'>Africa</li>
                        <li className='optionSelect' onClick={handleOptionClick} id='Americas'>America</li>
                        <li className='optionSelect' onClick={handleOptionClick} id='Asia'>Asia</li>
                        <li className='optionSelect' onClick={handleOptionClick} id='Europe'>Europe</li>
                        <li className='optionSelect' onClick={handleOptionClick} id='Oceania'>Oceania</li>
                    </ul>
                ) : null
            }

        </div>
    )
}