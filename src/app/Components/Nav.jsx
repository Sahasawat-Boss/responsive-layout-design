"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [hoveredItem, setHoveredItem] = useState(0); // Default hover on first item

    const menuItems = [
        { href: "/", label: "Product & Services" },
        { href: "/", label: "Promotions" },
        { href: "/", label: "News & Events" },
        { href: "/", label: "Safety Tips" },
        { href: "/", label: "FAQS" },
        { href: "/", label: "Location" },
    ];

    return (
        <header className="bg-black text-white py-2 shadow-md w-full">
            <div className="flex justify-between items-center px-4">
                <nav className="flex space-x-3">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="flex items-center px-3 py-2 bg-black text-white hover:text-orange-500"
                            onMouseEnter={() => setHoveredItem(index)}
                            onMouseLeave={() => setHoveredItem(0)} // Reset hover back to first item
                        >
                            <Image
                                src={hoveredItem === index ? "/images/nav/SOne_index_menu02.png" : "/images/nav/SOne_index_menu01.png"}
                                alt="icon"
                                width={20}
                                height={20}
                                className="mr-2"
                            />
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex space-x-3">
                    <Link href="#" className="p-2 bg-gray-700 rounded-md">FB</Link>
                    <Link href="#" className="p-2 bg-gray-700 rounded-md">Tw</Link>
                    <Link href="#" className="p-2 bg-gray-700 rounded-md">YT</Link>
                </div>
            </div>
        </header>
    );
}
