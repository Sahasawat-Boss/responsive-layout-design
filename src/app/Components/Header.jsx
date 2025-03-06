import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header className="p-3 w-full text-lg">
            <div className="flex justify-between items-center">
                <Image alt="Logo" src="/logo/SOne_index_logo.png" width={250} height={250} />

                <div className="flex flex-col items-end gap-1">
                    <div className=" bg-gray-200 text-end px-4">Language Selection</div>
                    <div className=" bg-gray-200 text-end px-4">Search Bar</div>
                    <div className=" bg-gray-200 text-end px-4">About S-ONE | Job Opportunity | Contact Us | Site Map</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
