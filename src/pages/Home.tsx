
import HeroSection from "../components/Landing/HeroSection"
import AboutSection from "../components/Landing/AboutSection" 
import Testimonials from "../components/Landing/Testimonials"
import VolunteersSection from "../components/volunteers/VolunteersSection"
import Donaciones from "../components/Donation/Donaciones"
import MostrarTalleres from "../components/Workshop/MostrarTalleres"

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 px-6">
      <HeroSection />
      <div className="max-w-7xl mx-auto pt-10 px-6">
        <AboutSection />
        <VolunteersSection />
        <Donaciones />
        <MostrarTalleres/>
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
