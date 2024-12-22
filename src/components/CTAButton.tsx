import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface CTAButtonProps {
    children: React.ReactNode;
    href: string;
    className?: string;
    scrollTo?: boolean;
    arrow?: boolean;
    hightlighter?: boolean;
}

const CTAButton = ({ children, href, className = "", scrollTo = false, arrow = false, hightlighter = false }: CTAButtonProps) => {
    className = `no-underline ${ hightlighter ? "hover:highlight" : ""} ${className}`;

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
            {children}
            {arrow ? <FontAwesomeIcon icon={faArrowRight}  className='ml-2 hidden group-hover:inline-block' /> : null}
        </a >
    );
};