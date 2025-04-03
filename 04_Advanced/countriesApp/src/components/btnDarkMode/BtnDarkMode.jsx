import './btnDarkMode.css'
import { Moon } from "../icons/Moon";
import { useTheme } from "../../hooks/useTheme";

export function BtnDarkMode() {
    const { handleTheme } = useTheme()

    return (
        <button className="btnDarkMode" onClick={handleTheme}>
            <span className="btnDarkMode__icon">
                <Moon></Moon>
            </span>
            <span className="btnDarkMode__text">Dark mode</span>
        </button>
    )
}