import NavBar from "./components/Landing/NavBar"
import HeroSection from "./components/Landing/HeroSection"
import AboutSection from "./components/Landing/AboutSection"
import Modulos from "./components/Landing/Modulos"
import Achievements from "./components/Landing/Achievements"  
import Testimonials from "./components/Landing/Testimonials"
import Footer from "./components/Landing/Footer"
import VolunteersSection from "./components/volunteers/VolunteersSection"

function App() {
  
  return (
   <>

    <NavBar ></NavBar>
    <div className="max-w-7xl  mx-auto pt-10 px-6">
    <HeroSection></HeroSection>
    <div className=" max-w-7x1 mx auto pt-10 px-6">
    <AboutSection></AboutSection>
    <Modulos></Modulos>
    <VolunteersSection></VolunteersSection>
    <Achievements></Achievements> 
    <Testimonials></Testimonials>
    </div>
    <Footer></Footer>
    </div>
    

   </>
  )
}

export default App

