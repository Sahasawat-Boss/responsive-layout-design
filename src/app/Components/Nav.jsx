"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [activeItem, setActiveItem] = useState(0); // Default active is "Product & Services"
    const [hoveredSocial, setHoveredSocial] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State to toggle mobile menu
    const [menuButtonHovered, setMenuButtonHovered] = useState(false); // Track hover state for mobile menu button

    const menuItems = [
        { href: "/", label: "Product & Services" },
        { href: "/", label: "Promotions" },
        { href: "/", label: "News & Events" },
        { href: "/", label: "Safety Tips" },
        { href: "/", label: "FAQS" },
        { href: "/", label: "Location" },
    ];

    return (
        <header className="bg:white md:bg-black text-white py-2 w-full">
            <div className="flex justify-between items-center md:px-4 lg:px-8">

                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-wrap space-x-3 animate-fade-in-right">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={`flex items-center px-3 py-2 bg-black ${activeItem === index ? "text-orange-500" : "text-white"
                                } hover:text-orange-500`}
                            onClick={() => setActiveItem(index)} // Set active item on click
                        >
                            <Image
                                src={activeItem === index ? "/images/nav/SOne_index_menu02.png" : "/images/nav/SOne_index_menu01.png"}
                                alt="icon"
                                width={20}
                                height={20}
                                className="mr-2"
                            />
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Social Links */}
                <div className="hidden md:flex space-x-3 animate-fade-in-left">
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

                {/* Mobile Menu Button */}
                <div className="absolute top-2 left-2 rounded-md bg-black md:hidden hover:scale-110 transition duration-200">
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        onMouseEnter={() => setMenuButtonHovered(true)}
                        onMouseLeave={() => setMenuButtonHovered(false)}
                    >
                        <Image
                            src={menuButtonHovered || mobileMenuOpen ? "/images/nav/SOne_Mobile_menuho.png" : "/images/nav/SOne_Mobile_menu.png"}
                            alt="Menu"
                            width={30}
                            height={30}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Sliding Drawer) */}
            <div className={`lg:hidden fixed top-0 right-0 h-full w-72 bg-black p-5 transition-transform ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"} z-50`}>
                <nav className="flex flex-col mt-10 space-y-4">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={`text-lg ml-2 px-3 py-2 rounded-md ${activeItem === index ? "text-orange-500 bg-gray-700" : "text-white"
                                } hover:text-orange-500 hover:bg-gray-600`}
                            onClick={() => {
                                setActiveItem(index); // Set active item
                                setMobileMenuOpen(false); // Close menu
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Social Links */}
                <div className="flex space-x-4 mt-6 ml-6">
                    <Link
                        href="#"
                        onMouseEnter={() => setHoveredSocial("facebook")}
                        onMouseLeave={() => setHoveredSocial(null)}
                    >
                        <Image
                            src={hoveredSocial === "facebook" ? "/images/nav/SOne_index_btfacebook1.png" : "/images/nav/SOne_index_btfacebook.png"}
                            alt="Facebook"
                            width={30}
                            height={30}
                        />
                    </Link>
                    <Link
                        href="#"
                        onMouseEnter={() => setHoveredSocial("twitter")}
                        onMouseLeave={() => setHoveredSocial(null)}
                    >
                        <Image
                            src={hoveredSocial === "twitter" ? "/images/nav/SOne_index_bttwitter1.png" : "/images/nav/SOne_index_bttwitter.png"}
                            alt="Twitter"
                            width={30}
                            height={30}
                        />
                    </Link>
                    <Link
                        href="#"
                        onMouseEnter={() => setHoveredSocial("youtube")}
                        onMouseLeave={() => setHoveredSocial(null)}
                    >
                        <Image
                            src={hoveredSocial === "youtube" ? "/images/nav/SOne_index_btyoutube1.png" : "/images/nav/SOne_index_btyoutube.png"}
                            alt="YouTube"
                            width={30}
                            height={30}
                        />
                    </Link>
                </div>
            </div>

            {/* Overlay when mobile menu is open */}
            {mobileMenuOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setMobileMenuOpen(false)}></div>}
        </header>
    );
}
