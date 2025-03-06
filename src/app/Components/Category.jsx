"use client"

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

    return (
        <div className="flex justify-center gap-2.5">
            {categories.map((category, index) => (
                <div
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <Image
                        src={hoveredIndex === index ? category.hoverImage : category.image}
                        alt={category.label}
                        width={150}
                        height={50}
                        className="object-cover hover:scale-110 transition"
                    />
                </div>
            ))}
        </div>
    );
};

export default CategoryList;
