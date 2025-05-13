
import { Routes, Route } from 'react-router-dom';
import FormularioDonacion from '../components/Donation/FormularioDonacion';



const AppRoutes = () => {
  return (
    <Routes>
      
      <Route path="/FormularioDonacion" element={<FormularioDonacion />} />
      
      
    </Routes>
  );
};

export default AppRoutes;
