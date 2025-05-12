import VolunteerCard from './VolunteerCard';

// Temporary mock data - we'll replace this with JsonBin data later
const mockVolunteers = [
  {
    id: '1',
    name: 'María Rodríguez',
    role: 'Coordinadora de Eventos',
    description: 'Apasionada por la organización de eventos inclusivos y la creación de espacios accesibles para todos.',
    imageUrl: undefined
  },
  {
    id: '2',
    name: 'Juan Pérez',
    role: 'Instructor de Talleres',
    description: 'Especialista en talleres de habilidades para la vida diaria y desarrollo personal.',
    imageUrl: undefined
  },
  {
    id: '3',
    name: 'Ana Martínez',
    role: 'Asistente de Comunicación',
    description: 'Dedicada a mejorar la comunicación y el alcance de nuestros programas en la comunidad.',
    imageUrl: undefined
  }
];

const VolunteersSection = () => {
  return (
    <div className='mt-20'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider'>
        Nuestros Voluntarios
      </h2>
      
      <div className='flex flex-wrap'>
        {mockVolunteers.map((volunteer) => (
          <div key={volunteer.id} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
            <VolunteerCard
              name={volunteer.name}
              role={volunteer.role}
              description={volunteer.description}
              imageUrl={volunteer.imageUrl}
            />
          </div>
        ))}
      </div>

      <div className='text-center mt-10'>
        <a 
          href="#" 
          className='inline-flex justify-center items-center text-center px-8 h-12 tracking-tight text-cl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200'
        >
          Ser Voluntario
        </a>
      </div>
    </div>
  );
};

export default VolunteersSection; 