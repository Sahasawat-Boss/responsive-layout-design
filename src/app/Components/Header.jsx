"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
    const [hoveredLang, setHoveredLang] = useState("thai");

    return (
        <header className="p-3 w-full text-lg ">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                {/* Logo */}
                <div className="hover:scale-105 transition duration-300 hover:cursor-pointer animate-fade-in-left">
                    <Image alt="Logo" src="/logo/SOne_index_logo.png" width={250} height={250} />

                </div>
                {/* Right Section */}
                <div className="flex flex-col items-end gap-2 animate-fade-in-right">
                    {/* Language Selection */}
                    <div className="flex space-x-2 ">
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
                    <div className="relative flex items-center border border-orange-500 ">
                        <input
                            type="text"
                            placeholder="Search..."
                            className=" outline-blue-600 px-2"
                        />
                        <button className="hover:scale-125 transition">
                            <Image src="/images/header/SOne_index_btsearch.jpg" alt="Search Icon" width={26} height={26} />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="text-end animate-fade-in-up">
                        <Link href="/" className="px-2 hover:text-orange-600 hover:underline">About S-ONE</Link> |
                        <Link href="/" className="px-2 hover:text-orange-600 hover:underline">Job Opportunity</Link> |
                        <Link href="/" className="px-2 hover:text-orange-600 hover:underline">Contact Us</Link> |
                        <Link href="/" className="px-2 hover:text-orange-600 hover:underline">Site Map</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
