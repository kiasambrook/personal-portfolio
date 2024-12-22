import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { scrollToSection } from '@utils/srollTo';

interface CTAButtonProps {
    children: React.ReactNode;
    href: string;
    className?: string;
    scrollTo?: boolean;
    arrow?: boolean;
    highlighter?: boolean;
}

const CTAButton = ({ children, href, className = "", scrollTo = false, arrow = false, highlighter = false }: CTAButtonProps) => {
    className = `bg-sky-300 w-1/2 border-4 border-black my-8 rounded-full p-4 group ${className}`;

    return (
        <button className={className}>
            <a href={href} target="_blank" rel="noopener noreferrer" className={`no-underline ${highlighter ? "group-hover:highlighter" : ""}`} onClick={(e) => onClick(e, scrollTo)}>
                {children}
                {arrow ? <FontAwesomeIcon icon={faArrowRight} className='ml-2 hidden group-hover:inline-block' /> : null}
            </a>
        </button>
    );
};

const onClick = (e: React.MouseEvent<HTMLAnchorElement>, scrollTo: boolean) => {
    if (!scrollTo) return;
    scrollToSection(e)
}

export default CTAButton;