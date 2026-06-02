"use client";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import RevalidationLoader from "@/app/components/Revalidation-cards/RevalidationLoader";
import RevalidationSuccess from "../components/Revalidation-cards/RevalidationSuccess";
import RevalidationHandover from "../components/Revalidation-cards/RevalidationHandOver";
import RevalidationPriceUpdated from "../components/Revalidation-cards/RevalidationPriceUpdate";

export default function RevalidationScreens() {
    return (
        <div className="min-h-screen flex flex-col bg-[#F6FBFB] justify-between">

            {/* Checkout Header */}
            <div className="w-full bg-[#F6FBFB]/85 border-b border-[#D5E0E2]/60 flex flex-col items-center justify-between">
                <header className="w-full max-w-360 px-6 py-4 flex items-center justify-between">
                    <Link
                        href="/results"
                        className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-navy transition-colors"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 5l-7 7 7 7" />
                        </svg>
                        Back to trip
                    </Link>
                    <div className="flex items-center gap-1.5 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        Secure checkout
                    </div>
                </header>
            </div>

            <div className="space-y-5 my-5">

            <RevalidationLoader />
            <RevalidationSuccess/>
            <RevalidationHandover />
            <RevalidationPriceUpdated />

            </div>

            <Footer />
        </div>
    );
}