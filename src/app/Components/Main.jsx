"use client"

import Image from "next/image";
import { useState } from "react";

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
        <main className="flex flex-col md:flex-row w-full my-4 bg-white text-white relative gap-3">
            <div className="w-[450px] border border-orange-500">
                {/* Search Tire Header */}
                <div className="w-full bg-orange-500 text-center py-2">
                    <h2 className="text-xl font-bold">ค้นหายาง</h2>
                </div>

                {/* Search Form with Background Image */}
                <div className="w-full  bg-black text-white p-4 relative overflow-hidden">
                    <Image
                        src="/images/main/SOne_index_bg_searchtype.jpg"
                        alt="Search Background"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 opacity-100"
                    />
                    <div className="relative z-10 p-4">
                        <div className="space-y-3">
                            <div>
                                <label className="block font-semibold">หน้ากว้าง (มม.)</label>
                                <select className="w-full p-2 bg-white text-black">
                                    <option>--เลือกหน้ากว้าง--</option>
                                </select>
                            </div>
                            <div>
                                <label className="block font-semibold">ซีรีย์</label>
                                <select className="w-full p-2 bg-white text-black">
                                    <option>--เลือกซีรีย์--</option>
                                </select>
                            </div>
                            <div>
                                <label className="block font-semibold">กระทะล้อ</label>
                                <select className="w-full p-2 bg-white text-black">
                                    <option>--เลือกกระทะล้อ--</option>
                                </select>
                            </div>
                            <button className="w-full bg-orange-500 text-white py-2 hover:bg-gray-800">
                                ค้นหา
                            </button>
                        </div>
                    </div>
                </div>
            </div>

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
