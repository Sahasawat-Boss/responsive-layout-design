"use client"

import ServiceSearch from "./Section-Comps/ServiceSearch";
import NewsEvent from "./Section-Comps/NewsEvent";
import Contact from "./Section-Comps/Contact";

function Section00() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 mt-4 gap-2">
                <div className="lg:col-span-1"><ServiceSearch/></div>
                <div className="lg:col-span-3"><NewsEvent /></div>
                <div className="lg:col-span-1"><Contact /></div>
        </div>

    )
}

export default Section00