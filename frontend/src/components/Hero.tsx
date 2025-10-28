import Highlight from './HighlightText';
import Star from './decorations/Star';
import CTAButton from './CTAButton';

const Hero = () => {
    return (
        <section className='h-full flex flex-col justify-center items-center my-16 text-center md:flex-row md:items-center md:gap-20 md:justify-between relative'>
            <div className='w-full md:text-right'>
                <p className='text-xl'>Hi, I'm</p>
                <h1 className='text-6xl font-bold'>Kia Sambrook</h1>
                <h2 className='text-5xl mt-2'><Highlight>Web Developer</Highlight></h2>
                <CTAButton
                    href='#portfolio'
                    scrollTo={true}
                    arrow
                    sparks
                >See Portfolio</CTAButton>
            </div>

            <div className='flex justify-center md:justify-start mt-4 md:mt-0 w-full -rotate-3 relative'>
                <img src='/img/polaroid.png' alt='Polaroid' className='px-4 md:px-0' />
                <Star
                    classes='fill-red-500 absolute rotate-12 md:bottom-0 hidden md:block'
                />
            </div>
        </section>
    );
};

export default Hero;