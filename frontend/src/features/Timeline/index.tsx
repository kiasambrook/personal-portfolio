import SectionTitle from "@components/SectionTitle";
import TimelineItem from "./components/TimelineItem";
import { useEffect, useState } from "react";
import ExperienceApi from "./api/service";
import { Experience } from "@customTypes/experience";
import dayjs from 'dayjs';

const Timeline = () => {
    const [timeLineItems, setTimelineItems] = useState<Experience[]>([])

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const experienceApi: ExperienceApi = new ExperienceApi()
                setTimelineItems(await experienceApi.fetchExperiences())
            } catch (error) {
                console.error('Error fetching skills:', error);
            }
        }

        fetchSkills()
    }, [])

    const renderTimelineItems = () => {
        return timeLineItems.map((item, index) => {
            const startDate = dayjs(item.start_date).format("MMM YYYY")
            const endDate = item.is_current == true ? "Present" : dayjs(item.end_date).format("MMM YYYY")
            const date = startDate + " - " + endDate

            return (
                <div className="relative" key={index}>
                    <TimelineItem
                        key={index}
                        title={item.title}
                        subtitle={item.subtitle + " | " + date}
                        icon={item.icon}
                        description={item.description}
                    />

                    {DrawLine(index)}
                </div>
            )
        })
    }

    const DrawLine = (itemPos: number) => {
        if (timeLineItems.length - 1 == itemPos) return (<></>);

        return (
            <span className="-z-10 absolute left-2 bottom-0 w-1 bg-gray-400 h-14" data-aos="fade-right" data-aos-offset="300"></span>
        )
    }

    return (
        <section id="timeline" className="my-4 h-fit pb-10 mb-10 container">
            <div className="mb-10 px-3 lg:px-0">
                <SectionTitle>Timeline</SectionTitle>
                <p>See where I've been...</p>
            </div>

            <div className="flex flex-col px-7 lg:px-0">
                {renderTimelineItems()}
            </div>
        </section>
    )
}

export default Timeline;