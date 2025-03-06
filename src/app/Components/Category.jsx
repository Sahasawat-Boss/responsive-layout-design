"use client";

import React, { useState } from "react";
import Image from "next/image";

const categories = [
    { label: "ยาง", image: "/images/categories/SOne_index_bt-tire.jpg", hoverImage: "/images/categories/SOne_index_bt-tire1.jpg" },
    { label: "เบรก", image: "/images/categories/SOne_index_bt-break.jpg", hoverImage: "/images/categories/SOne_index_bt-break1.jpg" },
    { label: "แบตเตอรี่", image: "/images/categories/SOne_index_bt-battery.jpg", hoverImage: "/images/categories/SOne_index_bt-battery1.jpg" },
    { label: "โช๊คอัพ", image: "/images/categories/SOne_index_bt-chokeup.jpg", hoverImage: "/images/categories/SOne_index_bt-chokeup1.jpg" },
    { label: "น้ำมันเครื่องและไส้กรอง", image: "/images/categories/SOne_index_bt-oil.jpg", hoverImage: "/images/categories/SOne_index_bt-oil1.jpg" },
    { label: "การรับประกันสินค้า", image: "/images/categories/SOne_index_bt-guarantee.jpg", hoverImage: "/images/categories/SOne_index_bt-guarantee1.jpg" },
];

const CategoryList = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [clickedIndex, setClickedIndex] = useState(null); // Track clicked item

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 justify-center px-2 xl:max-w-[1500px] xl:mx-auto animate-fade-in-up">
            {categories.map((category, index) => (
                <div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setClickedIndex(index)} // Set clicked index on click
                    className="flex justify-center items-center cursor-pointer"
                >
                    <Image
                        src={clickedIndex === index || hoveredIndex === index ? category.hoverImage : category.image}
                        alt={category.label}
                        width={150}
                        height={50}
                        className="object-cover hover:scale-105 transition duration-300 w-full h-auto"
                    />
                </div>
            ))}
        </div>
    );
};

export default CategoryList;
