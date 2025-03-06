import Image from "next/image";

export default function Main() {
    return (
        <main className="flex flex-col md:flex-row w-full my-4 bg-white text-white gap-2">
            {/* Left Panel: Search Form */}
            <div className="w-full md:w-1/3 bg-black text-white rounded-lg">

                <h2 className="text-xl font-bold py-2 mb-2 bg-orange-500">ค้นหายาง</h2>

                <div className="space-y-3 px-10 p-4">
                    <div>
                        <label className="block font-semibold">หน้ากว้าง (มม.)</label>
                        <select className="w-full p-2 bg-white text-black">
                            <option>--เลือกหน้ากว้าง--</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-semibold">ซีรีย์</label>
                        <select className="w-full p-2 bg-white text-black">
                            <option>--เลือกซีรีย์--</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-semibold">กระทะล้อ</label>
                        <select className="w-full p-2 bg-white text-black">
                            <option>--เลือกกระทะล้อ--</option>
                        </select>
                    </div>
                    <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-gray-800">
                        ค้นหา
                    </button>
                </div>
            </div>

            {/* Center: Main Image */}
            <div className="w-full justify-between flex items-center p-6 bg-black">
                <Image
                    src="/images/SOne_index_banner.jpg"
                    alt="Main building"
                    width={700}
                    height={400}
                />

                <div className="flex flex-col gap-2">
                    <button className="text-white text-2xl">▲</button>
                    <div className="border-2 border-orange-500">
                        <Image src="/images/SOne_index_banner.jpg" alt="Thumbnail 1" width={100} height={50} />
                    </div>
                    <div className="border-2 border-gray-400">
                        <Image src="/images/SOne_index_banner.jpg" alt="Thumbnail 2" width={100} height={50} />
                    </div>
                    <div className="border-2 border-gray-400">
                        <Image src="/images/SOne_index_banner.jpg" alt="Thumbnail 3" width={100} height={50} />
                    </div>
                    <button className="text-white text-2xl">▼</button>
                </div>
            </div>
        </main>
    );
}