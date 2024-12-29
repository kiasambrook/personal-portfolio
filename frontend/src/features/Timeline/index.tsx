import Card from "@components/Card";
import SectionTitle from "@components/SectionTitle"
import Swiper from "@components/Swiper";

const Timeline = () => {
    return (
        <section id="timeline" className="my-4 w-full">
            <SectionTitle>Timeline</SectionTitle>
            <p>See where I've been...</p>

            <div className="">
                <Swiper
                    centeredSlides
                    slidesPerView={1}
                    effect={"cards"}
                    >
                    <Card title="Software Engineer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloribus cupiditate cum, praesentium laboriosam, voluptatem odit quos minus iusto dicta inventore perferendis. Perferendis pariatur optio explicabo doloremque, velit laudantium aspernatur!</p>
                    </Card>
                    <Card title="Software Engineer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloribus cupiditate cum, praesentium laboriosam, voluptatem odit quos minus iusto dicta inventore perferendis. Perferendis pariatur optio explicabo doloremque, velit laudantium aspernatur!</p>
                    </Card>
                    <Card title="Software Engineer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloribus cupiditate cum, praesentium laboriosam, voluptatem odit quos minus iusto dicta inventore perferendis. Perferendis pariatur optio explicabo doloremque, velit laudantium aspernatur!</p>
                    </Card>
                    <Card title="Software Engineer">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloribus cupiditate cum, praesentium laboriosam, voluptatem odit quos minus iusto dicta inventore perferendis. Perferendis pariatur optio explicabo doloremque, velit laudantium aspernatur!</p>
                    </Card>
                </Swiper>
            </div>
        </section>
    )
}

export default Timeline;