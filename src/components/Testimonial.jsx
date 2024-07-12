import Slider from "react-slick"

const testimonialData = [
    {
        id: 1,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate voluptas, quidem porro maiores ullam, dolor itaque odit, ipsam laboriosam praesentium minus. Sit dolorum fugit molestiae nostrum culpa voluptatem reiciendis!",
        img: "https://picsum.photos/101/101"
    },
    {
        id: 2,
        name: "John Smith",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate voluptas, quidem porro maiores ullam, dolor itaque odit, ipsam laboriosam praesentium minus. Sit dolorum fugit molestiae nostrum culpa voluptatem reiciendis!",
        img: "https://picsum.photos/102/102"
    },
    {
        id: 3,
        name: "John Wick",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cupiditate voluptas, quidem porro maiores ullam, dolor itaque odit, ipsam laboriosam praesentium minus. Sit dolorum fugit molestiae nostrum culpa voluptatem reiciendis!",
        img: "https://picsum.photos/103/103"
    },
]

function Testimonial() {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    }

    return(
        <>
            <div 
                data-aos="fade-up"
                data-aos-duration="300"
                className="py-10"
            >
                <div className="container">
                    {/* header section */}
                    <div className="text-center mb-20 max-w-[400px] mx-auto">
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Testimonial
                        </p>

                        <h1 className="text-3xl font-bold dark:text-white">
                            Testimonial
                        </h1>

                        <p className="text-xs text-gray-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis unde optio ad saepe consequuntur, sapiente culpa molestiae odit voluptates neque, commodi quae repellendus laboriosam id, distinctio modi adipisci. Earum, doloribus.
                        </p>
                    </div>

                    {/* testimonial section */}
                    <div 
                        data-aos="zoom-in"
                        data-aos-duration="300"
                        className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
                    >
                        <Slider {...settings} >
                            {
                                testimonialData.map( ( { id, name, text, img } ) => {
                                    return(
                                        <div key={ id } className="my-6">
                                            <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                                                <img 
                                                    src={ img } 
                                                    alt={ name } 
                                                    className="rounded-full mx-auto block"
                                                />

                                                <p className="text-gray-500 text-sm">{ text }</p>

                                                <h1 className="text-xl font-bold dark:text-white">{ name }</h1>

                                                <p className="text-black/20 dark:text-white text-9xl font-serif absolute top-0 right-0">,,</p>
                                            </div>
                                        </div>
                                    )
                                } )
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Testimonial }