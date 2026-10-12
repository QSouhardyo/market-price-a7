import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
import React from 'react';
import { notFound } from "next/navigation";

const Marquee = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const allData = await res.json()
    if (!allData) {
        notFound()
    }

    return (
        <div className="py-2">
            <MarqueeText direction='right' duration={10}>
                {
                    allData.map(data => <span className='mx-3' key={data.id}>
                        <span className='mx-1'>{data.categoryIcon}</span>
                        <span className='mx-1'>{data.nameBn}</span>
                        <span className='mx-0.5'>{data.today.toLocaleString("bn-BD")}</span>
                        <span className='mr-1'> টাকা/{data.unit}</span>
                        <span
                            className={`rounded-full mx-1 px-2.5 py-1 text-xs font-semibold ${data.change.pct > 0
                                ? "bg-red-50 text-red-600"
                                : data.change.pct < 0
                                    ? "bg-green-50 text-green-700"
                                    : "bg-gray-100 text-gray-500"
                                }`}
                        >
                            {data.change.pct > 0
                                ? "▲"
                                : data.change.pct < 0
                                    ? "▼"
                                    : "—"}{" "}
                            {data.change.pct.toLocaleString("bn-BD")}%
                        </span>
                    </span>)
                }
            </MarqueeText>

        </div>
    );
};

export default Marquee;