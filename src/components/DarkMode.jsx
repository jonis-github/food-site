import lightMode from "../assets/website/light-mode-button.png"
import darkMode from "../assets/website/dark-mode-button.png"
import { useEffect, useState } from "react"

function DarkMode() {
    const [ theme, setTheme ] = useState( localStorage.getItem( "theme" ) ? localStorage.getItem( "theme" ) : "light" )
    const element = document.documentElement

    const changeTheme = () => {
        if( theme === "light" ) {
            setTheme( "dark" )
        } else {
            setTheme( "light" )
        }
    }

    useEffect( () => {
        if( theme === "dark" ) {
            element.classList.add( "dark" )
            localStorage.setItem( "theme", "dark" )
        } else {
            element.classList.remove( "dark" )
            localStorage.setItem( "theme", "light" )
        }
    }, [ theme ] )

    return(
        <>
            <div className="relative">
                <img 
                    className={ `w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${ theme === "dark" ? 'opacity-100' : 'opacity-0' } ` }
                    src={ darkMode } 
                    alt="Theme" 
                    onClick={ changeTheme }
                />

                <img 
                    // className="w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300" 
                    className="w-12 right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300" 
                    src={ lightMode } 
                    alt="Theme"
                    onClick={ changeTheme }
                />
            </div>
        </>
    )
}

export { DarkMode }