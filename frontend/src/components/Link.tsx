import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { scrollToSection } from '@utils/srollTo';
import { RoughNotation } from "react-rough-notation";
import { useState } from 'react';

interface LinkProps {
    href: string;
    text: String;
    className?: string;
    scrollTo?: boolean
    arrow?: boolean;
}

const Link = ({ href, text, className = "", scrollTo = false, arrow = false }: LinkProps) => {
    className = `no-underline ${className}`;
    const [showHighlight, setShowHighlight] = useState(false);

    return (
        <RoughNotation type='highlight' show={showHighlight} color='#fde047' iterations={1} animationDuration={300}>
            <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={(e) => onClick(e, scrollTo)} onMouseEnter={() => setShowHighlight(true)} onMouseLeave={() => setShowHighlight(false)}>
                {text}
                {arrow ? <FontAwesomeIcon icon={faArrowRight} className=' ml-2 hidden group-hover:inline-block' /> : null}
            </a >
        </RoughNotation>
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