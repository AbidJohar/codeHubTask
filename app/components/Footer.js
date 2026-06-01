import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-black/15 px-6 py-4 text-sm text-gray-500">

            {/* Mobile layout — hidden on lg */}
            <div className="lg:hidden">
                <div className="flex items-center justify-between mb-2">
                    <LogoMark />
                    <Link href="/agencies" className="text-xs text-gray-500 hover:text-navy transition-colors">
                        For agencies
                    </Link>
                </div>
                <p className="text-xs text-black/60">
                    © 2026 TrAiveller.ai · Stop searching. Start deciding.
                </p>
            </div>

            {/* Desktop layout — hidden on mobile */}
            <div className="hidden lg:flex items-center justify-between">
                <LogoMark />
                <p className="text-xs text-black/60">
                    © 2026 TrAiveller.ai · Stop searching. Start deciding.
                </p>
                <Link href="/agencies" className="text-xs text-gray-500 hover:text-navy transition-colors">
                    For agencies
                </Link>
            </div>

        </footer>
    );
}



function LogoMark() {
    return (
        <div className="flex items-center gap-2 font-fraunces font-semibold">
            <div className="w-7 h-7 bg-blue-950 rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M11.8667 12.8L10.6667 7.33333L13 5C14 4 14.3333 2.66667 14 2C13.3333 1.66667 12 2 11 3L8.66667 5.33333L3.2 4.13333C2.86667 4.06667 2.6 4.2 2.46667 4.46667L2.26667 4.8C2.13333 5.13333 2.2 5.46667 2.46667 5.66667L6 8L4.66667 10H2.66667L2 10.6667L4 12L5.33333 14L6 13.3333V11.3333L8 10L10.3333 13.5333C10.5333 13.8 10.8667 13.8667 11.2 13.7333L11.5333 13.6C11.8 13.4 11.9333 13.1333 11.8667 12.8V12.8" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <h2>Tr<span className="text-[#F6C330] font-[18px]">AI</span>veller</h2>
        </div>
    );
}