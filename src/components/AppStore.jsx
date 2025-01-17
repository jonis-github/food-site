import appStoreImg from "../assets/app_store.png"
import playStoreImg from "../assets/play_store.png"
import gif from "../assets/mobile_bike.gif"

function AppStore() {
    return(
        <>
            <div className="bg-gray-100 dark:bg-gray-800 py-14">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                        <div 
                            data-aos="fade-up"
                            data-aos-duration="300"
                            className="space-y-6 max-w-xl mx-auto"
                        >
                            <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-gray-700 dark:text-gray-400">
                                Banora Tree is available for Android and IOS
                            </h1>

                            <div className="flex flex-wrap justify-center sm:justify-start items-center">
                                <a href="#">
                                    <img 
                                        src={ playStoreImg }
                                        alt="playstore"
                                        className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                                    />
                                </a>

                                <a href="#">
                                    <img 
                                        src={ appStoreImg }
                                        alt="appstore"
                                        className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                                    />
                                </a>
                            </div>
                        </div>

                        <div 
                            data-aos="zoom-in"
                            data-aos-duration="300"
                        >
                            <img 
                                src={ gif }
                                alt="gif"
                                className="mx-auto max-w-[300px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { AppStore }