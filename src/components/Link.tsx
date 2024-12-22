import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {scrollToSection} from '@utils/srollTo';

interface LinkProps {
    href: string;
    text: String;
    className?: string;
    scrollTo?: boolean
    arrow?: boolean;
}

const Link = ({ href, text, className = "", scrollTo = false, arrow = false }: LinkProps) => {
    className = `no-underline hover:highlighter ${className}`;

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={(e) => onClick(e, scrollTo)}>
            {text}
            {arrow ? <FontAwesomeIcon icon={faArrowRight}  className='ml-2 hidden group-hover:inline-block' /> : null}
        </a >
    );
};

/**
 * Scroll to the target element if scrollTo is true
 * @param e mouse event
 */
const onClick = (e: React.MouseEvent<HTMLAnchorElement>, scrollTo: boolean) => {
    if (!scrollTo) return;
    scrollToSection(e)
}

export default Link;