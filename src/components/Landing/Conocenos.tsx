
import quienesSomosImg from "../assets/profile-pictures/quienessomos.png"; 
 

const ConocenosSection = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
     
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-16">Conócenos</h2>

     
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-24">
        <img src={quienesSomosImg} alt="Quiénes somos" className="w-full lg:w-1/2 rounded-xl shadow-xl" />
        <div className="w-full lg:w-1/2">
          <h3 className="text-amber-700 text-2xl font-semibold mb-4"> ¿Qué es ASONIPED?</h3>
          <p className="text-neutral-700 text-lg">
            ASONIPED es una asociación sin fines de lucro que impulsa la inclusión y el desarrollo integral de personas con discapacidad en la región de Nicoya, promoviendo proyectos educativos, recreativos y sociales.
          </p>
        </div>
      </div>

      
      <div className="flex flex-col lg:flex-row-reverse items-center gap-10 mb-24">
        <img src={quienesSomosImg} alt="A quiénes ayudamos" className="w-full lg:w-1/2 rounded-xl shadow-xl" />
        <div className="w-full lg:w-1/2">
          <h3 className=" text-amber-700 text-2xl font-semibold mb-4"> ¿A Quiénes Ayudamos?</h3>
          <p className="text-neutral-700 text-lg">
            Ayudamos a niños, jóvenes y adultos con diversas condiciones de discapacidad, brindándoles acceso a educación especializada, actividades integradoras y apoyo familiar.
          </p>
        </div>
      </div>

      
      <div className="text-center mb-16">
        <h3 className="text-orange-600 text-xl font-bold mb-2">NUESTRO PROPÓSITO</h3>
        <h4 className=" text-black text-2xl font-semibold mb-2">Misión</h4>
        <p className="max-w-3xl mx-auto text-neutral-700">
          <strong>Impulsar proyectos educativos en comunidades indígenas y rurales en el mundo</strong>, a través de estrategias de colaboración y programas que permitan dar acceso a educación equitativa y de calidad a niños, niñas, jóvenes y adultos, con el fin de apoyar el desarrollo integral de la comunidad y con ello la reducción de desigualdades.
        </p>
      </div>

      <div className="text-center mb-16">
        <h3 className="text-orange-600 text-xl font-bold mb-2">NUESTRA META</h3>
        <h4 className=" text-black text-2xl font-semibold mb-2">Visión</h4>
        <p className="max-w-3xl mx-auto text-neutral-700">
          Ser una organización que provea soluciones educativas equitativas a niños, jóvenes y adultos que viven en comunidades indígenas y rurales vulnerables, reconocida por la calidad de sus servicios, y la excelencia de nuestro capital humano.
        </p>
      </div>

      <div className="text-center mb-8">
        <h3 className="text-orange-600 text-xl font-bold mb-2">NUESTRAS RAÍCES</h3>
        <p className="max-w-2xl mx-auto text-neutral-700 mb-10">
          Nuestras raíces son los valores que nos caracterizan y que nos ayudan a guiar nuestro camino, siempre con los pies bien puestos sobre la tierra y cerquita de la comunidad.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {['Solidaridad', 'Confianza', 'Coherencia', 'Justicia', 'Respeto', 'Transparencia'].map((valor, index) => (
            <div key={index} className="bg-orange-300 text-white px-6 py-3 rounded-full text-lg font-medium">
              {valor}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConocenosSection;
