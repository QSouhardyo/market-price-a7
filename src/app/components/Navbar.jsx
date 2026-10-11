import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";




const Navbar = () => {


    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: 'full'
    });

    return (
        <header className="sticky top-0 z-50 border-b border-green-100 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4">

                {/* Main Navbar */}
                <div className="flex min-h-20 items-center justify-between gap-3 py-3">

                    {/* Logo and Date */}
                    <Link href="/" className="flex shrink-0 items-center gap-2">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-800 text-3xl shadow-sm">
                            🛒
                        </div>
                        <div>
                            <h1 className="text-xl font-extrabold  sm:text-2xl">
                                বাজার দর
                            </h1>

                            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                                {date}
                            </p>
                        </div>
                    </Link>

                    {/* Authentication Buttons */}
                    <div className="flex shrink-0 items-center gap-2">
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
                </div>

                {/* Category Navigation */}
                <NavLinks></NavLinks>

            </div>
        </header>
    );
};

export default Navbar;
