import { useEffect, useState } from "react"

export function useTheme() {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme')

        if (storedTheme) return storedTheme

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    })

    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.body.dataset.theme = theme
    }, [theme])

    const handleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }


    return { theme, handleTheme }
}