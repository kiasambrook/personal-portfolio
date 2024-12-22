
interface HamburgerProps {
    onClick: () => void;
    isActive: boolean;
}

const Hamnurger = ({ onClick, isActive }: HamburgerProps) => {
    return (
        <button type="button" aria-expanded="false" className='md:hidden' onClick={onClick}>
            <span className="sr-only">Menu</span>
            <div aria-hidden="true" className='flex flex-col justify-center items-center'>
                <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isActive ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`} >
                </span>
                <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5  ${isActive ? 'opacity-0' : 'opacity-100'}`} ></span>
                <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isActive ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} ></span>
            </div>
        </button>
    )
}

export default Hamnurger;