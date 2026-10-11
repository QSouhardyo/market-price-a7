const Loading = () => {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4">
            {/* Animated Spinner */}
            <div className="relative flex h-20 w-20 items-center justify-center">
                <div className="absolute inset-0 animate-spin rounded-full border-4 border-green-100 border-t-green-600"></div>

                <div className="h-10 w-10 animate-pulse rounded-full bg-green-600/10"></div>
            </div>

            {/* Loading Text */}
            <h2 className="mt-6 text-xl font-bold tracking-wide text-gray-800">
                লোড হচ্ছে<span className="animate-pulse text-green-600">...</span>
            </h2>

            <p className="mt-2 text-sm text-gray-500">
                একটু অপেক্ষা করুন, আমরা আপনার জন্য প্রস্তুত করছি।
            </p>

            {/* Animated Progress Bar */}
            <div className="mt-5 h-1.5 w-48 overflow-hidden rounded-full bg-green-100">
                <div className="h-full w-1/2 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-green-600"></div>
            </div>


        </div>
    );
};

export default Loading;