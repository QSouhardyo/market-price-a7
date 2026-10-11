import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

// বাংলা সংখ্যায় কনভার্ট
const toBn = (num) => {
    if (num === null || num === undefined) return '—';
    const digits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return String(num)
        .replace(/\d/g, (d) => digits[parseInt(d)])
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const getUnitLabel = (unit) => {
    const map = {
        kg: 'প্রতি কেজি',
        litre: 'প্রতি লিটার',
        dozen: 'প্রতি ডজন',
        piece: 'প্রতি পিস',
    };
    return map[unit] || `প্রতি ${unit}`;
};

const ProductDetailsPage = async ({ params }) => {
    const { productId } = await params;

    const res = await fetch(
        `https://openapi.programming-hero.com/api/bazardor/products/${productId}`

    );

    if (!res.ok) {
        notFound();
    }
    const product = await res.json();



    const markets = product.markets || [];
    const mins = markets.map((m) => m.min).filter((v) => v != null);
    const maxs = markets.map((m) => m.max).filter((v) => v != null);

    const minPrice = mins.length ? Math.min(...mins) : product.today;
    const maxPrice = maxs.length ? Math.max(...maxs) : product.today;
    const avgPrice = markets.length
        ? Math.round(
            markets.reduce((s, m) => s + ((m.min || 0) + (m.max || 0)) / 2, 0) /
            markets.length
        )
        : product.today;

    const yesterday = product.yesterday ?? product.today;
    const diffTaka = product.today - yesterday;
    const diffText =
        diffTaka > 0
            ? `গতকালের তুলনায় আজ দাম বেড়েছে · ${toBn(Math.abs(diffTaka))} টাকা`
            : diffTaka < 0
                ? `গতকালের তুলনায় আজ দাম কমেছে · ${toBn(Math.abs(diffTaka))} টাকা`
                : `গতকালের তুলনায় আজ দাম অপরিবর্তিত`;

    const isUp = product.change?.dir === 'up' || (product.change?.pct || 0) > 0;
    const isDown = product.change?.dir === 'down' || (product.change?.pct || 0) < 0;
    const pct = Math.abs(product.change?.pct || 0).toFixed(1);

    const unitShort =
        product.unit === 'kg'
            ? 'কেজি'
            : product.unit === 'litre'
                ? 'লিটার'
                : product.unit === 'dozen'
                    ? 'ডজন'
                    : 'পিস';

    return (
        <div className="bg-[#f4f7f4] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
                {/* Breadcrumb */}
                <nav className="text-sm text-gray-500 mb-5 flex items-center gap-1.5 flex-wrap">
                    <Link href="/" className="hover:text-green-600 transition-colors">
                        হোম
                    </Link>
                    <span className="text-gray-300">›</span>
                    <Link
                        href={`/category/${product.category}`}
                        className="hover:text-green-600 transition-colors"
                    >
                        {product.categoryNameBn}
                    </Link>
                    <span className="text-gray-300">›</span>
                    <span className="text-gray-700 font-medium">{product.nameBn}</span>
                </nav>

                {/* ========== TOP PRODUCT CARD ========== */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 mb-5">
                    <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">
                        {/* Left */}
                        <div className="flex gap-4 flex-1 min-w-0">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#f0f7f0] flex items-center justify-center text-4xl sm:text-5xl shrink-0">
                                {product.image || product.categoryIcon || '🛒'}
                            </div>
                            <div className="min-w-0">
                                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                                    {product.nameBn}
                                </h1>
                                <p className="text-sm text-gray-500 mt-1">
                                    {getUnitLabel(product.unit)} · {product.categoryNameBn}
                                </p>
                                <p className="text-sm text-gray-600 mt-2">{diffText}</p>
                            </div>
                        </div>

                        {/* Right - Today's Price */}
                        <div className="w-full sm:w-auto sm:min-w-[180px] bg-[#f0f7f0] rounded-2xl p-4 sm:p-5 text-center border border-green-100">
                            <p className="text-xs text-gray-500 mb-1">আজকের দাম</p>
                            <p className="text-3xl sm:text-4xl font-extrabold text-green-600 leading-none">
                                {toBn(product.today)}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">টাকা / {unitShort}</p>
                            <div
                                className={`inline-flex items-center gap-1 mt-2 text-sm font-semibold ${isUp ? 'text-green-600' : isDown ? 'text-red-500' : 'text-gray-500'
                                    }`}
                            >
                                {isUp && '▲'}
                                {isDown && '▼'}
                                {!isUp && !isDown && '—'}
                                <span>{toBn(pct)}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ========== PRICE SUMMARY ========== */}
                <div className="mb-6">
                    <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-3">
                        দামের সারসংক্ষেপ
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5">
                            <p className="text-xs text-gray-500 mb-1">সর্বনিম্ন দাম</p>
                            <p className="text-2xl sm:text-3xl font-bold text-green-600">
                                {toBn(minPrice)} টাকা
                            </p>
                            <p className="text-xs text-gray-400 mt-1">সবচেয়ে কম দামের বাজার</p>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5">
                            <p className="text-xs text-gray-500 mb-1">সর্বাধিক দাম</p>
                            <p className="text-2xl sm:text-3xl font-bold text-red-500">
                                {toBn(maxPrice)} টাকা
                            </p>
                            <p className="text-xs text-gray-400 mt-1">সবচেয়ে বেশি দামের বাজার</p>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5">
                            <p className="text-xs text-gray-500 mb-1">গড় দাম</p>
                            <p className="text-2xl sm:text-3xl font-bold text-green-600">
                                {toBn(avgPrice)} টাকা
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                                প্রতি {unitShort}-এর হিসাবে
                            </p>
                        </div>
                    </div>
                </div>

                {/* ========== MARKET TABLE ========== */}
                <div className="mb-8">
                    <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-3">
                        বাজারভিত্তিক আজকের দাম
                    </h2>

                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-[#f0f7f0] text-gray-600">
                                        <th className="text-left font-semibold px-4 py-3 whitespace-nowrap">
                                            বাজার
                                        </th>
                                        <th className="text-left font-semibold px-4 py-3 whitespace-nowrap">
                                            বিভাগ
                                        </th>
                                        <th className="text-right font-semibold px-4 py-3 whitespace-nowrap">
                                            সর্বনিম্ন
                                        </th>
                                        <th className="text-right font-semibold px-4 py-3 whitespace-nowrap">
                                            সর্বাধিক
                                        </th>
                                        <th className="text-right font-semibold px-4 py-3 whitespace-nowrap">
                                            গড়
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {markets.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="text-center py-8 text-gray-400">
                                                কোনো বাজারের তথ্য পাওয়া যায়নি
                                            </td>
                                        </tr>
                                    ) : (
                                        markets.map((m, i) => {
                                            const avg = Math.round(((m.min || 0) + (m.max || 0)) / 2);
                                            return (
                                                <tr
                                                    key={i}
                                                    className={`border-t border-gray-50 ${i % 2 === 1 ? 'bg-[#fafdfb]' : 'bg-white'
                                                        } hover:bg-green-50/50 transition-colors`}
                                                >
                                                    <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap">
                                                        {m.market}
                                                    </td>
                                                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                                                        {m.division}
                                                    </td>
                                                    <td className="px-4 py-3 text-right text-green-600 font-medium whitespace-nowrap">
                                                        {toBn(m.min)} টাকা
                                                    </td>
                                                    <td className="px-4 py-3 text-right text-red-500 font-medium whitespace-nowrap">
                                                        {toBn(m.max)} টাকা
                                                    </td>
                                                    <td className="px-4 py-3 text-right text-gray-800 font-semibold whitespace-nowrap">
                                                        {toBn(avg)} টাকা
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;