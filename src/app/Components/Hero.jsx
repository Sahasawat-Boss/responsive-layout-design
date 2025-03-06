"use client"

import Image from "next/image";
import { useState } from "react";
import TireSearch from "./TireSearch"

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
            
            <TireSearch/>

            {/* Main Image Full-Size */}
            <div className="relative w-full flex items-center justify-center bg-black">
                <div className="relative w-full h-[250px] md:h-[300px] xl:h-[400px] overflow-auto">
                    <Image
                        src={images[currentIndex]}
                        alt="Main building"
                        layout="fill"
                        objectFit="cover"
                        className="transition-all duration-500 ease-in-out"
                    />
                </div>

                {/* Thumbnail Selection Section */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col justify-center items-center gap-2">
                    <button onClick={handlePrev} className="p-2">
                        <Image src="/images/main/SOne_index_arrowup.png" alt="Previous" width={28} height={15} />
                    </button>
                    <div className="flex flex-col gap-2">
                        {images.map((img, index) => (
                            <button key={index} onClick={() => setCurrentIndex(index)}
                                className={`border-2 ${currentIndex === index ? 'border-orange-500' : 'border-gray-400'}`}>
                                <Image src={img} alt={`Thumbnail ${index + 1}`} width={120} height={80} />
                            </button>
                        ))}
                    </div>
                    <button onClick={handleNext} className="p-2">
                        <Image src="/images/main/SOne_index_arrowdown.png" alt="Next" width={28} height={15} />
                    </button>
                </div>
            </div>
        </main>
    );
}
