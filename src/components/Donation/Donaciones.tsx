import React from 'react';
import { Link } from '@tanstack/react-router';

const Donaciones: React.FC = () => {
  return (
    <section className="my-12 px-6 text-gray-800">
      <h2 className="text-orange-500 text-5xl text-center mb-4 py-6">¿Por qué ayudar a ASONIPED?</h2>
      <p className="max-w-3xl mx-auto text-center text-lg mb-12">
        Las donaciones a ASONIPED permiten ofrecer paseos recreativos a los niños, renovar el mobiliario como pupitres
        y mantener en buen estado las instalaciones de la organización. Cada aporte suma a mejorar su calidad de vida.
      </p>

      {/* Tarjetas de inversión del dinero */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[
          {
            title: 'Paseos y actividades',
            description: 'Creamos experiencias recreativas para que los chicos disfruten, aprendan y creen recuerdos inolvidables fuera del aula.',
            image: '/path-to-image1.jpg',
          },
          {
            title: 'Compra de pupitres',
            description: 'Renovamos el mobiliario para garantizar que todos tengan un espacio cómodo y digno para estudiar y desarrollarse.',
            image: '/path-to-image2.jpg',
          },
          {
            title: 'Mantenimiento institucional',
            description: 'Contribuyes al buen funcionamiento de ASONIDEP, asegurando espacios limpios, seguros y adecuados para todos.',
            image: '/path-to-image3.jpg',
          },
        ].map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-6 text-center flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              </div>
              <Link
                to="/donaciones/formulario"
                className=" text-white w-full bg-gradient-to-r from-orange-500 to-orange-800 py-2 rounded hover:bg-orange-600 transition-colors hover:opacity-80">
                Quiero donar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Donaciones;