"use client";

import { useState } from "react";
import Link from "next/link";

const SignInPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <main className="flex min-h-screen items-center justify-center bg-green-50 px-4 py-10">
            <div className="w-full max-w-md">

                {/* Logo & Heading */}
                <div className="mb-8 text-center">
                    <Link
                        href="/"
                        className="mb-5 inline-flex items-center justify-center gap-3"
                    >
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-700 text-3xl text-white shadow-sm">
                            🛒
                        </div>

                        <span className="text-3xl font-extrabold tracking-tight text-gray-900">
                            বাজার <span className="text-green-700">দর</span>
                        </span>
                    </Link>

                    <h1 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                        আপনার অ্যাকাউন্টে প্রবেশ করুন
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                        প্রতিদিনের বাজারদর দেখতে আপনার অ্যাকাউন্টে সাইন ইন করুন।
                    </p>
                </div>

                {/* Sign In Card */}
                <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-lg sm:p-8">

                    <form className="space-y-5">

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-semibold text-gray-800"
                            >
                                ইমেইল ঠিকানা
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="আপনার ইমেইল লিখুন"
                                className="input h-12 w-full rounded-xl border-gray-200 bg-white text-gray-900 outline-none focus:border-green-600 focus:outline-green-600"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-semibold text-gray-800"
                            >
                                পাসওয়ার্ড
                            </label>

                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="আপনার পাসওয়ার্ড লিখুন"
                                    className="input h-12 w-full rounded-xl border-gray-200 bg-white pr-16 text-gray-900 focus:border-green-600 focus:outline-green-600"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-green-700 hover:text-green-900"
                                >
                                    {showPassword ? "লুকান" : "দেখুন"}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                            <label className="flex cursor-pointer items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-sm border-gray-300 checked:border-green-700 checked:bg-green-700"
                                />
                                <span className="text-gray-600">
                                    আমাকে মনে রাখুন
                                </span>
                            </label>

                            <Link
                                href="/forgot-password"
                                className="font-semibold text-green-700 hover:text-green-900 hover:underline"
                            >
                                পাসওয়ার্ড ভুলে গেছেন?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn h-12 min-h-12 w-full rounded-xl border-green-700 bg-green-700 text-base font-bold text-white hover:border-green-800 hover:bg-green-800"
                        >
                            সাইন ইন করুন
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="divider my-6 text-xs text-gray-400">
                        অথবা
                    </div>

                    {/* Google Sign In */}
                    <button
                        type="button"
                        className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                    >
                        <svg
                            viewBox="0 0 48 48"
                            className="h-5 w-5"
                            aria-hidden="true"
                        >
                            <path
                                fill="#EA4335"
                                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                                transform="translate(2 4)"
                            />
                            <path
                                fill="#4285F4"
                                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.76 7.18l7.73 6C44.42 37.86 46.98 31.8 46.98 24.55z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19z"
                                transform="translate(2 4)"
                            />
                            <path
                                fill="#34A853"
                                d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.14 1.44-4.89 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                                transform="translate(2 0)"
                            />
                        </svg>

                        Google দিয়ে চালিয়ে যান
                    </button>

                    {/* GitHub Sign In */}
                    <button
                        type="button"
                        className="mt-3 flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-700 transition hover:border-green-300 hover:bg-green-50"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
                        </svg>

                        GitHub দিয়ে চালিয়ে যান
                    </button>

                    {/* Sign Up Link */}
                    <p className="mt-7 text-center text-sm text-gray-500">
                        অ্যাকাউন্ট নেই?{" "}
                        <Link
                            href="/signup"
                            className="font-bold text-green-700 hover:text-green-900 hover:underline"
                        >
                            সাইন আপ করুন
                        </Link>
                    </p>
                </div>

                {/* Back Home */}
                <div className="mt-6 text-center">
                    <Link
                        href="/"
                        className="text-sm font-medium text-gray-500 transition hover:text-green-700"
                    >
                        ← হোম পেজে ফিরে যান
                    </Link>
                </div>

            </div>
        </main>
    );
};

export default SignInPage;