
interface CloseProps {
    onClick: () => void;
    classes?: string;
}

const Close = ({ onClick, classes = "" }: CloseProps) => {
    return (
        <button type="button" aria-expanded="false" className={classes} onClick={onClick}>
            <span className="sr-only">Close</span>
            <div aria-hidden="true" className='flex flex-col justify-center items-center'>
                <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm rotate-45 translate-y-1`} >
                </span>
                <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 opacity-0`} ></span>
                <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -rotate-45 -translate-y-1`} ></span>
                </div>
        </button>
    )
}

export default Close;