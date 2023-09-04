import { useState } from "react"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"

type ThemeProps = "light" | "dark"

const Theme = () => {
    const [theme, setTheme] = useState<ThemeProps>("light")

    const toggleTheme = () => {
        setTheme((theme) => theme === 'light' ? 'dark' : 'light')
    }
    return (
        <button
            type="button"
            className={`relative border rounded-2xl w-14 h-7 p-1 
                ${theme === 'light' ? 'bg-white' : 'bg-indigo-950'}`
            }
            onClick={toggleTheme}
        >
            <div className={
                `w-[18px] h-[18px] flex justify-center items-center absolute top-[5px] left-[6px] bg-white rounded-full 
                    ${theme === 'light' ? 'block' : 'hidden'}`}
            >
                <SunIcon className="w-4 h-4" />
            </div>
            <div className={
                `w-[18px] h-[18px] flex justify-center items-center absolute top-[5px] right-[6px] bg-indigo-950 rounded-full 
                    ${theme === 'dark' ? 'block' : 'hidden'}`}
            >
                <MoonIcon className="w-4 h-4 text-white" />
            </div>
        </button>
    )
}

export default Theme