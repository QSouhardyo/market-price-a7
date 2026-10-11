import CategoryProductList from "@/components/CategoryProductList";
import { notFound } from "next/navigation";

const CategoryProductPage = async ({ params }) => {
    const { categoryId } = await params;

    // সব ক্যাটাগরির তথ্য নিয়ে আসা
    const categoryRes = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/categories"
    );

    if (!categoryRes.ok) {
        throw new Error("ক্যাটাগরির তথ্য লোড করা যায়নি");
    }

    const categories = await categoryRes.json();

    // ক্যাটাগরির তালিকা থেকে URL সঠিক কি না যাচাই করা
    const isValidCategory = categories.some(
        (category) => category.slug === categoryId
    );

    // ভুল ক্যাটাগরি হলে 404 পেজ দেখানো
    if (!isValidCategory) {
        notFound();
    }

    // নির্দিষ্ট ক্যাটাগরির পণ্য নিয়ে আসা
    const res = await fetch(
        `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`
    );

    if (!res.ok) {
        throw new Error("পণ্যের তথ্য লোড করা যায়নি");
    }

    const products = await res.json();

    // ক্যাটাগরির বাংলা নাম
    const categoryNames = {
        "dim-dui": "ডিম ও দুধ",
        chal: "চাল",
        dal: "ডাল",
        tel: "তেল",
        sobji: "সবজি",
        mach: "মাছ",
        mangsho: "মাংস",
        mosla: "মসলা",
    };

    const categoryName = categoryNames[categoryId] || categoryId;

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10">

                {/* ক্যাটাগরির শিরোনাম */}
                <div className="flex flex-col gap-4 rounded-xl border border-green-100 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-medium text-green-700">
                            🥛 পণ্যের ক্যাটাগরি
                        </p>

                        <h1 className="mt-2 text-3xl font-extrabold text-gray-900">
                            {categoryName}
                        </h1>

                        <p className="mt-2 text-sm text-gray-500">
                            {products.length.toLocaleString("bn-BD")} টি পণ্যের আজকের দাম ও পরিবর্তন
                        </p>
                    </div>
                </div>

                {/* পণ্যের তালিকা */}
                <CategoryProductList products={products} />

                {/* সতর্কবার্তা */}
                <p className="mt-8 text-center text-xs text-gray-500">
                    বাজারের পরিস্থিতি অনুযায়ী পণ্যের দাম পরিবর্তিত হতে পারে।
                </p>

            </div>
        </main>
    );
};

export default CategoryProductPage;