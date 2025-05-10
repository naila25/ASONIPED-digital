import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import Modulos from "./components/Modulos"
import Achievements from "./components/Achievements"  
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

function App() {
  
  return (
   <>

   <NavBar ></NavBar>
    <div className="max-w-7xl  mx-auto pt-10 px-6">
    <HeroSection></HeroSection>
    <div className=" max-w-7x1 mx auto pt-10 px-6">
    <AboutSection></AboutSection>
    <Modulos></Modulos>
    <Achievements></Achievements> 
    <Testimonials></Testimonials>
    </div>
    <Footer></Footer>
    </div>

    

   </>
  )
}

export default App

