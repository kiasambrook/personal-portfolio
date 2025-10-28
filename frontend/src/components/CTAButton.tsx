import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { scrollToSection } from '@utils/srollTo';
import { RoughNotation } from "react-rough-notation";
import { useState } from 'react';

interface CTAButtonProps {
    children: React.ReactNode;
    href: string;
    className?: string;
    scrollTo?: boolean;
    arrow?: boolean;
    sparks?: boolean;
}

const CTAButton = ({ children, href, className = "", scrollTo = false, arrow = false, sparks = false }: CTAButtonProps) => {
    const [showHighlight, setShowHighlight] = useState(false);

    className = `button-lines bg-sky-300 w-1/2 border-4 border-black my-8 rounded-full p-4 group relative md:mr-8 ${className}`;

    return (
        <div className='relative spark-btn'>
            <button className={className} onMouseEnter={() => setShowHighlight(true)} onMouseLeave={() => setShowHighlight(false)} onClick={(e) => onClick(e, scrollTo)} data-page-target={href}>
                <RoughNotation type='highlight' show={showHighlight} color='#fde047' iterations={1} animationDuration={300}>
                    <a href={href} rel="noopener noreferrer" className={`no-underline`}>
                        {children}
                        {arrow ? <FontAwesomeIcon icon={faArrowRight} className='ml-2 hidden group-hover:inline-block' /> : null}
                    </a>
                </RoughNotation>
            </button>
            {sparks &&
                <span className=''>
                    <span className="line line-1 left-[78%] right-auto md:left-auto md:right-[0%]"></span>
                    <span className="line line-2 left-[76%] md:left-auto md:right-[1%]"></span>
                    <span className="line line-3 left-[74%] md:left-auto md:right-[3%]"></span>
                </span>
            }
        </div>
    );
};

const onClick = (e: React.MouseEvent<HTMLButtonElement>, scrollTo: boolean) => {
    if (!scrollTo) return;
    scrollToSection(e)
}

export default CTAButton;