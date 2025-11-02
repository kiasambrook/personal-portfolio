import { FullWidthContent } from "@components/FullWidthContent";
import Swiper from "@components/Swiper";
import { Skill } from "@customTypes/skill";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tools from "@components/icons/Tools";
import SectionTitle from "@components/SectionTitle";
import { useEffect, useState } from "react";
import SkillApi from "./api/service";
import { getIcon } from "@utils/iconMapping";
import Loading from "@components/Loading";

const Skills: React.FC = () => {
    const [skills, setSkills] = useState<Skill[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const skillService: SkillApi = new SkillApi()
                setSkills(await skillService.fetchSkills())
            } catch (error) {
                console.error('Error fetching skills:', error);
            } finally {
                setLoading(false)
            }
        }

        fetchSkills()
    }, [])

    const renderSkills = () => {
        return skills.map((skill, index) => {
            return (
                <div key={index} className="flex flex-col items-center">
                    <FontAwesomeIcon icon={getIcon(skill.icon)} size="3x" className="text-white mb-2" />
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
                    <SectionTitle classes="mb-4 px-3 lg:px-0">Skills</SectionTitle>
                    {loading &&
                        <Loading />
                    }
                    {skills.length > 0 && (
                        <Swiper
                            key={skills.length}
                            slidesPerView={2}
                            loop={true}
                            spaceBetween={30}
                            centeredSlides={true}
                            grabCursor={true}
                            autoplay={true}
                            navigation={false}
                            breakpoints={{
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                },
                                1070: {
                                    slidesPerView: 5,
                                    spaceBetween: 30
                                }
                            }}>
                            {renderSkills()}
                        </Swiper>
                    )}
                </div>
            </FullWidthContent>
        </section>
    );
};

export default Skills;
