"use client";

import Image from "next/image";
import { useState } from "react";
import TireSearch from "./TireSearch";

const images = [
    "/images/main/SOne_index_banner.jpg",
    "/images/main/banner_promotion_01.jpg",
    "/images/main/banner_promotion_02.jpg",
];

export default function Main() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <main className="flex flex-col lg:flex-row w-full my-4 lg:px-2 bg-white text-white relative gap-3">

            <TireSearch />

            {/* Main Image Full-Size */}
            <div className="relative w-full flex items-center justify-center bg-black animate-fade-in">
                <div className="relative w-full h-[200px] md:h-[250px] xl:h-[350px] overflow-hidden ">
                    <Image
                        src={images[currentIndex]}
                        alt="Main Image"
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full transform transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
                    />
                </div>

                {/* Thumbnail Selection Section */}
                <div className="absolute right-1 md:right-6 top-1/2 transform -translate-y-1/2 flex flex-col justify-center items-center gap-1 md:gap-2 xl:gap-3">
                    <button onClick={handlePrev} className="p-1 hover:scale-110 hover:cursor-pointer">
                        <Image src="/images/main/SOne_index_arrowup.png" alt="Previous" width={22} height={12} />
                    </button>
                    <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
                        {images.map((img, index) => (
                            <button key={index} onClick={() => setCurrentIndex(index)}
                                className={`border-2 transition-all duration-300 ease-in-out ${currentIndex === index ? 'border-orange-500 scale-105' : 'border-gray-400'
                                    }`}>
                                <Image
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    width={100}
                                    height={160}
                                    className="md:w-[110px] xl:w-[130px] md:h-auto xl:h-auto hover:cursor-pointer"
                                />
                            </button>
                        ))}
                    </div>
                    <button onClick={handleNext} className="p-1 hover:scale-110 hover:cursor-pointer">
                        <Image src="/images/main/SOne_index_arrowdown.png" alt="Next" width={22} height={12} />
                    </button>
                </div>
            </div>
        </main>
    );
}
