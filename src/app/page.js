import Link from "next/link";
import { connection } from "next/server";
import ProductCard from "../components/ProductCard";
import AllProducts from "../components/AllProducts";
import Image from "next/image";
import ScrollButton from "../components/ScrollButton";
import { notFound } from "next/navigation";

export default async function Home() {

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full"
  })

  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products"
  );

  // if (!res.ok) {
  //   throw new Error("পণ্যের তথ্য লোড করা যায়নি");
  // }

  const allProducts = await res.json();

  if (!allProducts) {
    notFound()
  }
  const downProducts = allProducts
    .filter((product) => product.change.pct < 0)
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  // যেসব পণ্যের দাম বেড়েছে
  const upProducts = allProducts
    .filter((product) => product.change.pct > 0)
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);


  return (
    <main className="min-h-screen bg-[#F7FAF7]">

      {/* Hero Section */}
      <section className="px-4 pt-6 sm:pt-10">
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 px-6 py-10 text-white sm:px-10 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-16">

          {/* Background Shapes */}
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/5" />
          <div className="absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-lime-300/10" />

          {/* Left Side: Text */}
          <div className="relative z-10 w-full lg:w-1/2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-green-50">
              {date}
            </span>

            <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-5xl lg:text-5xl xl:text-6xl">
              বাজারের সঠিক দাম,
              <br />
              <span className="text-lime-300">
                জানুন এক নজরে
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-green-50 sm:text-base">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            <ScrollButton></ScrollButton>
          </div>

          {/* Right Side: Image */}
          <div className="relative z-10 flex w-full items-center justify-center lg:w-1/2">
            <Image
              height={600}
              width={600}
              src="/assets/bazar-hero.png"
              alt="বাংলাদেশের নিত্যপণ্যের বাজার"
              priority
              className="h-auto w-full max-w-sm object-contain sm:max-w-md lg:max-w-full"
            />
          </div>

        </div>
      </section>

      {/* Price Increased */}
      <section className="mx-auto max-w-7xl px-4 pt-12">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
              <span className="mr-2 text-red-500">↗</span>
              আজ দাম বেড়েছে
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              যেসব পণ্যের দামে ঊর্ধ্বগতি দেখা যাচ্ছে
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {upProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Price Decreased */}
      <section className="mx-auto max-w-7xl px-4 pt-12">
        <div className="mb-5">
          <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
            <span className="mr-2 text-green-600">↘</span>
            আজ দাম কমেছে
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            যেসব পণ্যের দামে নিম্নগতি দেখা যাচ্ছে
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {downProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* All Products */}
      <section
        id="sob-ponno"
        className="mx-auto max-w-7xl px-4 pb-14 pt-14"
      >
        <div className="mb-6">
          <p className="text-sm font-semibold text-green-700">
            আপনার প্রয়োজনীয় সবকিছু
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
            সব পণ্য
          </h2>
        </div>

        {/* Product Count, Sorting and Product Grid */}
        <AllProducts products={allProducts} />


      </section>
    </main>
  );
}