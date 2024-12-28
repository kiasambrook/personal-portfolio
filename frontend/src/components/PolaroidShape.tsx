import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface PolaroidShapeProps {
    image: string;
    title: string;
    skills: string[];
    link: string
}

const PolaroidShape: React.FC<PolaroidShapeProps> = ({ image, title, skills, link }) => {
    const skillLength = skills.length;

    return (
        <div className="w-1/3 h-full py-6 px-8 bg-white border-4 border-black box-shadow ">
            <img src={image} alt={title} className="bg-gray-400 h-80 w-full border-4 border-black" />
            <div className="flex justify-between mt-4">
                <div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <ul className="space-x-2 w-full flex flex-wrap">
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}{++index >= skillLength ? "" : " - "}</li>
                        ))}
                    </ul>
                </div>
                <a href={link} className="w-6 h-6 bg-black box-shadow text-white flex items-center justify-center">
                    <FontAwesomeIcon icon={faArrowRight} className="-rotate-45" />
                </a>
            </div>
        </div>
    );
}

export default PolaroidShape;