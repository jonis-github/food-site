import { useState } from "react"

import vector from "../assets/vector3.png"
import biryani2 from "../assets/biryani2.png"
import biryani3 from "../assets/biryani3.png"
import biryani5 from "../assets/biryani5.png"
import chickenWings from "../assets/chicken-wings-transparent.png"
import monggo from "../assets/monggo-transparent.png"
import pinakbet from "../assets/pinakbet-transparent.png"
import porkNilaga from "../assets/pork-nilaga-transparent.png"
import porkSinigang from "../assets/pork-sinigang-transparent.png"

const imageList = [
    // { id: 1, img: biryani2 }, { id: 2, img: biryani3 }, { id: 3, img: biryani5 }
    { id: 1, img: chickenWings }, { id: 2, img: monggo }, { id: 3, img: pinakbet }
]

const bgImage = {
    backgroundImage: `url( ${ vector } )`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
}

function Hero() {
    const [ imageId, setImageId ] = useState( pinakbet )

    return(
        <>
            <div 
                style={ bgImage }
                className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center"
            >
                <div className="container pb-8 sm:pb-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        {/* text content section */}
                        <div 
                            data-aos="zoom-out"
                            data-aos-duration="400"
                            data-aos-once="true"
                            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
                        >
                            <h1 className="text-5xl sm:text-6xl lg-text-7xl font-bold z-10">
                                Welcome to the Banora Tree
                            </h1>

                            <p className="text-sm">
                            <p>This webapp is a sample project. </p> 
                                <p>
                                    Here is the original video 
                                    <a 
                                        className="text-primary" 
                                        href="https://www.youtube.com/watch?v=rsi54swLqrU"
                                    >
                                        {" "}Link
                                    </a> 
                                </p>
                                <p className="text-2xl">
                                    Credit to <span>"The</span> <span className="bg-gradient-to-tr from-primary to-secondary text-transparent bg-clip-text" >Coding</span><span> Journey"</span></p>
                                </p>

                            <div>
                                <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200 ">Order Now</button>
                            </div>
                        </div>

                        {/* image section */}
                        <div className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">
                            {/* main image section */}
                            <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-visible mb-20">
                                <img 
                                    data-aos="zoom-in"
                                    data-aos-duration="300"
                                    data-aos-once="true"
                                    src={ imageId }
                                    alt=""
                                    className="w-[300px] sm:w-[450px] lg:w-[350px] mx-auto spin "
                                />
                            </div>
                               
                            {/* image list section */}
                            <div className=" flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:-right-10 lg:py-2 justify-center gap-4 absolute bottom-[0px]  bg-white/30 rounded-full">
                                {
                                    imageList.map( ( item ) => (
                                        <img 
                                            data-aos="zoom-in"
                                            data-aos-duration="300"
                                            data-aos-once="true"
                                            key={ item.id }
                                            src={ item.img }
                                            className="max-w-[90px] h-[80px] object-contain hover:scale-105 duration-200 m-2"
                                            onClick={ () => setImageId( item.img ) }
                                        />
                                    ) )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Hero }