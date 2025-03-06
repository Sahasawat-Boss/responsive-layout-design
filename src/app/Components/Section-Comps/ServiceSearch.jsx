"use State"

import { useState } from "react";

const ServiceSearch = () => {
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [street, setStreet] = useState("");

    const handleSearch = () => {
        if (!province && !district && !street) {
            alert("กรุณาเลือกอย่างใดอย่างหนึ่ง");
            return;
        }
        console.log("Searching for:", { province, district, street });
    };

    return (
        <div className=" bg-black text-white shadow-md">
            {/* Header */}
            <h2 className="bg-orange-500 text-white text-center text-lg font-bold py-2">
                ค้นหาศูนย์บริการใกล้บ้านคุณ
            </h2>

            {/* Select Inputs */}
            <div className="px-8 py-4">
                <div className="mb-3">
                    <label className="block text-lg font-bold mb-1">จังหวัด</label>
                    <select
                        className="w-full p-2 border bg-white text-black"
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                    >
                        <option value="">--เลือกหน้ายาง--</option>
                        <option value="bangkok">กรุงเทพฯ</option>
                        <option value="chiangmai">เชียงใหม่</option>
                        <option value="phuket">ภูเก็ต</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="block text-lg font-bold mb-1">เขต/อำเภอ</label>
                    <select
                        className="w-full p-2 border bg-white text-black"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                    >
                        <option value="">--เลือกหน้ายาง--</option>
                        <option value="district1">อำเภอ 1</option>
                        <option value="district2">อำเภอ 2</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="block text-lg font-bold mb-1">ถนน</label>
                    <select
                        className="w-full p-2 border bg-white text-black"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                    >
                        <option value="">--เลือกหน้ายาง--</option>
                        <option value="road1">ถนน 1</option>
                        <option value="road2">ถนน 2</option>
                    </select>
                </div>

                {/* Warning Text */}
                <p className="text-red-500 text-sm text-center my-2">
                    หมายเหตุ : กรุณาเลือกอย่างใดอย่างหนึ่ง
                </p>

                {/* Search Button */}
                <button
                    onClick={handleSearch}
                    className="w-full bg-orange-500 text-white py-2 rounded-md text-lg font-bold hover:bg-orange-600 transition"
                >
                    ค้นหา
                </button>
            </div>
        </div>
    );
};

export default ServiceSearch;
