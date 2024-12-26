import { FullWidthContent } from "@components/FullWidthContent";
import Swiper from "@components/Swiper";
import { Skill } from "./types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faGit, faPython, faWordpress, faLaravel } from '@fortawesome/free-brands-svg-icons';
import { RoughNotation } from "react-rough-notation";
import Tools from "@components/icons/Tools";

const Skills: React.FC = () => {
    const skills: Skill[] = [
        { title: "HTML5", icon: faHtml5 },
        { title: "CSS3", icon: faCss3 },
        { title: "JavaScript", icon: faJs },
        { title: "React", icon: faReact },
        { title: "Python", icon: faPython },
        { title: "Git", icon: faGit },
        { title: "Wordpress", icon: faWordpress },
        { title: "Laravel", icon: faLaravel }
    ];

    const renderSkills = () => {
        return skills.map((skill, index) => {
            return (
                <div key={index} className="flex flex-col items-center">
                    <FontAwesomeIcon icon={skill.icon} size="3x" className="text-white" />
                    <p className="sr-only">{skill.title}</p>
                </div>
            );
        });
    }

    return (
        <section id="skills">
            <FullWidthContent
                classes="bg-black py-20 text-white text-center">
                <Tools classes="absolute fill-white right-20 w-36 max-h-36 h-full opacity-20" />
                <div className="text-3xl font-semi-bold pb-8">
                    <RoughNotation type="underline" show={true}>
                        Skills
                    </RoughNotation>
                </div>
                <Swiper
                    slidesPerView={5}
                    loop={true}
                    spaceBetween={30}
                    centeredSlides={true}
                    grabCursor={true}
                    autoplay={true}
                    navigation={false}>
                    {renderSkills()}
                </Swiper>
            </FullWidthContent>
        </section>
    );
};

export default Skills;
