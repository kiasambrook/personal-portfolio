import Link from '@components/Link';
import Logo from '@components/menu/Logo';
import MobileMenu from './MobileMenu';

interface NavbarProps {
    links: {
        href: string;
        text: string;
    }[]
}

const Navbar = ({ links }: NavbarProps) => {
    return (
        <nav className="border-b-4 border-gray-800">
            <div className="flex justify-between text-gray-800 items-center h-16 px-4 w-1/2 mx-auto my-10 bg-white box-shadow border-4 border-gray-800">
                <Logo />
                <MobileMenu links={links} />
                <ul className="hidden md:flex">
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