"use client";
import { type Image as Imagetype } from "@/lib/types";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type PropertyGalleryProps = {
    images: Imagetype[]
}

export default function PropertyGallery({ images }: PropertyGalleryProps) {


    return (
        
        <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            navigation
            >
            {images.map((image, index) => (
                <SwiperSlide key={index} className="relative">
                    <div className="absolute top-0 left-0 z-10 bg-black bg-opacity-50 text-white p-2">{index + 1} / {images.length}</div>
                    <Image 
                        src={image.url} alt={image.name} 
                        width={image.width} height={image.height}
                        layout="responsive"
                        />

                </SwiperSlide>
            ))} 
        </Swiper>

    )
}