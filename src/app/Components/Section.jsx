"use client";

import Image from "next/image";
import { useState } from "react";

const Section = () => {
    const [hoveredIndex, setHoveredIndex] = useState(0); // Default bullet 1

    const bullets = [
        "/images/section/SOne_index_bullet1.png",
        "/images/section/SOne_index_bullet2.png",
        "/images/section/SOne_index_bullet2.png",
    ];


    return (
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-4 animate-fade-in-down">
            {/* Left Panel: Service Finder */}

            <div className="border border-orange-500">
                <h2 className="bg-orange-500 text-xl text-white p-2">ค้นหาศูนย์บริการใกล้บ้านคุณ</h2>
                <div className=" bg-black/85 text-white p-4 mt-1 lg:col-span-1">

                    <div className="flex flex-col item-end justify-end gap-2 px-3 md:px-2">

                        <label className=" text-2xl w-full">จังหวัด</label>
                        <select className="w-full p-1.5 bg-white text-black">
                            <option>--เลือกจังหวัด--</option>
                        </select>

                        <label className=" text-2xl w-full">เขต/อำเภอ</label>
                        <select className="w-full p-1.5 bg-white text-black">
                            <option>--เลือกเขต/อำเภอ--</option>
                        </select>

                        <label className=" text-2xl w-full">ถนน</label>
                        <select className="w-full p-1.5 bg-white text-black">
                            <option>--เลือกถนน--</option>
                        </select>
                    </div>

                    <p className=" text-orange-500 text-center py-3">หมายเหตุ : กรุณาเลือกอย่างใดอย่างหนึ่ง</p>
                    <button className="w-full flex justify-center hover:scale-110 transition duration-300 hover:cursor-pointer">
                        <Image
                            src="/images/main/SOne_index_search.png"
                            alt="ค้นหา"
                            width={120}
                            height={50}
                        />
                    </button>
                </div>
            </div>

            {/* Center Panel: News & Events */}
            <div className="bg-white text-black border border-orange-500 border-b-8 lg:col-span-3">
                <div className="flex justify-between items-center border-b-2 border-orange-500 px-2.5 py-1">
                    {/* Left: Title */}
                    <h2 className="text-xl">News & Events</h2>

                    {/* Right: Bullet Icons */}
                    <div className="flex space-x-1.5">
                        {bullets.map((bullet, index) => (
                            <Image
                                key={index}
                                src={hoveredIndex === index ? "/images/section/SOne_index_bullet1.png" : "/images/section/SOne_index_bullet2.png"}
                                alt="Bullet Icon"
                                width={13}
                                height={13}
                                className="cursor-pointer transition-all duration-300"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            />
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-4 px-2 pb-2 border-b border-orange-300">

                    <div className="bg-white border-r border-orange-300  p-2 group hover:scale-105 transition duration-300 hover:cursor-pointer">
                        <div className="relative">
                            <Image src="/images/section/SOne_Mobile_pic.jpg" alt="News Image" width={150} height={100} className="w-full" />
                            <div className="absolute top-0 left-0 flex flex-col items-center justify-center bg-black/75 text-white px-2 py-1 text-xs">
                                <div>19</div>
                                <div>Nov</div>
                                <div>2024</div>
                            </div>
                        </div>
                        <p className="text-sm mt-2 h-20 group-hover:underline">ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม</p>
                    </div>
                    <div className="bg-white border-r border-orange-300  p-2 group hover:scale-105 transition duration-300 hover:cursor-pointer">
                        <div className="relative">
                            <Image src="/images/section/SOne_Mobile_pic.jpg" alt="News Image" width={150} height={100} className="w-full" />
                            <div className="absolute top-0 left-0 flex flex-col items-center justify-center bg-black/75 text-white px-2 py-1 text-xs">
                                <div>19</div>
                                <div>Nov</div>
                                <div>2024</div>
                            </div>
                        </div>
                        <p className="text-sm mt-2 h-20 group-hover:underline">ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม</p>
                    </div>
                    <div className="bg-white  p-2 group hover:scale-105 transition duration-300 hover:cursor-pointer">
                        <div className="relative">
                            <Image src="/images/section/SOne_Mobile_pic.jpg" alt="News Image" width={150} height={100} className="w-full" />
                            <div className="absolute top-0 left-0 flex flex-col items-center justify-center bg-black/75 text-white px-2 py-1 text-xs">
                                <div>19</div>
                                <div>Nov</div>
                                <div>2024</div>
                            </div>
                        </div>
                        <p className="text-sm mt-2 h-20 group-hover:underline">ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม</p>
                    </div>


                </div>
            </div>

            {/* Right Panel: Safety Tips */}
            <div className="overflow-auto">
                <div className=" text-white flex justify-center">
                    <div className="flex md:flex-col">
                        <div className="flex">
                            <Image src="/images/section/SOne_index_tips1.png" alt="Safety Tips Icon" width={120} height={80} />
                            <div className="bg-black/85 flex flex-col items-start px-3 h-[101.5px] border-b border-orange-400">
                                <h2 className="text-xl text-orange-500 self-center">Safety Tips</h2>
                                <Image
                                    src="/images/section/SOne_index_pic66.png"
                                    alt="Phone Number"
                                    width={10}
                                    height={10}
                                    className="mt-1 self-start"
                                />
                                <p className="mt-0.5 text-xs leading-tight">ควรเติมน้ำมันตอนเช้าขณะที่อุณหภูมิบนพื้นดินยังเย็นอยู่</p>
                                <Image
                                    src="/images/section/SOne_index_pic99.png"
                                    alt="Phone Number"
                                    width={10}
                                    height={10}
                                    className="mt-0.5 self-end"
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="px-3 mt-2.5">
                    <label className="text-lg pt-1">สมัครรับข่าวสาร</label>
                    <div className="flex items-start mt-1 gap-1">
                        <input type="email" placeholder="กรุณาใส่อีเมล์" className="p-1 px-2.5 flex-1 border border-gray-300 text-black" />
                        <button className="bg-black text-white px-4 py-2 text-xs hover:scale-110 transition hover:cursor-pointer">GO</button>
                    </div>
                    <p className="text-2xl font-bold flex justify-center pt-5 py-3 hover:cursor-pointer">
                        <Image src="/images/section/SOne_index_call.png" alt="Phone Number" width={300} height={40} />
                    </p>
                </div>


            </div>
        </section>
    );
};

export default Section;
