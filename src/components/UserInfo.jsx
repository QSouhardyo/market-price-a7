"use client";

import { useState } from "react";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bounce, toast } from "react-toastify";

const UserInfo = () => {
    const { data: session } = useSession();
    const [showMenu, setShowMenu] = useState(false);
    const router = useRouter();

    const user = session?.user;

    const handleSignOut = async () => {
        try {
            await signOut();
            setShowMenu(false);

            toast.success("সফলভাবে সাইন আউট হয়েছে!", {
                position: "top-right",
                autoClose: 3000,
                theme: "light",
                transition: Bounce,
            });

            router.push("/");
            router.refresh();
        } catch (error) {
            console.error("Sign Out Error:", error);
            toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
        }
    };

    return (
        <div className="relative flex shrink-0 items-center gap-2">

            {user ? (
                <>
                    {/* Desktop: Profile Image + Name */}
                    <button
                        type="button"
                        onClick={() => setShowMenu(!showMenu)}
                        className="hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-green-800 transition hover:bg-green-50 sm:flex"
                    >
                        {user.image ? (
                            <img
                                src={user.image}
                                alt={user.name || "User"}
                                referrerPolicy="no-referrer"
                                className="h-9 w-9 rounded-full border-2 border-green-200 object-cover"
                            />
                        ) : (
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 font-bold text-green-800">
                                {user.name?.charAt(0)?.toUpperCase() || "U"}
                            </span>
                        )}

                        <span className="max-w-32 truncate">
                            {user.name || "ব্যবহারকারী"}
                        </span>

                        <span className="text-xs">
                            {showMenu ? "▲" : "▼"}
                        </span>
                    </button>

                    {/* Mobile: Only Profile Image */}
                    <button
                        type="button"
                        onClick={() => setShowMenu(!showMenu)}
                        aria-label="প্রোফাইল মেনু"
                        className="flex items-center rounded-full sm:hidden"
                    >
                        {user.image ? (
                            <img
                                src={user.image}
                                alt={user.name || "User"}
                                referrerPolicy="no-referrer"
                                className="h-10 w-10 rounded-full border-2 border-green-200 object-cover"
                            />
                        ) : (
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-bold text-green-800">
                                {user.name?.charAt(0)?.toUpperCase() || "U"}
                            </span>
                        )}
                    </button>
                </>
            ) : (
                <>
                    {/* Desktop: Sign In & Sign Up */}
                    <div className="hidden items-center gap-2 sm:flex">
                        <Link
                            href="/signIn"
                            className="rounded-lg border border-green-700 px-4 py-2 text-sm font-semibold text-green-800 transition hover:bg-green-50"
                        >
                            সাইন ইন
                        </Link>

                        <Link
                            href="/signUp"
                            className="rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
                        >
                            সাইন আপ
                        </Link>
                    </div>

                    {/* Mobile: Hamburger Button */}
                    <button
                        type="button"
                        onClick={() => setShowMenu(!showMenu)}
                        aria-label="মেনু খুলুন"
                        aria-expanded={showMenu}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-green-100 text-2xl text-green-800 transition hover:bg-green-50 sm:hidden"
                    >
                        {showMenu ? "✕" : "☰"}
                    </button>
                </>
            )}

            {/* Dropdown Menu */}
            {showMenu && (
                <>
                    <button
                        type="button"
                        aria-label="মেনু বন্ধ করুন"
                        onClick={() => setShowMenu(false)}
                        className="fixed inset-0 z-40 cursor-default"
                    />

                    <div className="absolute right-0 top-full z-50 mt-3 w-64 overflow-hidden rounded-2xl border border-green-100 bg-white p-2 shadow-xl">

                        {user ? (
                            <>
                                {/* User Information */}
                                <div className="flex items-center gap-3 border-b border-gray-100 px-3 py-3">
                                    {user.image ? (
                                        <img
                                            src={user.image}
                                            alt={user.name || "User"}
                                            referrerPolicy="no-referrer"
                                            className="h-11 w-11 rounded-full border border-green-100 object-cover"
                                        />
                                    ) : (
                                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 font-bold text-green-800">
                                            {user.name?.charAt(0)?.toUpperCase() || "U"}
                                        </span>
                                    )}

                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-bold text-gray-900">
                                            {user.name || "ব্যবহারকারী"}
                                        </p>
                                        <p className="truncate text-xs text-gray-500">
                                            {user.email}
                                        </p>
                                    </div>
                                </div>

                                <Link
                                    href="/profile"
                                    onClick={() => setShowMenu(false)}
                                    className="mt-2 block rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-800"
                                >
                                    আমার প্রোফাইল
                                </Link>

                                <button
                                    type="button"
                                    onClick={handleSignOut}
                                    className="mt-1 w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-red-600 transition hover:bg-red-50"
                                >
                                    সাইন আউট
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/signIn"
                                    onClick={() => setShowMenu(false)}
                                    className="block rounded-xl px-3 py-3 text-sm font-semibold text-green-800 transition hover:bg-green-50"
                                >
                                    সাইন ইন
                                </Link>

                                <Link
                                    href="/signUp"
                                    onClick={() => setShowMenu(false)}
                                    className="mt-1 block rounded-xl bg-green-700 px-3 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
                                >
                                    সাইন আপ
                                </Link>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default UserInfo;