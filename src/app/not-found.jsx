import Link from "next/link";


const NotFound = () => {
    return (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
            <div className="text-center">
                <div className="text-7xl mb-4">🛒</div>
                <h1 className="text-4xl font-extrabold mb-2">৪০৪</h1>
                <p className="text-xl text-base-content/70 mb-2">পেজ পাওয়া যায়নি</p>
                <p className="text-base-content/50 mb-8 max-w-md mx-auto">
                    আপনি যে পেজটি খুঁজছেন তা বিদ্যমান নেই অথবা সরিয়ে ফেলা হয়েছে।
                </p>
                <Link href="/" className="btn btn-primary btn-lg">
                    হোম পেজে ফিরে যান
                </Link>
            </div>
        </div>
    );
};

export default NotFound;