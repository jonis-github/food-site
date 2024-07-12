import footerLogo from "../assets/food-logo.png"

import { FaLocationArrow, FaMobileAlt, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa" 

function Footer() {
    return(
        <>
            <div className="bg-gray-100 dark:bg-gray-950 dark:text-white">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid md:grid-cols-3 py-5">
                        <div className="py-8 px-4">
                            <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                                <img src={ footerLogo } alt="Footer logo" className="max-w-[50px]"/>
                                BANORA
                            </h1>

                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae delectus incidunt voluptatem ea ullam quis! Velit maxime eum optio dolorem?
                            </p>
                            <br/>
                            {/* contact */}
                            <div className="flex items-center gap-3 mt-6">
                                <FaLocationArrow />
                                <p>Bacoor, Cavite Philippines</p>
                            </div>

                            <div className="flex items-center gap-3 mt-3">
                                <FaMobileAlt />
                                <p>(09)43-123-4567</p>
                            </div>

                            {/* social handles */}
                            <div>
                                <div className="flex items-center gap-3 mt-6">
                                    <a href="#">
                                        <FaInstagram className="text-3xl" />
                                    </a>

                                    <a href="#">
                                        <FaFacebook className="text-3xl" />
                                    </a>

                                    <a href="#">
                                        <FaLinkedin className="text-3xl" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                            <div>
                                <div className="py-8 px-4">
                                    <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Important Links</h1>
                                     
                                    <ul className="flex flex-col gap-3"> 
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Services</li>
                                        <li>Login</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <div className="py-8 px-4">
                                    <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Important Links</h1>
                                     
                                    <ul className="flex flex-col gap-3"> 
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Services</li>
                                        <li>Login</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <div className="py-8 px-4">
                                    <h1 className="text-xl font-bold text-justify sm:text-left mb-3">Important Links</h1>
                                     
                                    <ul className="flex flex-col gap-3"> 
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Services</li>
                                        <li>Login</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center py-10 border-t-2 border-gray-300/50">
                        Jonis Daclag
                    </div>
                </div>
            </div>
        </>
    )
}

export { Footer }