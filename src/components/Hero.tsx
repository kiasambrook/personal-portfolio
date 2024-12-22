import Highlight from './HighlightText';
import Star from './Star';
import Link from './Link';

const Hero = () => {
    return (
        <section className='h-screen flex items-center justify-between container mx-auto'>
            <div className='w-full'>
                <p className='text-xl'>Hi, I'm</p>
                <h1 className='text-6xl font-bold'>Kia Sambrook</h1>
                <h2 className='text-5xl mt-2'><Highlight>Web Developer</Highlight></h2>
                <button className=' bg-sky-300 w-1/2 border-4 border-black my-8 rounded-full p-4 group'>
                <Link
                href='#portfolio'
                text='See Portfolio'
                scrollTo={true}
                arrow={true}
                /></button>
            </div>

            <div className='flex justify-start w-full -rotate-3'>
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