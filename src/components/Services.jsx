import img2 from "../assets/biryani2.png"
import monggo from "../assets/monggo-transparent.png"
import porkNilaga from "../assets/pork-nilaga-transparent.png"
import porkSinigang from "../assets/pork-sinigang-transparent.png"

const servicesData = [
    {
        id: 1,
        img: monggo,
        name: "Monggo",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, accusamus officia nam cupiditate alias vitae corrupti eveniet. Animi, porro fuga?"
    },
    {
        id: 2,
        img: porkNilaga,
        name: "Nilagang Baboy",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, accusamus officia nam cupiditate alias vitae corrupti eveniet. Animi, porro fuga?"
    },
    {
        id: 3,
        img: porkSinigang,
        name: "Sinigang na Baboy",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, accusamus officia nam cupiditate alias vitae corrupti eveniet. Animi, porro fuga?"
    }, 
]

console.log( servicesData.length % 2 )

function Services() {
    return(
        <>
            <div className="py-10">
                <div className="container">
                    {/* header section */}
                    <div className="text-center mb-20 max-w-[400px] mx-auto">
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Our Services</p>

                        <h1 className="text-3xl font-bold dark:text-white">Services</h1>

                        <p className="text-xs text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta atque animi nulla ducimus ipsum eos hic vero rem saepe exercitationem.
                        </p>
                    </div>

                    {/* card section */}
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                            {
                                servicesData.map( ( { id, img, name, description } ) => (
                                    <div 
                                        data-aos="zoom-in"
                                        data-aos-duration="300"
                                        key={ id }
                                        className="max-w-[3000px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:text-white dark:hover:bg-primary duration-300 p-4 shadow-xl"
                                    >
                                        <div className="h-[100px]">
                                            <img 
                                                src={ img }
                                                alt={ name }
                                                className="max-w-[150px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 "
                                            />
                                        </div>

                                        <div className="p-4 text-center">
                                            <h1 className="text-xl font-bold dark:text-white">{ name }</h1>
                                            <p className="text-gray-500 text-sm line-clamp-2 dark:group-hover:text-white duration-300">{ description }</p>
                                        </div>
                                    </div>
                                ) )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Services }