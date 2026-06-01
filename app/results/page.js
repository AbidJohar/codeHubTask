"use client";
import { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import TripCard from "@/app/components/TripCard";

const filters = [
    { label: "Make it cheaper" },
    { label: "Better flight times" },
    { label: "Fewer stops" },
    { label: "Change Vibe" },
    { label: "Shorten Travel" },
];

const allTrips = [
    {
        id: "lisbon-tap",
        badge: "Best Price",
        image: "/images/card-image.jpg",
        city: "Lisbon",
        country: "Portugal",
        price: "€412",
        airline: "TAP Air Portugal",
        duration: "3.5h · Direct",
        aiNote: "Boutique hotel near Príncipe Real, a food tour, and morning departure. Best balance of cost and experience.",
    },
    {
        id: "lisbon-lufthansa",
        badge: "Best Value",
        featured: true,
        image: "/images/card-image.jpg",
        city: "Lisbon",
        country: "Portugal",
        price: "€412",
        airline: "Lufthansa",
        duration: "3.5h · Direct",
        aiNote: "Boutique hotel near Príncipe Real, a food tour, and morning departure. Best balance of cost and experience.",
    },
    {
        id: "lisbon-ba",
        badge: "Best Comfort",
        image: "/images/card-image.jpg",
        city: "Lisbon",
        country: "Portugal",
        price: "€412",
        airline: "British Airways",
        duration: "3h · Direct",
        aiNote: "Boutique hotel near Príncipe Real, a food tour, and morning departure. Best balance of cost and experience.",
    },
];

export default function ResultsPage() {
    const [selectedFilter, setSelectedFilter] = useState(null);

    // If a filter is selected → show only 1 matching card (simulate no result for others)
    const trips = selectedFilter === "Fewer stops"
        ? []          // no results
        : allTrips;   // all results

    // Show no result if filter selected but returns empty
    // const showNoResult = selectedFilter && trips.length === 0;

    return (
        <div className="min-h-screen flex flex-col bg-black/6">
            <Header />

            <main className="flex-1 max-w-5xl mx-auto w-full px-6  py-14 gap-x-8">
                <p className="text-xs font-semibold text-[#F6C330] tracking-widest uppercase mb-2">
                    Your shortlist
                </p>
                <h1 className="font-fraunces font-normal text-4xl leading-tight mb-1">
                    Your 3 best trips
                </h1>
                <p className="text-[16px] text-gray-500 mb-8">
                    Tailored to the preferences you shared.
                </p>

                {/* Filter chips */}
                <div className="flex flex-wrap gap-1 mb-8 p-5 rounded-2xl border border-[#D5E0E2] bg-white">
                    {/* Refine button */}
                    <div
                        className="flex items-center w-full lg:w-auto cursor-pointer"
                        onClick={() => setSelectedFilter(null)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_375_2423)">
                                <path d="M14.4265 2.42666L13.5732 1.57332C13.4982 1.49753 13.4089 1.43737 13.3105 1.39631C13.2121 1.35525 13.1065 1.33411 12.9999 1.33411C12.8932 1.33411 12.7877 1.35525 12.6893 1.39631C12.5908 1.43737 12.5015 1.49753 12.4265 1.57332L1.5732 12.4267C1.49741 12.5017 1.43725 12.591 1.39619 12.6894C1.35513 12.7878 1.33398 12.8934 1.33398 13C1.33398 13.1066 1.35513 13.2122 1.39619 13.3106C1.43725 13.409 1.49741 13.4983 1.5732 13.5733L2.42653 14.4267C2.50108 14.5033 2.59022 14.5642 2.6887 14.6057C2.78717 14.6473 2.89298 14.6687 2.99987 14.6687C3.10676 14.6687 3.21256 14.6473 3.31104 14.6057C3.40951 14.5642 3.49865 14.5033 3.5732 14.4267L14.4265 3.57332C14.5031 3.49878 14.564 3.40963 14.6056 3.31116C14.6472 3.21269 14.6686 3.10688 14.6686 2.99999C14.6686 2.8931 14.6472 2.78729 14.6056 2.68882C14.564 2.59035 14.5031 2.5012 14.4265 2.42666Z" stroke="#F6C330" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.3335 4.66669L11.3335 6.66669" stroke="#F6C330" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3.3335 4V6.66667" stroke="#F6C330" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.6665 9.33331V12" stroke="#F6C330" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.6665 1.33331V2.66665" stroke="#F6C330" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4.66667 5.33331H2" stroke="#F6C330" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.0002 10.6667H11.3335" stroke="#F6C330" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.33333 2H6" stroke="#F6C330" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_375_2423">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <button className={`text-sm px-1 ${!selectedFilter ? "font-semibold" : ""}`}>
                            Refine — always returns 3
                        </button>
                    </div>

                    {/* Filter chips */}
                    {filters.map((f) => (
                        <button
                            key={f.label}
                            onClick={() => setSelectedFilter(f.label === selectedFilter ? null : f.label)}
                            className={`text-sm px-3.5 py-1.5 rounded-full border transition-colors whitespace-nowrap
                                ${selectedFilter === f.label
                                    ? " text-black border-black/50"
                                    : "bg-black/6 border-[#D5E0E2] hover:border-navy hover:bg-gray-50"
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                {/* Soft Fallback Banner */}
                <div className="flex items-center justify-between gap-3 mb-8 px-4 py-3 rounded-2xl border border-amber-200 bg-[#F4F0E1]">
                    <div className="flex items-start gap-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clip-path="url(#clip0_375_2052)">
                                <path d="M8.00016 14.6668C11.6821 14.6668 14.6668 11.6821 14.6668 8.00016C14.6668 4.31826 11.6821 1.3335 8.00016 1.3335C4.31826 1.3335 1.3335 4.31826 1.3335 8.00016C1.3335 11.6821 4.31826 14.6668 8.00016 14.6668Z" stroke="#F6C330" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8 10.6667V8" stroke="#F6C330" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8 5.3335H8.00667" stroke="#F6C330" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_375_2052">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div>
                            <p className="text-sm font-semibold text-black">Closest matches we found</p>
                            <p className="text-xs text-black/80 mt-0.5">
                                We couldn't get an exact match for every preference, so here are the best alternatives.
                            </p>
                        </div>
                    </div>
                    <button className="text-sm text-nowrap font-medium px-5 py-2 rounded-full bg-gray-100 backdrop-blur-lg border-l-2 border-r-2 border-black/10 shadow-[0_2px_6px_rgba(0,0,0,0.06),inset_0_1px_3px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.06)] transition-all">
                        Try Again
                    </button>
                </div>

                {/* Cards or Empty State */}
                {trips.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 mb-8">
                            {trips.map((trip) => (
                                <TripCard key={trip.id} {...trip} />
                            ))}
                        </div>


                        <div className="border border-dashed border-black/10 rounded-2xl p-8 text-center">
                            <h2 className="font-fraunces text-xl font-medium text-[20px] mb-4">
                                Is this what you were looking for?
                            </h2>
                            <div className="flex justify-center gap-2 flex-wrap">
                                {["Yes", "Almost", "Not Really"].map((label) => (
                                    <button
                                        key={label}
                                        className="text-sm font-medium border border-black/10 rounded-full px-4 py-2 hover:bg-gray-50 transition-colors"
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center text-center px-6 py-8 rounded-2xl border border-dashed border-black/10 mb-8">
                        <div className="mb-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                <path d="M24.7502 15.5835L15.5835 24.7502" stroke="#F6C330" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.5835 15.5835L24.7502 24.7502" stroke="#F6C330" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20.1667 34.8333C28.2668 34.8333 34.8333 28.2668 34.8333 20.1667C34.8333 12.0665 28.2668 5.5 20.1667 5.5C12.0665 5.5 5.5 12.0665 5.5 20.1667C5.5 28.2668 12.0665 34.8333 20.1667 34.8333Z" stroke="#F6C330" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M38.5 38.5L30.6167 30.6167" stroke="#F6C330" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold  mb-2">
                            No trips matched.
                        </h3>
                        <p className="text-sm text-gray-500 max-w-xs leading-relaxed mb-6">
                            Try widening your dates by a few days, lifting the budget cap, or removing the direct-only flight filter.
                        </p>
                        <div className="w-full flex flex-col sm:flex-row items-center gap-2  justify-center px-10 ">
                            <button className="text-sm w-full sm:w-auto text-nowrap font-medium px-5 py-2 rounded-full bg-gray-100 backdrop-blur-lg border-l-2  border-r-2 border-black/10 shadow-[0_2px_6px_rgba(0,0,0,0.06),inset_0_1px_3px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.06)] transition-all">
                                Adjust Dates
                            </button>
                            <button className="text-sm w-full sm:w-auto  text-nowrap font-medium px-5 py-2 rounded-full bg-gray-100 backdrop-blur-lg border-l-2 border-r-2 border-black/10 shadow-[0_2px_6px_rgba(0,0,0,0.06),inset_0_1px_3px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.06)] transition-all">
                                Adjust Budget
                            </button>
                            <button
                                className="text-sm  w-full sm:w-auto  font-medium px-5 py-2 rounded-full text-white border border-[#8B6D12] transition-all"
                                style={{ background: "linear-gradient(134deg, rgba(64,118,189,0.50) 35.01%, rgba(30,58,95,0.50) 85.14%), #1E3A5F" }}
                            >
                                Run Again
                            </button>
                        </div>
                    </div>
                )}


            </main>

            <Footer />
        </div>
    );
}