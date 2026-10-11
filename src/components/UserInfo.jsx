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
        await signOut();
        setShowMenu(false);
        router.push("/");
        router.refresh();

        toast.error('Sign Out', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    return (
        <div className="flex shrink-0 items-center gap-2">
            {user ? (
                <div className="relative">
                    {/* User Name Button */}
                    <button
                        type="button"
                        onClick={() => setShowMenu(!showMenu)}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-green-800 transition hover:bg-green-50"
                    >
                        <span className="max-w-32 truncate">
                            {user.name}
                        </span>

                        <span className="text-xs">
                            {showMenu ? "▲" : "▼"}
                        </span>
                    </button>

                    {/* Dropdown Menu */}
                    {showMenu && (
                        <div className="absolute right-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-xl border border-green-100 bg-white p-2 shadow-lg">

                            {/* User Name & Email */}
                            <div className="border-b border-gray-100 px-3 py-3">
                                <p className="truncate text-sm font-bold text-gray-900">
                                    {user.name}
                                </p>

                                <p className="mt-1 truncate text-xs text-gray-500">
                                    {user.email}
                                </p>
                            </div>

                            {/* My Profile */}
                            <Link
                                href="/profile"
                                onClick={() => setShowMenu(false)}
                                className="mt-2 block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-800"
                            >
                                আমার প্রোফাইল
                            </Link>

                            {/* Sign Out */}
                            <button
                                type="button"
                                onClick={handleSignOut}
                                className="mt-1 w-full rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-red-600 transition hover:bg-red-50"
                            >
                                সাইন আউট
                            </button>
                        </div>
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
