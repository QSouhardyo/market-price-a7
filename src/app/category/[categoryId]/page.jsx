import CategoryProductList from "@/app/components/CategoryProductList";


const CategoryProductPage = async ({ params }) => {
    const { categoryId } = await params;

    const res = await fetch(
        `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`
    );

    const products = await res.json();

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

                {/* Category Heading */}
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

                {/* Sorting and Product Cards */}
                <CategoryProductList products={products} />

                {/* Disclaimer */}
                <p className="mt-8 text-center text-xs text-gray-500">
                    বাজারের পরিস্থিতি অনুযায়ী পণ্যের দাম পরিবর্তিত হতে পারে।
                </p>
            </div>
        </main>
    );
};

export default CategoryProductPage;
