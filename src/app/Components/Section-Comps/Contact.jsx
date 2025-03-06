import { useState } from "react";

const SafetyTips = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email) {
            alert("กรุณาใส่อีเมลของคุณ");
            return;
        }
        console.log("Subscribed with:", email);
        setEmail(""); // Clear input field after submission
    };

    return (
        <div className="bg-white p-4">
            {/* Safety Tips Section */}
            <div className="flex items-center space-x-3">
                <img src="/images/SOne_index_tips1.png" alt="Mechanic" className="w-35 h-35" />
                <div>
                    <h2 className="text-orange-500 font-bold text-lg">Safety Tips</h2>
                    <p className="text-white bg-black p-2 rounded-md text-sm">
                        “ควรเติมน้ำมันตอนเช้าขณะที่อุณหภูมิบนพื้นดินยังเย็นอยู่”
                    </p>
                </div>
            </div>

            {/* Newsletter Subscription */}
            <form onSubmit={handleSubscribe} className="mt-4 flex items-center">
                <label className="text-sm font-bold mr-2">สมัครรับข่าวสาร</label>
                <input
                    type="email"
                    placeholder="กรุณาใส่อีเมล"
                    className="border px-2 py-1 text-sm flex-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="bg-black text-white px-3 py-1.5 text-sm font-bold">
                    GO
                </button>
            </form>

            {/* Contact Number */}
            <div className="mt-4 border-t-2 border-dashed border-orange-500 pt-2 text-center">
                <p className="text-3xl font-bold tracking-wider text-black">
                    02-888-8888
                </p>
            </div>
        </div>
    );
};

export default SafetyTips;
