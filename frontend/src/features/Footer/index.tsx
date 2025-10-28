import Logo from "@components/menu/Logo";
import { faGithub, faInstagram, faLinkedin, faBluesky } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="py-10 border-t-4 border-black mt-10 text-center md:text-left md:flex justify-around">
            <Logo />
            <h4 className="text-lg mb-2 md:mb-0">Kia Sambrook {year} &copy;</h4>
            <div className="flex justify-center mb-2 md:mb-0">
                <a href="https://www.linkedin.com/in/kiasambrook" target="_blank" className="mx-2 hover:text-[#0077B5]"><FontAwesomeIcon size="xl"  icon={faLinkedin} /></a>
                <a href="https://www.github.com/kiasambrook" target="_blank" className="mx-2 hover:text-[#333]"><FontAwesomeIcon size="xl" icon={faGithub} /></a>
                <a href="https://www.instagram.com/kiasambrook" target="_blank" className="mx-2 hover:text-[#833ab4]"><FontAwesomeIcon size="xl"  icon={faInstagram} /></a>
                <a href="https://bsky.app/profile/thankia.bsky.social" target="_blank" className="mx-2 hover:text-[#87CEEB]"><FontAwesomeIcon size="xl"  icon={faBluesky} /></a>
            </div>
        </div>
    )
}

export default Footer;