import { DarkMode } from ".";
import foodLogo from "../assets/food-logo.png"

import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
    return(
        <>
            <div className="sticky top-0 z-50 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
                <div className="container py-3 sm:py-0">
                    <div className="flex justify-between items-center">
                        <div className="min-w-[215px]">
                            <a href="#" className="flex items-center gap-2 text-2xl sm:text-2xl font-bold">
                                <img 
                                    src={ foodLogo } 
                                    alt="Food Logo"
                                    className="w-10" 
                                />
                                Banora Tree
                            </a>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <DarkMode />
                            </div>

                            <ul className="hidden sm:flex gap-4">
                                <li>
                                    <a href="#" className="inline-block py-4 px-4 hover:text-primary" >Home</a>
                                </li>

                                <li>
                                    <a href="#" className="inline-block py-4 px-4 hover:text-primary" >About</a>
                                </li>

                                <li>
                                    <a href="#" className="inline-block py-4 px-4 hover:text-primary" >Contact</a>
                                </li>
                            </ul>

                            <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-3">
                                Order
                                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Navbar }