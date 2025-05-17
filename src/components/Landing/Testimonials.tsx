import { testimonials } from '../../constanst/index';

const Testimonials = () => {
    // Función para generar un color crema aleatorio
    const getRandomCreamColor = () => {
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
            <div className='flex flex-wrap justify-center gap-6'>
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className='relative w-full sm:w-[45%] lg:w-[30%] px-4 pt-14 pb-6 rounded-xl shadow-md '
                        style={{ backgroundColor: getRandomCreamColor() }}
                    >
                        {/* Imagen centrada arriba */}
                        <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 '>
                            <img
                                className='w-16 h-16 rounded-full border-4 border-white shadow-lg '
                                src={testimonial.image}
                                alt={testimonial.user}
                            />
                        </div>
                        {/* Contenido de la tarjeta */}
                        <div className='text-center mt-4'>
                            <h6 className='text-lg font-semibold'>{testimonial.user}</h6>
                            <span className='block text-sm font-normal italic text-neutral-600 mb-4'>
                                {testimonial.company}
                            </span>
                            <p className='text-md font-light'>{testimonial.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
