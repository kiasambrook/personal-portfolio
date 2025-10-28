import SectionTitle from "@components/SectionTitle";
import CardStack from "./CardStack";
import TimelineItem from "./components/TimelineItem";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { TimelineItemInterface } from "./interface/TimelineItem";

const Timeline = () => {
    const [timeLineItems, setTimelineItems] = useState<TimelineItemInterface[]>([
        {
            title: "Software Engineer",
            subtitle: "Mintel Ltd. Aug 2024 - Present",
            icon: faBriefcase,
            description: "In-house developer working on features for Mintel’s corporate website and E-Commerce store."
        },
        {
            title: "Web Developer",
            subtitle: "gloversure. Aug 2022 - Aug 2024",
            icon: faBriefcase,
            description: "Focused on building websites primarily for clients in the travel sector, allowing customers to search and book UK and international holiday rentals. Also contributed to E-Commerce sites using Adobe Magento 2."
        },
        {
            title: "Business Information Technology",
            subtitle: "Aberystwyth University",
            icon: faGraduationCap,
            description: "Course included software engineering, full-stack web development, business marketing, and agile methodologies."
        }
    ])

    const renderTimelineItems = () => {
        return timeLineItems.map((item, index) => {
            return (
                <div className="relative" key={index}>
                <TimelineItem
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    icon={item.icon}
                    description={item.description}
                />

                {DrawLine(index)}
                </div>
            )
        })
    }

    const DrawLine = (itemPos: number) => {
        if(timeLineItems.length - 1 == itemPos) return(<></>);

        return(
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