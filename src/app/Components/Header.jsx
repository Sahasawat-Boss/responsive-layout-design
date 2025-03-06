"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
    const [hoveredLang, setHoveredLang] = useState("thai");
    const [activeLink, setActiveLink] = useState(null);

    return (
        <header className="pt-1 px-2 w-full text-lg">
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
                {/* Logo - Always Left */}
                <div className="hover:scale-105 transition duration-300 hover:cursor-pointer animate-fade-in-left self-start md:self-start">
                    <Image alt="Logo" src="/logo/SOne_index_logo.png" width={250} height={250} />
                </div>

                {/* Right Section - Center on Mobile, Right on Larger Screens */}
                <div className="flex flex-col items-center md:items-end w-full sm:w-auto gap-2 animate-fade-in-right mt-3 sm:mt-0">
                    {/* Language Selection */}
                    <div className="flex space-x-2">
                        <div className="hover:scale-110 transition duration-300 hover:cursor-pointer">
                            <Image
                                src={hoveredLang === "thai" ? "/images/header/SOne_index_iconthai.jpg" : "/images/header/SOne_index_iconthai.jpg"}
                                alt="Thai Language"
                                width={25}
                                height={18}
                                onMouseEnter={() => setHoveredLang("thai")}
                                onMouseLeave={() => setHoveredLang(null)}
                            />
                        </div>
                        <div className="hover:scale-110 transition duration-300 hover:cursor-pointer">
                            <Image
                                src={hoveredLang === "eng" ? "/images/header/SOne_index_iconeng.jpg" : "/images/header/SOne_index_iconeng2.jpg"}
                                alt="English Language"
                                width={25}
                                height={18}
                                onMouseEnter={() => setHoveredLang("eng")}
                                onMouseLeave={() => setHoveredLang(null)}
                            />
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="relative flex items-center border border-orange-500 w-full sm:w-auto">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="outline-blue-600 px-2 w-full sm:w-auto"
                        />
                        <button className="hover:scale-125 transition">
                            <Image src="/images/header/SOne_index_btsearch.jpg" alt="Search Icon" width={28} height={28} />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="text-center sm:text-end animate-fade-in-up w-full sm:w-auto">
                        {[
                            { name: "About S-ONE |", href: "/" },
                            { name: "Job Opportunity |", href: "/" },
                            { name: "Contact Us |", href: "/" },
                            { name: "Site Map", href: "/" },
                        ].map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className={`px-2 hover:text-orange-600 hover:underline ${activeLink === index ? "text-orange-600" : ""
                                    }`}
                                onClick={() => setActiveLink(index)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
