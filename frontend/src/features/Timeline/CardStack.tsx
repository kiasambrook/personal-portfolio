import Card from "@components/Card";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CardStack() {
    const cardContainer = useRef<HTMLDivElement>(null);

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


    return (
        <div ref={cardContainer} className="grid justify-items-center">
            <Card title="Software Engineer I" subTitle="Company Ltd." className="rotate-3 p-7 col-start-1 col-end-2 row-start-1 row-end-2 ">
                <p className="font-semibold">August 2024 - present</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa asperiores, quaerat quis, repellendus dolor cupiditate alias voluptatem nesciunt voluptates, nemo fuga eos commodi accusamus reprehenderit ipsum laboriosam cumque est? A.</p>
            </Card>
            <Card title="Web Developer" subTitle="Company Ltd." className="-rotate-3 p-7 col-start-1 col-end-2 row-start-1 row-end-2 ">
                <p className="font-semibold">August 2022 - August 2024</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa asperiores, quaerat quis, repellendus dolor cupiditate alias voluptatem nesciunt voluptates, nemo fuga eos commodi accusamus reprehenderit ipsum laboriosam cumque est? A.</p>
            </Card>
            <Card title="BSc Computer Science" subTitle="University" className="rotate-3 p-7 col-start-1 col-end-2 row-start-1 row-end-2 ">
                <p className="font-semibold">1st Class Honors</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloribus cupiditate cum, praesentium laboriosam, voluptatem odit quos minus iusto dicta inventore perferendis. Perferendis pariatur optio explicabo doloremque, velit laudantium aspernatur!</p>
            </Card>
        </div>
    )
}