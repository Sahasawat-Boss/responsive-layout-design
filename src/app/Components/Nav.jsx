"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [hoveredItem, setHoveredItem] = useState(0); // Default active is "Product & Services"
    const [hoveredSocial, setHoveredSocial] = useState(null);

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
            <div className="flex flex-col lg:flex-row justify-between items-center px-4">
                {/* Navigation Menu */}
                <nav className="flex flex-wrap justify-center md:justify-start space-x-3 animate-fade-in-right">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={`flex items-center px-3 py-2 bg-black ${hoveredItem === index ? "text-orange-500" : "text-white"
                                } hover:text-orange-500`}
                            onMouseEnter={() => setHoveredItem(index)}
                            onMouseLeave={() => setHoveredItem(0)} // Reset to default (Product & Services)
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

                {/* Social Links with Hover Effect */}
                <div className="flex space-x-3 mt-3 md:mt-0 animate-fade-in-left">
                    <Link href="#" onMouseEnter={() => setHoveredSocial("facebook")} onMouseLeave={() => setHoveredSocial(null)}>
                        <Image src={hoveredSocial === "facebook" ? "/images/nav/SOne_index_btfacebook1.png" : "/images/nav/SOne_index_btfacebook.png"} alt="Facebook" width={25} height={25} />
                    </Link>
                    <Link href="#" onMouseEnter={() => setHoveredSocial("twitter")} onMouseLeave={() => setHoveredSocial(null)}>
                        <Image src={hoveredSocial === "twitter" ? "/images/nav/SOne_index_bttwitter1.png" : "/images/nav/SOne_index_bttwitter.png"} alt="Twitter" width={25} height={25} />
                    </Link>
                    <Link href="#" onMouseEnter={() => setHoveredSocial("youtube")} onMouseLeave={() => setHoveredSocial(null)}>
                        <Image src={hoveredSocial === "youtube" ? "/images/nav/SOne_index_btyoutube1.png" : "/images/nav/SOne_index_btyoutube.png"} alt="YouTube" width={25} height={25} />
                    </Link>
                </div>
            </div>
        </header>
    );
}
