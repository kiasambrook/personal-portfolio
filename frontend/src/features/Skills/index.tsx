import { FullWidthContent } from "@components/FullWidthContent";
import Swiper from "@components/Swiper";
import { Skill } from "@customTypes/skill";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Tools from "@components/icons/Tools";
import SectionTitle from "@components/SectionTitle";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useEffect, useState } from "react";
import SkillApi from "./api/service";

const Skills: React.FC = () => {
    const [skills, setSkills] = useState<Skill[]>([])

    useEffect(() => {
        const fetchSkills = async () => {
            try{
                const skillService: SkillApi = new SkillApi()
                setSkills(await skillService.fetchSkills())
            } catch(error) {
                console.error('Error fetching skills:', error);
            }
        }

        fetchSkills()
    })

    const renderSkills = () => {
        return skills.map((skill, index) => {
            return (
                <div key={index} className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faReact as IconProp} size="3x" className="text-white" />
                    <p className="text-xl text-white">{skill.name}</p>
                </div>
            );
        });
    }

    return (
        <section id="skills">
            <FullWidthContent
                classes="bg-black py-20 text-white">
                <div className="container mx-auto">
                <Tools classes="absolute fill-white right-20 w-36 max-h-36 h-full opacity-20" />
                <SectionTitle>Skills</SectionTitle>
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
                </div>
            </FullWidthContent>
        </section>
    );
};

export default Skills;
