
import HeroSection from "../components/Landing/HeroSection"
import AboutSection from "../components/Landing/AboutSection"
import Achievements from "../components/Landing/Achievements"  
import Testimonials from "../components/Landing/Testimonials"
import VolunteersSection from "../components/volunteers/VolunteersSection"
import Donaciones from "../components/Donation/Donaciones"

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 px-6">
      <HeroSection />
      <div className="max-w-7xl mx-auto pt-10 px-6">
        <AboutSection />
        <VolunteersSection />
        <Donaciones />
        <Achievements />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;