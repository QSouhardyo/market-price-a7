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
            router.push("/");
            router.refresh();

            toast.success("SignOut Successfully", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
                transition: Bounce,
            });
        } catch (error) {
            console.error("Sign Out Error:", error);

            toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।", {
                position: "top-right",
                autoClose: 3000,
                theme: "light",
                transition: Bounce,
            });
        }
    };

    return (
        <div className="flex shrink-0 items-center gap-2">
            {user ? (
                <div className="relative">
                    {/* User Name Button */}
                    <button
                        type="button"
                        onClick={() => setShowMenu(!showMenu)}
                        aria-expanded={showMenu}
                        aria-label="User menu"
                        className="flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-semibold text-green-800 transition hover:bg-green-50 sm:px-3"
                    >
                        {/* Profile Picture */}
                        {user.image ? (
                            <img
                                src={user.image}
                                alt={user.name || "User"}
                                referrerPolicy="no-referrer"
                                className="h-9 w-9 shrink-0 rounded-full border-2 border-green-200 object-cover shadow-sm"
                            />
                        ) : (
                            <div className="flex py-0.5 px-4 shrink-0 items-center justify-center rounded-xl border-2 border-green-200 text-green-100 text-sm font-bold uppercase bg-green-800">
                                {user.name?.charAt(0) || "U"}
                            </div>
                        )}

                        {/* User Name */}
                        <span className="max-w-24 truncate sm:max-w-32">
                            {user.name || "ব্যবহারকারী"}
                        </span>

                        {/* Dropdown Arrow */}
                        <span className="text-xs">
                            {showMenu ? "▲" : "▼"}
                        </span>
                    </button>

                    {/* Dropdown Menu */}
                    {showMenu && (
                        <>
                            {/* Outside Click Area */}
                            <button
                                type="button"
                                aria-label="Close menu"
                                onClick={() => setShowMenu(false)}
                                className="fixed inset-0 z-40 cursor-default"
                            />

                            <div className="absolute right-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-green-100 bg-white p-2 shadow-xl">
                                {/* User Name & Email */}
                                <div className="flex items-center gap-3 border-b border-gray-100 px-3 py-3">

                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-bold text-gray-900">
                                            {user.name || "ব্যবহারকারী"}
                                        </p>

                                        <p className="mt-1 truncate text-xs text-gray-500">
                                            {user.email}
                                        </p>
                                    </div>
                                </div>

                                {/* My Profile */}
                                <Link
                                    href="/profile"
                                    onClick={() => setShowMenu(false)}
                                    className="mt-2 block rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-800"
                                >
                                    আমার প্রোফাইল
                                </Link>

                                {/* Sign Out */}
                                <button
                                    type="button"
                                    onClick={handleSignOut}
                                    className="mt-1 w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-red-600 transition hover:bg-red-50"
                                >
                                    সাইন আউট
                                </button>
                            </div>
                        </>
                    )}
                </div>
            ) : (
                /* Sign In & Sign Up */
                <div className="flex items-center gap-2">
                    <Link
                        href="/signIn"
                        className="rounded-lg border border-green-700 px-3 py-2 text-sm font-semibold text-green-800 transition hover:bg-green-50 sm:px-5"
                    >
                        সাইন ইন
                    </Link>

                    <Link
                        href="/signUp"
                        className="rounded-lg bg-green-700 px-3 py-2 text-sm font-semibold text-white transition hover:bg-green-800 sm:px-5"
                    >
                        সাইন আপ
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserInfo;