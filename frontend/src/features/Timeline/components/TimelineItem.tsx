import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";
import { TimelineItemInterface } from "../interface/TimelineItem";

const TimelineItem = ({ ...props }: TimelineItemInterface) => {
    return (
        <div className="flex relative mb-14" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div className="absolute -top-5 -left-5" data-aos="zoom-in" data-aos-offset="300" data-aos-delay="500">
                <FontAwesomeIcon icon={props.icon} size="xl" className="bg-sky-300 text-white p-3 w-7 h-7 rounded-full relative" />
            </div>
            <Card title={props.title} subtitle={props.subtitle} description={props.description} />
        </div>
    );
}

export default TimelineItem;
