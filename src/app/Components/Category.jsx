import React from "react";

const categories = [
    { label: "ยาง" },
    { label: "เบรก" },
    { label: "แบตเตอรี่" },
    { label: "โช๊คอัพ" },
    { label: "น้ำมันเครื่องและไส้กรอง" },
    { label: "การรับประกันสินค้า" },
];

const CategoryList = () => {
    return (
        <div className="flex justify-around gap-4 border border-gray-300">
            {categories.map((category, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center justify-center w-32 h-12 bg-orange-500 text-yellow-200 font-bold text-center p-4 shadow-md"
                >
                    <span className="text-3xl">{category.icon}</span>
                    <span className="text-sm mt-1">{category.label}</span>
                </div>
            ))}
        </div>
    );
};

export default CategoryList;
