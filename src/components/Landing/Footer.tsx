//import { communityLinks, platformLinks } from "../../constanst/index";

const Footer = () => {
  return (
    <footer className=" text-white py-10 border-t border-neutral-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        
        
        <div className="flex flex-col items-center lg:items-start">
          <img src="../assets/profile-pictures/logoasoniped.png" alt="Logo ASONIPED" className="h-16 mb-3" /> 
          <p className="text-center lg:text-left">ASONIPED Digital</p>
        </div>

        
        <div>
          <h3 className="text-base font-semibold mb-4 border-b border-neutral-700 pb-2">Contacto</h3>
          <p className="flex items-center gap-2 mb-2"> Oficina: (506) 2685-1212</p>
          <p className="flex items-center gap-2"> asoniped@gmail.com</p>
        </div>

        
        <div>
          <h3 className="text-base font-semibold mb-4 border-b border-neutral-700 pb-2">Ubicación</h3>
          <p className="flex items-center gap-2 mb-2">📍 Nicoya</p>
          <p>100 mts norte de Pisos La Bajura</p>
        </div>

        
        <div>
          <h3 className="text-base font-semibold mb-4 border-b border-neutral-700 pb-2">Horarios</h3>
          <p className="flex items-center gap-2 mb-2">🕒 Lunes a Viernes</p>
          <p>7:00 am – 5:00 pm</p>
        </div>
      </div>

      
      <div className="mt-10 text-center text-white text-sm">
        <p>Copyright 2025 © ASONIPED. Derechos Reservados</p>
        <div className="mt-4">
          <a href="#" className="text-white text-lg"></a> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;