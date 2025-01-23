import SectionTitle from "@components/SectionTitle";
import CardStack from "./CardStack";

const Timeline = () => {

    return (
        <section id="timeline" className="my-4 w-full h-screen pb-10 mb-10">
            <div className="mb-10">
                <SectionTitle>Timeline</SectionTitle>
                <p>See where I've been...</p>
            </div>

            <CardStack />
        </section>
    )
}

export default Timeline;