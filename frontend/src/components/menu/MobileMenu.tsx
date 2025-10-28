import Close from "@components/icons/Close";
import Hamnurger from "@components/icons/Hamburger";
import Link from "@components/Link";
import { useState } from 'react';

interface MobileMenuProps {
    links: {
        href: string;
        text: string;
    }[]
}

const MobileMenu = ({ links }: MobileMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const menuClasses = `bg-pale-green text-2xl font-bold p-4 absolute h-screen w-screen top-0 left-0 z-30 overscroll-contain flex justify-between  ${isOpen ? 'block overlay-open' : 'hidden'}`;

    return (
        <>
            <Hamnurger onClick={handleClick} isActive={isOpen} />
            <div className={menuClasses}>
                <ul className="flex flex-col w-full place-items-center text-left justify-center">
                    {links.map((link, index) => (
                        <li key={index} className="">
                            <Link href={link.href} text={link.text} scrollTo={true} handleClick={handleClick} />
                        </li>
                    ))}
                </ul>
                <Close onClick={handleClick} classes="absolute top-10 right-10" />
            </div>
        </>
    );
}

export default MobileMenu;