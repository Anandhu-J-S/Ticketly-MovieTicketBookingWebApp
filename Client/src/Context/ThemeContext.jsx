import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("Theme")
        return saved !== null ? saved === "true" : true;
    })


    useEffect(() => {
        localStorage.setItem("Theme", theme)
    }, [theme])

    return (
        <>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}