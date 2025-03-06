export default function Footer() {
    return (
        <footer className="w-full bg-white text-white flex items-center">
            {/* Left: Logo */}
            <div className="px-2">
                <img src="/logo/SOne_index_logo.png" alt="S-One Logo" className="h-14" />
            </div>

            {/* Right: Copyright */}
            <p className="bg-black w-full p-4 rounded-md">Copyright © 2014</p>
        </footer>
    );
}
