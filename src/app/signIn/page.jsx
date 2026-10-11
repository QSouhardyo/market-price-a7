"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "@/lib/auth-client";
import SocialButton from "@/components/SocialButton";
import { Bounce, toast } from "react-toastify";


const SignInPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries())

        const { data, error } = await signIn.email({
            ...user,
            callbackURL: "/"
        });

        if (data) {
            toast.success('Login Successfully', {
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
        }

        if (error) {
            toast.error('Invalid email or password', {
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

            // console.log(error);


        }

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
                        আপনার অ্যাকাউন্টে প্রবেশ করুন
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                        প্রতিদিনের বাজারদর দেখতে আপনার অ্যাকাউন্টে সাইন ইন করুন।
                    </p>
                </div>

                {/* Sign In Card */}
                <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-lg sm:p-8">

                    <form onSubmit={handleSignIn} className="space-y-5">

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-semibold text-gray-800"
                            >
                                ইমেইল ঠিকানা
                            </label>

                            <input
                                name="email"
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
                                    name="password"
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

                    {/* Social button */}

                    <SocialButton></SocialButton>
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