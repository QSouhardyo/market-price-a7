export default function Footer() {
    return (
        <footer className="bg-white border-t border-base-300 mt-auto">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-green-800 flex items-center gap-1">
                            🛒 বাজার দর
                        </h3>
                        <p className="text-sm text-base-content/70 mt-1 max-w-xs">
                            প্রয়োজনীয় পণ্যের দাম এক নজরে।
                        </p>
                    </div>
                    <div className="text-sm text-base-content/60 max-w-sm sm:text-right">
                        <p>
                            সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
                        </p>
                    </div>
                </div>
                <div className="divider my-4"></div>
                <div className="text-center text-xs text-base-content/50">
                    © {new Date().getFullYear()} বাজার দর — Bazar Dor. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
