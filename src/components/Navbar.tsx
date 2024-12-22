import Link from './Link';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface NavbarProps {
    title: string
    links: {
        href: string;
        text: string;
    }[]
}

const Navbar = ({ title, links }: NavbarProps) => {
    return (
        <nav className="border-b-4 border-gray-800">
            <div className="flex justify-between text-gray-800 items-center h-16 px-4 w-1/2 mx-auto my-10 bg-white box-shadow border-4 border-gray-800">
                <h1 className="text-2xl font-bold"><FontAwesomeIcon icon={faSmile} className='mr-2' />{title}</h1>
                <ul className="flex">
                    {links.map((link, index) => (
                        <li key={index} className="pl-4 ml-4 border-gray-800 border-l-2">
                            <Link href={link.href} text={link.text} scrollTo={true} />
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;