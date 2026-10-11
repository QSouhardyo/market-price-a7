"use client";

import { useEffect, useState } from "react";

const DateDisplay = () => {
    const [date, setDate] = useState("");

    useEffect(() => {
        const today = new Date().toLocaleDateString("bn-BD", {
            dateStyle: "full",
            timeZone: "Asia/Dhaka",
        });

        setDate(today);
    }, []);

    return (
        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
            {date || "তারিখ লোড হচ্ছে..."}
        </p>
    );
};

export default DateDisplay;