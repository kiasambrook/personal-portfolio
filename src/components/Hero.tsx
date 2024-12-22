import Highlight from './HighlightText';
import Star from './Star';
import CTAButton from './CTAButton';

const Hero = () => {
    return (
        <section className='h-screen flex flex-col justify-center items-center my-8 text-center md:text-left md:my-0  md:flex-row md:items-center md:justify-between  container mx-auto'>
            <div className='w-full'>
                <p className='text-xl'>Hi, I'm</p>
                <h1 className='text-6xl font-bold'>Kia Sambrook</h1>
                <h2 className='text-5xl mt-2'><Highlight>Web Developer</Highlight></h2>
                <CTAButton
                    href='#projects'
                    highlighter
                    arrow
                >See Portfolio</CTAButton>
            </div>

            <div className='flex justify-center md:justify-start w-full -rotate-3'>
                <div className='h-96 w-96 bg-white border-4 border-black flex justify-center items-center box-shadow relative pb-4'>
                    <Star
                        classes='fill-pink-500 absolute bottom-[-100px] right-[-100px] rotate-12'
                    />
                    <div className='h-72 w-80 bg-gray-400 border-black border-4'></div>
                </div>
            </div>

        </section>
    );
};

export default Hero;