import { ReactNode, createContext, useLayoutEffect, useState } from 'react'
import { getStorageItem, setStorageItem } from 'utils/storage'

export type themeProps = 'dark' | 'light'

export interface Provider {
    theme: themeProps
    toggleTheme: () => void
}

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeContext = createContext<Provider | null>(null)

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

    // get theme mode
    const initTheme = (): themeProps => {
        return getStorageItem('localstorage', 'theme')
            ? getStorageItem('localstorage', 'theme') as themeProps
            : 'light'
    }

    const [theme, setTheme] = useState<themeProps>(initTheme())

    const toggleTheme = (): void => {
        setStorageItem('localstorage', 'theme', theme === "light" ? "dark" : "light")
        setTheme(theme => theme === "light" ? "dark" : "light")
        toggleClass()
    }

    const toggleClass = () => {
        if (getStorageItem('localstorage', 'theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.remove('light')
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
            document.documentElement.classList.add('light')
        }
    }

    useLayoutEffect(() => {
        toggleClass()
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider