import { User } from 'lucide-react';

interface VolunteerCardProps {
  name: string;
  role: string;
  description: string;
  imageUrl?: string;
}

const VolunteerCard = ({ name, role, description, imageUrl }: VolunteerCardProps) => {
  return (
    <div className='p-6 border border-neutral-700 rounded-xl hover:border-orange-500 transition-colors duration-300'>
      <div className='flex items-center mb-4'>
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name} 
            className='w-16 h-16 rounded-full object-cover'
          />
        ) : (
          <div className='w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-800 flex items-center justify-center'>
            <User className='w-8 h-8 text-white' />
          </div>
        )}
        <div className='ml-4'>
          <h3 className='text-xl font-semibold'>{name}</h3>
          <p className='text-orange-500'>{role}</p>
        </div>
      </div>
      
      <p className='text-neutral-400 mb-6'>{description}</p>
      
      <a 
        href="#" 
        className='inline-flex justify-center items-center text-center w-full h-12 p-5 tracking-tight text-cl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200'
      >
        Ver Más
      </a>
    </div>
  );
};

export default VolunteerCard; 