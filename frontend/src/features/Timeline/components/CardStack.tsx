import Card from "@components/Card";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';
import ExperienceApi from "../api/service";
import { Experience } from "@customTypes/experience";

gsap.registerPlugin(ScrollTrigger);

export default function CardStack() {
    const [experiences, setExperiences] = useState<Experience[]>([]);

    const cardContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const experienceService: ExperienceApi = new ExperienceApi();
                const fetcheExperiences = await experienceService.fetchExperiences();
                setExperiences(fetcheExperiences);
            } catch (error) {
                console.error('Error fetching experiences:', error);
            }
        };
        fetchExperiences();
    }, []);

    useGSAP(() => {
        const time = 100;
        const cards = gsap.utils.toArray("[data-card]");

        gsap.set(cards, {
            y: (index) => 30 * index,
            transformStyle: "preserve-3d", // For the perspecitve effect
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardContainer.current,
                start: "top 25%",
                end: `${window.innerHeight * 5} top`,
                scrub: true,
                pin: "#timeline",
                anticipatePin: 1,
            }
        });

        tl.from(cards.slice(1), {
            y: () => window.innerHeight,
            duration: time,
            stagger: {
                each: time
            }
        });

        tl.to(
            cards.slice(0, -1),
            {
                stagger: {
                    each: time
                }
            },
            time / 2
        );
    }, []);

    const formatDate = (date: Date | null) => {
        if (date === null) {
            return 'Present';
        }
        const newDate = new Date(date);

        return newDate.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
    }

    return (
        <div ref={cardContainer} className="grid justify-items-center">
            {experiences.map((experience, index) => (
                <Card key={index} title={experience.title} subTitle={experience.subtitle} className="rotate-3 p-7 col-start-1 col-end-2 row-start-1 row-end-2 ">
                    <p className="font-semibold">{formatDate(experience.start_date)} - {experience.is_current ? 'Present' : formatDate(experience.end_date)}</p>
                    <p>{experience.description}</p>
                </Card>

            ))}
        </div>
    )
}