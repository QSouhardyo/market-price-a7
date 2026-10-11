import Link from 'next/link';
import React from 'react';

const NavLinks = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories')
    const categories = await res.json()
    // console.log(categories);

    return (
        <div>
            <nav className="-mx-1 flex gap-2 overflow-x-auto border-t border-gray-100 py-3">
                {categories?.map((category) => (
                    <Link
                        key={category.id}
                        href={`/category/${category.slug}`}
                        className="flex shrink-0 items-center gap-1.5 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-green-700 hover:text-white"
                    >
                        <span>{category.icon}</span>
                        <span>{category.nameBn}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default NavLinks;