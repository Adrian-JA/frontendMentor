import './headerStyle.css'
import { BtnDarkMode } from '../btnDarkMode/BtnDarkMode'

export function Header() {
    return (
        <header className="header">
            <h1 className="header__title">Where in World?</h1>
            <BtnDarkMode></BtnDarkMode>
        </header>
    )
}