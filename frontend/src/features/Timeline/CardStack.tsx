import Card from "@components/Card";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';
import ExperienceApi from "./api/service";
import { Experience } from "@customTypes/experience";

gsap.registerPlugin(ScrollTrigger);

export default function CardStack() {
    const [experiences, setExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const experienceService: ExperienceApi = new ExperienceApi();
                setExperiences(await experienceService.fetchExperiences());
            } catch (error) {
                console.error('Error fetching experiences:', error);
            }
        }

        fetchExperiences();
    }, []);


    const cardContainer = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // if experiences is empty do nothing
        if (!experiences.length) return;

        const time = 100;
        const cards = gsap.utils.toArray("[data-card]");

        gsap.set(cards, {
            y: (index) => 10 * index,
            transformStyle: "preserve-3d", // For the perspecitve effect
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardContainer.current,
                start: "top 15%", // Adjusted start property
                end: "bottom bottom", // Adjusted end property to ensure pin waits until the end
                scrub: 3, // Adjusted scrub property to slow down the scrolling
                pin: "#timeline",
                anticipatePin: 1,
                markers: false,
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
    }, {
        dependencies: [experiences],
    }
    );

    const formatDate = (date: Date) => {
        const formatDate = new Date(date);
        return formatDate.toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric'
        });
    }

    return (
        <div ref={cardContainer} className="grid justify-items-center h-full">
            {experiences.map((experience, index) => {
                const rotationClasses = index % 2 === 0 ? "rotate-3" : "-rotate-3";
                return (
                    <Card
                        key={index}
                        title={experience.title}
                        subTitle={experience.subtitle}
                        className={`${rotationClasses} p-7 col-start-1 col-end-2 row-start-1 row-end-2 h-fit`}
                    >
                        <p className="font-semibold">{formatDate(experience.start_date)}</p>
                        <p>{experience.description}</p>
                    </Card>
                )
            })
            }
        </div>
    )
}