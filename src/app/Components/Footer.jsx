"use client";

export default function Footer() {
    return (
        <footer className="w-full bg-white text-white flex flex-col sm:flex-row items-center">
            {/* Left: Logo */}
            <div className="px-4 flex justify-center md:justify-start w-fit">
                <img src="/logo/SOne_index_logo.png" alt="S-One Logo" className=" md:h-12" />
            </div>

            {/* Right: Copyright */}
            <p className="bg-black w-full text-center md:text-left p-4">
                Copyright © 2014
            </p>
        </footer>
    );
}
