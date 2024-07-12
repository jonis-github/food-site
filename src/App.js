import { useEffect } from 'react';
import './App.css';
import { AppStore, Banner, Footer, Hero, Navbar, Services, Testimonial } from "./components"
import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  useEffect( () => {
    AOS.init( {
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    } )
    AOS.refresh()
  }, [] )

  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
