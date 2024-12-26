import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


interface SwiperProps {
    children: React.ReactNode;
    slidesPerView?: number;
    spaceBetween?: number;
    loop?: boolean;
    autoplay?: boolean
    speed?: number;
    breakpoints?: {
        [key: number]: {
            slidesPerView: number;
            spaceBetween: number;
        }
    };
    navigation?: boolean;
    pagination?: boolean;
    scrollbar?: boolean;
    mousewheel?: boolean;
    keyboard?: boolean;
    freeMode?: boolean;
    grabCursor?: boolean;
    centeredSlides?: boolean;
    effect?: string;
    onSwiper?: (swiper: any) => void;
    onSlideChange?: (swiper: any) => void;
}

const SwiperFC = ({ children, ...props }: SwiperProps) => {
    const slides = React.Children.map(children, (child) => {
        return (
            <SwiperSlide>
                {child}
            </SwiperSlide>
        );
    });

    return (
        <Swiper {...props} modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}>
            {slides}
        </Swiper>
    );
}

export default SwiperFC;