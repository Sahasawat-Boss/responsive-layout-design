import Image from "next/image"; // Only if using Next.js (Optional)

const newsData = [
    {
        id: 1,
        date: "19 NOV 2014",
        image: "/images/SOne_index_banner.jpg", // Change this to your image path
        title: "ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม",
    },
    {
        id: 2,
        date: "19 NOV 2014",
        image: "/images/SOne_index_banner.jpg",
        title: "ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม",
    },
    {
        id: 3,
        date: "19 NOV 2014",
        image: "/images/SOne_index_banner.jpg",
        title: "ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม",
    },
];

const NewsEvents = () => {
    return (
        <div className="bg-white border-1 border-orange-400 p-4 shadow-md">
            {/* Header */}
            <h2 className="text-lg font-bold border-b-2 border-black pb-2">News & Events</h2>

            {/* News Grid */}
            <div className="relative grid grid-cols-1  lg:grid-cols-3 gap-4 mt-4">
                {newsData.map((news) => (
                    <div key={news.id} className="shadow-md ">
                        {/* News Image */}
                        <div className="relative">
                            <Image
                                src={news.image}
                                alt={news.title}
                                width={100}
                                height={100}
                                className="w-full"
                            />
                            <div className="absolute top-0 left-0 bg-black text-white text-xs px-2 py-1">
                                {news.date}
                            </div>
                        </div>

                        {/* News Content */}
                        <div className="p-2">
                            <p className="text-sm">{news.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsEvents;
