import Link from "next/link";

export default function Header() {
    return (
        <header className="top-0 z-50 bg-white/6 border-b border-black/10 px-6 py-4 flex flex-wrap items-center justify-between gap-y-2">

            {/* Logo — full width on mobile, auto on desktop */}
            <div className="w-full sm:w-auto text-left sm:text-center sm:order-2">
                <span className="font-fraunces text-xl font-semibold tracking-tight">
                    TrA<span className="font-medium">i</span>veller
                    <span className="text-[#F6C330]">.ai</span>
                </span>
            </div>

            {/* Left: back */}
            <div className="sm:order-1">
                <Link
                    href="/"
                    className="flex items-center gap-1.5 text-sm hover:text-navy transition-colors"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 5l-7 7 7 7" />
                    </svg>
                    Start over
                </Link>
            </div>

            {/* Right: edit button */}
            <Link
                href="/edit"
                className="sm:order-3 text-sm font-medium px-5 py-2 rounded-full
                    bg-gray-100 backdrop-blur-lg border-l-2 border-r-2 border-black/10
                    shadow-[0_2px_6px_rgba(0,0,0,0.06),inset_0_1px_3px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.06)]
                    transition-all"
            >
                Edit trip
            </Link>

        </header>
    );
}