import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Skill } from "@customTypes/skill";
import React from "react";

interface PolaroidShapeProps {
    image: string;
    title: string;
    tags: Skill[];
    link: string
}

const PolaroidShape: React.FC<PolaroidShapeProps> = ({ image, title, tags, link }) => {
    const tagLength = tags.length;

    return (
        <div className="md:w-1/3 h-fit py-6 px-6 lg:px-8 bg-white border-4 border-black box-shadow ">
            <img src={image} alt={title} className="border-4 border-black" />
            <div className="flex justify-between mt-4">
                <div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <ul className="space-x-2 w-full flex flex-wrap">
                        {tags.map((tag, index) => (
                            <React.Fragment key={index}>
                                <li>{tag.name}</li>
                                { ++index < tagLength &&
                                    <span className="p-0 m-0">-</span>
                                }
                            </React.Fragment>
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