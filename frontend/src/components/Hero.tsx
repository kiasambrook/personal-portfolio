import Highlight from './HighlightText';
import Star from './decorations/Star';
import CTAButton from './CTAButton';

const Hero = () => {
    return (
        <section className='h-full flex flex-col justify-center items-center my-16 text-center md:text-left md:flex-row md:items-center md:justify-between relative'>
            <div className='w-full'>
                <p className='text-xl'>Hi, I'm</p>
                <h1 className='text-6xl font-bold'>Kia Sambrook</h1>
                <h2 className='text-5xl mt-2'><Highlight>Web Developer</Highlight></h2>
                <CTAButton
                    href='#projects'
                    highlighter
                    arrow
                    sparks
                >See Portfolio</CTAButton>
            </div>

            <div className='flex justify-center md:justify-start w-full -rotate-3 relative'>
                <img src='/img/polaroid.png' alt='Polaroid' className='' />
                <Star
                        classes='fill-pink-500 absolute rotate-12 md:bottom-0'
                    />
            </div>
        </section>
    );
};

export default Hero;