"use client";

const ScrollButton = () => {
    const handleScroll = () => {
        document.getElementById("sob-ponno")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <button
            onClick={handleScroll}
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-lime-300 px-6 py-3 font-bold text-green-950 transition hover:bg-lime-200"
        >
            সব পণ্য দেখুন

        </button>
    );
};

export default ScrollButton;