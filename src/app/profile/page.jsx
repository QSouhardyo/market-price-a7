"use client";

import { useState, useEffect } from "react";
import { useSession, signOut, updateUser } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
    const { data: session, isPending } = useSession();
    const router = useRouter();

    const user = session?.user;

    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (user?.name) {
            setName(user.name);
        }
    }, [user?.name]);

    useEffect(() => {
        if (!isPending && !user) {
            router.replace("/signIn");
        }
    }, [isPending, user, router]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        setMessage("");
        setIsError(false);

        if (!name.trim()) {
            setMessage("আপনার নাম লিখুন।");
            setIsError(true);
            return;
        }

        try {
            setLoading(true);

            const { error } = await updateUser({
                name: name.trim(),
            });

            if (error) {
                setMessage(error.message || "নাম আপডেট করা যায়নি।");
                setIsError(true);
                return;
            }

            setMessage("আপনার নাম সফলভাবে আপডেট হয়েছে।");
        } catch {
            setMessage("কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।");
            setIsError(true);
        } finally {
            setLoading(false);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut();
            router.push("/");
            router.refresh();
        } catch {
            setMessage("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
            setIsError(true);
        }
    };

    if (isPending || !user) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-white">
                <span className="loading loading-spinner loading-lg text-green-700"></span>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white px-4 py-12 text-[#26332b] sm:py-16">
            <div className="mx-auto w-full max-w-3xl">

                {/* Page Heading */}
                <div className="mb-6">
                    <h1 className="text-xl font-bold sm:text-2xl">
                        আমার প্রোফাইল
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </div>

                {/* User Information Card */}
                <section className="flex flex-col gap-5 rounded-2xl border border-[#e3e9e4] bg-[#f9fcfa] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

                    {/* Profile Image, Name & Email */}
                    <div className="flex min-w-0 items-center gap-4">
                        <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gray-200">
                            {user.image ? (
                                <img
                                    src={user.image}
                                    alt={user.name || "Profile"}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <span className="text-3xl font-bold text-green-800">
                                    {user.name?.charAt(0)?.toUpperCase() || "U"}
                                </span>
                            )}
                        </div>

                        <div className="min-w-0">
                            <h2 className="truncate text-lg font-semibold sm:text-xl">
                                {user.name}
                            </h2>

                            <p className="mt-1 break-all text-sm text-gray-500 sm:text-base">
                                {user.email}
                            </p>
                        </div>
                    </div>

                    {/* Sign Out */}
                    <button
                        type="button"
                        onClick={handleSignOut}
                        className="flex shrink-0 items-center justify-center gap-2 self-start rounded-lg border border-red-500 px-4 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50 sm:self-center"
                    >
                        <span aria-hidden="true">↶</span>
                        সাইন আউট
                    </button>
                </section>

                {/* Profile Update Card */}
                <section className="mt-6 rounded-2xl border border-[#e3e9e4] bg-[#f9fcfa] p-5 sm:p-6">

                    <h2 className="mb-8 text-base font-bold sm:text-lg">
                        তথ্য
                    </h2>

                    <form onSubmit={handleUpdate}>
                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium"
                        >
                            নাম
                        </label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="আপনার নাম লিখুন"
                            className="h-10 w-full rounded-lg border border-[#dce5dd] bg-transparent px-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                            required
                        />

                        {message && (
                            <p
                                role="status"
                                className={`mt-3 text-sm ${isError
                                    ? "text-red-600"
                                    : "text-green-700"
                                    }`}
                            >
                                {message}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 flex h-10 w-full items-center justify-center rounded-lg bg-green-700 text-sm font-bold text-white shadow-md shadow-green-900/20 transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? "আপডেট হচ্ছে..." : "আপডেট"}
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
};

export default ProfilePage;
