"use client";

import { useState } from "react";
import Link from "next/link";
import { signUp } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import SocialButton from "@/components/SocialButton";
import { Bounce, toast } from "react-toastify";


const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordError, setPasswordError] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries())
        if (user.password !== user.confirmPassword) {
            setPasswordError("দুটি পাসওয়ার্ড মিলছে না।");
            return;
        }

        setPasswordError("");

        const { data, error } = await signUp.email({
            ...user,
            callbackURL: "/"
        });

        if (data) {
            toast.success('Login succesfully', {
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

        if (data) {
            redirect('/')


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
                                name="name"
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
                                name="email"
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
                                    name="password"
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
                                    name="confirmPassword"
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


                        {passwordError && (
                            <p className="mt-2 text-sm font-medium text-red-600">
                                {passwordError}
                            </p>
                        )}


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

                    {/* Social Button */}

                    <SocialButton></SocialButton>

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