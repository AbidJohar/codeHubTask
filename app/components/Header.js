import Link from "next/link";

export default function Header() {
    return (
        <header className="px-6   sm:px-12 lg:px-6 flex items-center justify-center border-b border-black/5 bg-[#f6fbfb]/85 backdrop-blur-md">
            <main
                className="
                    w-full max-w-360 px-6  
                    grid grid-cols-2 gap-y-4 items-center
                    sm:grid-cols-3
                    py-4
                "
            >
                {/* 1. Logo: Spans full width on mobile, takes 2nd slot on desktop */}
                <div className="col-span-2 sm:col-span-1 sm:order-2 flex items-center justify-start sm:justify-center">
                    <span className="font-fraunces text-xl font-semibold tracking-tight text-[#0a192f]">
                        TrA<span className="font-medium">i</span>veller
                        <span className="text-[#F6C330]">.ai</span>
                    </span>
                </div>

                {/* 2. Start Over: Left on mobile, takes 1st slot (Far Left) on desktop */}
                <div className="col-span-1 sm:order-1 flex items-center justify-start">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M19 12H5M12 5l-7 7 7 7" />
                        </svg>
                        Start over
                    </Link>
                </div>

                {/* 3. Edit Button: Right on mobile, takes 3rd slot (Far Right) on desktop */}
                <div className="col-span-1 sm:order-3 flex items-center justify-end">
                    <Link
                        href="/edit"
                        className="
                            text-sm font-medium px-5 py-2 rounded-full
                            bg-white/80 backdrop-blur-lg border border-black/5
                            shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1)]
                            text-slate-800 hover:bg-gray-50 transition-all
                        "
                    >
                        Edit trip
                    </Link>
                </div>
            </main>
        </header>
    );
}