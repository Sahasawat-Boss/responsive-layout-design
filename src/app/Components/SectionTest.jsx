"use client";

import Image from "next/image";
import { useState } from "react";

const Section = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-4">
            {/* Left Panel: Service Finder */}
            <div className="bg-black text-white p-4 rounded-md lg:col-span-1">
                <h2 className="bg-orange-500 text-center text-xl font-bold py-2">ค้นหาศูนย์บริการใกล้บ้านคุณ</h2>
                <div className="space-y-3 mt-4">
                    <div className="flex">
                        <label className="block font-semibold">จังหวัด</label>
                        <select className="w-full p-2 bg-white text-black">
                            <option>--เลือกหน้ากว้าง--</option>
                        </select>
                    </div>
                    <div className="flex">
                        <label className="block font-semibold">เขต/อำเภอ</label>
                        <select className="w-full p-2 bg-white text-black">
                            <option>--เลือกหน้ากว้าง--</option>
                        </select>
                    </div>
                    <div className="flex">
                        <label className="block font-semibold">ถนน</label>
                        <select className="w-full p-2 bg-white text-black">
                            <option>--เลือกหน้ากว้าง--</option>
                        </select>
                    </div>
                    <p className="text-orange-500 text-sm text-center">หมายเหตุ : กรุณาเลือกอย่างใดอย่างหนึ่ง</p>
                    <button className="w-full bg-orange-500 text-white py-2 hover:bg-gray-800 rounded-md">
                        ค้นหา
                    </button>
                </div>
            </div>

            {/* Center Panel: News & Events */}
            <div className="bg-white text-black p-4 border border-orange-500 rounded-md lg:col-span-3">
                <h2 className="text-xl font-bold border-b-2 border-orange-500 pb-2">News & Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {[1, 2, 3].map((item, index) => (
                        <div key={index} className="border border-gray-300 p-2 rounded-md">
                            <div className="relative">
                                <Image src="/images/main/SOne_index_banner.jpg" alt="News Image" width={150} height={100} className="w-full" />
                                <div className="absolute top-0 left-0 bg-black text-white px-2 py-1 text-xs font-bold">19 NOV 2014</div>
                            </div>
                            <p className="text-sm mt-2">ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Panel: Safety Tips */}
            <div className="bg-orange-500 text-white p-4 rounded-md relative lg:col-span-1">
                <h2 className="text-xl font-bold">Safety Tips</h2>
                <p className="mt-2">ควรเติมน้ำมันตอนเช้าขณะที่อุณหภูมิบนพื้นดินยังเย็นอยู่</p>
                <div className="mt-4">
                    <label className="block text-sm font-bold">สมัครรับข่าวสาร</label>
                    <div className="flex items-center mt-1">
                        <input type="email" placeholder="กรุณาใส่อีเมล์" className="p-2 flex-1 text-black" />
                        <button className="bg-black text-white px-4 py-2">GO</button>
                    </div>
                </div>
                <p className="text-2xl font-bold mt-6 text-center tracking-widest">02-888-8888</p>
                <div className="absolute top-0 right-4">
                    <Image src="/images/safety_tips.png" alt="Safety Tips" width={80} height={80} />
                </div>
            </div>
        </section>
    );
};

export default Section;
