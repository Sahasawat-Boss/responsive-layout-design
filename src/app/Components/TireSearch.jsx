"use client"

import Image from "next/image";

const TireSearch = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            {/* Search Tire Header */}
            <div className="w-[400px] bg-orange-500 p-2">
                <h2 className="text-xl font-bold">ค้นหายาง</h2>
            </div>

            {/* Search Form with Background Image */}
            <div className="grid grid-cols-3 bg-black text-white px-3 pb-4 relative overflow-hidden border border-orange-500 w-[400px] h-[350px]">
                <Image
                    src="/images/main/SOne_index_bg_searchtype.jpg"
                    alt="Search Background"
                    width={500}
                    height={500}
                    className="absolute inset-0 w-full h-[350px] opacity-100"
                />
                <div className="col-start-2 col-end-4 relative z-10">
                    <div className="px-2">
                        <div className="pt-2">
                            <label className="block text-2xl">หน้ายาง</label>
                            <label className="block">หน้ากว้าง (มม.)</label>
                            <select className="w-full py-1.5 bg-white text-black">
                                <option>--เลือกหน้ากว้าง--</option>
                            </select>
                        </div>

                        <div className="pt-2">
                            <label className="block text-2xl">ซีรีย์</label>
                            <label className="block">อัตราส่วนความสูงแก้มยาง (%)</label>
                            <select className="w-full py-1.5 bg-white text-black">
                                <option>--เลือกซีรีย์--</option>
                            </select>
                        </div>
                        
                        <div className="pt-2">
                            <label className="block text-2xl">กระทะล้อ</label>
                            <label className="block">เส้นผ่าศูนย์กลาง (นิ้ว)</label>
                            <select className="w-full py-1.5 bg-white text-black">
                                <option>--เลือกกระทะล้อ--</option>
                            </select>
                        </div>

                        <button className="w-full flex justify-center pt-4">
                            <Image
                                src="/images/main/SOne_index_search.png"
                                alt="ค้นหา"
                                width={120}
                                height={50}
                            />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TireSearch;
