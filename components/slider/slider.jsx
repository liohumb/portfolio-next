import {Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import Image from 'next/image'

import 'swiper/css'

export default function Slider({reverse, work}) {
    return (
        <div className="slider">
            <Swiper breakpoints={{
                425: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 3
                },
                1024: {
                    slidesPerView: 4
                },
                1440: {
                    slidesPerView: 5
                }
            }}
                    direction={'horizontal'}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2000,
                        reverseDirection: reverse
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    className="mySwiper slider__swiper">
                {work.map( ( item ) => (
                    <SwiperSlide key={item.id}>
                        <Image src={item.img} alt=" " className="slider__swiper-image"/>
                    </SwiperSlide>
                ) )}
            </Swiper>
        </div>
    )
}