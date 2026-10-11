"use client";

import { useState } from "react";
import ProductCard from "@/app/components/ProductCard";

const CategorySort = ({ products }) => {
    const [sortOrder, setSortOrder] = useState("default");

    // Sorting
    let sortedProducts = [...products];

    if (sortOrder === "low") {
        sortedProducts.sort(
            (a, b) =>
                Number(a.price ?? a.today ?? 0) -
                Number(b.price ?? b.today ?? 0)
        );
    } else if (sortOrder === "high") {
        sortedProducts.sort(
            (a, b) =>
                Number(b.price ?? b.today ?? 0) -
                Number(a.price ?? a.today ?? 0)
        );
    }

    return (
        <>
            {/* Product Count and Sort */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-gray-600">
                    মোট {products.length.toLocaleString("bn-BD")} টি পণ্য দেখানো হচ্ছে
                </p>

                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none focus:border-green-600"
                >
                    <option value="default">ডিফল্ট সাজানো</option>
                    <option value="low">দাম: কম থেকে বেশি</option>
                    <option value="high">দাম: বেশি থেকে কম</option>
                </select>
            </div>

            {/* Product Cards */}
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sortedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </>
    );
};

export default CategorySort;
