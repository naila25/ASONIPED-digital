import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/Landing/NavBar"
import Footer from "./components/Landing/Footer"
import HomePage from './Pages/Home.page';
import FormularioDonacion from './components/Donation/FormularioDonacion';
import DonacionesPage from './Pages/Donaciones.page';

function App() {
  return (
    <div className="max-w-7xl  mx-auto pt-10 px-6">
      <NavBar />
      <div className="max-w-7xl mx-auto pt-10 px-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donaciones" element={<DonacionesPage />} />
          <Route path="/formularioDonacion" element={<FormularioDonacion />} />
          
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
