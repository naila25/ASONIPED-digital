import { testimonials } from '../../constanst/index';

const Testimonials = () => {
    // Función para generar un color crema aleatorio
    const getRandomCreamColor = () => {
        // Base crema (alto valor rojo y verde, azul medio/bajo)
        const red = 240 + Math.floor(Math.random() * 16);   // 240-255
        const green = 230 + Math.floor(Math.random() * 26); // 230-255
        const blue = 190 + Math.floor(Math.random() * 66);  // 190-255
        
        return `rgb(${red}, ${green}, ${blue})`;
    };
    
    return (
        <div className='mt-20 tracking-wide'>
            <h2 className='text-orange-600 text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20'>
                Que Piensan De Nosotros?
            </h2>
            <div className='flex flex-wrap justify-center'>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                        <div 
                            className='rounded-md p-6 text-md text-black border border-neutral-800 font-thin hover:scale-105 transition-transform duration-300'
                            style={{ backgroundColor: getRandomCreamColor() }}
                        >
                            <p>{testimonial.text}</p>
                            <div className='flex mt-8 items-start'>
                                <img 
                                    className='w-12 h-12 mr-6 rounded-full border border-neutral-300' 
                                    src={testimonial.image} 
                                    alt={testimonial.user} 
                                />
                            </div>
                            <h6>{testimonial.user}</h6>
                            <span className='text-sm font-normal italic text-neutral-600'>
                                {testimonial.company}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
}

export default Testimonials;