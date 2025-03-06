import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-black text-white py-2 shadow-md w-full">
            <div className="flex justify-between items-center px-8">
                <nav className="flex space-x-4">
                    <Link href="/products" className="flex items-center px-3 py-2 bg-black text-orange-500">
                        <span className="mr-2">▶</span> Product & Services
                    </Link>
                    <Link href="/promotions" className="flex items-center px-3 py-2 bg-black text-white">
                        <span className="mr-2">▶</span> Promotions
                    </Link>
                    <Link href="/news" className="flex items-center px-3 py-2 bg-black text-white">
                        <span className="mr-2">▶</span> News & Events
                    </Link>
                    <Link href="/safety" className="flex items-center px-3 py-2 bg-black text-white">
                        <span className="mr-2">▶</span> Safety Tips
                    </Link>
                    <Link href="/faqs" className="flex items-center px-3 py-2 bg-black text-white">
                        <span className="mr-2">▶</span> FAQS
                    </Link>
                    <Link href="/location" className="flex items-center px-3 py-2 bg-black text-white">
                        <span className="mr-2">▶</span> Location
                    </Link>
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
