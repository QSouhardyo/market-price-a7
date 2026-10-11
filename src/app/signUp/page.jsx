"use client";

import { useState } from "react";
import Link from "next/link";

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSignUp = () => {

    }

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
                        নতুন অ্যাকাউন্ট তৈরি করুন
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                        বাজারদরের সর্বশেষ তথ্য পেতে আজই যোগ দিন।
                    </p>
                </div>

                {/* Sign Up Card */}
                <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-lg shadow-green-900/5 sm:p-8">
                    <form onSubmit={handleSignUp} className="space-y-5">
                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-semibold text-gray-800"
                            >
                                আপনার নাম
                            </label>

                            <input
                                id="name"
                                type="text"
                                placeholder="আপনার পুরো নাম লিখুন"
                                className="input h-12 w-full rounded-xl border-gray-300 bg-white text-gray-900 focus:border-green-600 focus:outline-green-600"
                                autoComplete="name"
                                required
                            />
                        </div>

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
                                className="input h-12 w-full rounded-xl border-gray-300 bg-white text-gray-900 focus:border-green-600 focus:outline-green-600"
                                autoComplete="email"
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
                                    placeholder="একটি পাসওয়ার্ড তৈরি করুন"
                                    className="input h-12 w-full rounded-xl border-gray-300 bg-white pr-16 text-gray-900 focus:border-green-600 focus:outline-green-600"
                                    autoComplete="new-password"
                                    minLength={8}
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-green-700 hover:text-green-900"
                                >
                                    {showPassword ? "লুকান" : "দেখুন"}
                                </button>
                            </div>

                            <p className="mt-2 text-xs text-gray-500">
                                কমপক্ষে ৮ অক্ষরের পাসওয়ার্ড ব্যবহার করুন।
                            </p>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="mb-2 block text-sm font-semibold text-gray-800"
                            >
                                পাসওয়ার্ড নিশ্চিত করুন
                            </label>

                            <div className="relative">
                                <input
                                    id="confirmPassword"
                                    type={
                                        showConfirmPassword ? "text" : "password"
                                    }
                                    placeholder="পাসওয়ার্ডটি আবার লিখুন"
                                    className="input h-12 w-full rounded-xl border-gray-300 bg-white pr-16 text-gray-900 focus:border-green-600 focus:outline-green-600"
                                    autoComplete="new-password"
                                    minLength={8}
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-green-700 hover:text-green-900"
                                >
                                    {showConfirmPassword ? "লুকান" : "দেখুন"}
                                </button>
                            </div>
                        </div>



                        {/* Submit */}
                        <button
                            type="submit"
                            className="btn h-12 min-h-12 w-full rounded-xl border-green-700 bg-green-700 text-base font-bold text-white hover:border-green-800 hover:bg-green-800"
                        >
                            অ্যাকাউন্ট তৈরি করুন
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="divider my-6 text-xs text-gray-400">
                        অথবা
                    </div>

                    {/* Google Sign Up */}
                    <button
                        type="button"
                        className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
                    >
                        <svg
                            viewBox="0 0 48 48"
                            className="h-5 w-5"
                            aria-hidden="true"
                        >
                            <path
                                fill="#4285F4"
                                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.76 7.18l7.73 6C44.42 37.86 46.98 31.8 46.98 24.55z"
                            />
                            <path
                                fill="#34A853"
                                d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.14 1.44-4.89 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19z"
                                transform="translate(2 0)"
                            />
                            <path
                                fill="#EA4335"
                                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                                transform="translate(2 0)"
                            />
                        </svg>

                        Google দিয়ে চালিয়ে যান
                    </button>

                    {/* GitHub Sign Up */}
                    <button
                        type="button"
                        className="mt-3 flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5 fill-current"
                            aria-hidden="true"
                        >
                            <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.76 2.1 3.16 1.6.1-.72.4-1.2.69-1.48-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.16-2.99-.12-.29-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.1-1.43 3.04-1.14 3.04-1.14.61 1.54.23 2.67.11 2.96.72.78 1.16 1.77 1.16 2.99 0 4.29-2.61 5.23-5.1 5.51.4.35.74 1.02.74 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                        </svg>

                        GitHub দিয়ে চালিয়ে যান
                    </button>

                    {/* Sign In Link */}
                    <p className="mt-7 text-center text-sm text-gray-600">
                        আগে থেকেই অ্যাকাউন্ট আছে?{" "}
                        <Link
                            href="/signin"
                            className="font-bold text-green-700 hover:text-green-900 hover:underline"
                        >
                            সাইন ইন করুন
                        </Link>
                    </p>
                </div>

                {/* Back Home */}
                <div className="mt-6 text-center">
                    <Link
                        href="/"
                        className="text-sm font-medium text-gray-600 transition hover:text-green-700"
                    >
                        ← হোম পেজে ফিরে যান
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default SignUpPage;
