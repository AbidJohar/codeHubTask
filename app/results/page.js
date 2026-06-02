"use client";
import { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import TripCard from "@/app/components/TripCard";

const filters = [
    { label: "Make it cheaper" },
    { label: "Better flight times" },
    { label: "More comfort" },
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
    const [error, setError] = useState(false);

    // If a filter is selected → show only 1 matching card (simulate no result for others)
    const trips = selectedFilter === "Fewer stops"
        ? []          // no results
        : allTrips;   // all results

    // Show no result if filter selected but returns empty
    // const showNoResult = selectedFilter && trips.length === 0;

    return (
        <div className="min-h-screen flex flex-col bg-[#F6FBFB]">
            <Header />

            <main className="flex-1 max-w-360 mx-auto w-full px-6  py-14 gap-x-8">
                <p className="text-xs font-semibold text-[#F6C330] tracking-widest uppercase mb-2">
                    Your shortlist
                </p>
                <h1 className="font-fraunces font-normal text-[#00242F] text-5xl leading-tight mb-1">
                    Your 3 best trips
                </h1>
                <p className="text-[16px] text-[#57666B] mb-8">
                    Tailored to the preferences you shared.
                </p>

                {/* Filter chips */}
                <div className="flex flex-wrap gap-1 mb-8 p-5 rounded-2xl border border-[#D5E0E2] bg-[#FFF]">
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
                            className={`text-sm px-3.5 py-1.5 font-normal font-inter rounded-full border transition-colors whitespace-nowrap
                                ${selectedFilter === f.label
                                    ? " text-[#00242F] border-black/50"
                                    : "bg-[#F6FBFB] border-[#D5E0E2] hover:border-navy hover:bg-gray-50"
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                {/* Soft Fallback Banner */}
                <div className="flex sm:flex-row items-center justify-between gap-3 mb-8 p-5 rounded-2xl border border-[#F0CB87] bg-[#F4F0E1]">
                    <div className="flex items-start flex-col gap-2 ">
                        <div className="text-[#f1b42f] shrink-0 flex gap-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="16" x2="12" y2="12" />
                                <line x1="12" y1="8" x2="12.01" y2="8" />
                            </svg>
                            <p className="w-full text-start text-sm  font-bold text-[#00242F]">Closest matches we found</p>
                        </div>
                        <div>
                            <p className="text-sm leading-[22.75px] text-[rgba(0, 36, 47, 0.85)] mt-0.5">
                                We couldn't get an exact match for every preference, so here are the best alternatives.
                            </p>
                        </div>
                    </div>
                    <button className="text-sm text-nowrap text-[#00242F] font-medium px-5 py-2 rounded-full bg-gray-100 backdrop-blur-lg border-l-2 border-r-2 border-black/10 shadow-[0_2px_6px_rgba(0,0,0,0.06),inset_0_1px_3px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.06)] transition-all">
                        Try Again
                    </button>
                </div>

                {/* Cards or Empty State */}
                {trips.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 pb-6">
                            {trips.map((trip) => (
                                <TripCard key={trip.id} {...trip} />
                            ))}
                        </div>


                        <div className="border border-dashed border-black/10 rounded-2xl mt-8 p-8 text-center">
                            <h2 className="font-fraunces text-xl font-medium text-[20px] mb-4">
                                Is this what you were looking for?
                            </h2>
                            <div className="flex justify-center gap-2 flex-wrap">
                                {["Yes", "Almost", "Not Really"].map((label) => (
                                    <button
                                        key={label}
                                        className="text-sm text-[#00242F] font-medium border border-black/10 rounded-full px-4 py-2 hover:bg-gray-50 transition-colors"
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center text-center px-6     py-8 rounded-2xl border border-dashed border-black/10 mb-8">
                        <div className="mb-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                <path d="M24.7502 15.5835L15.5835 24.7502" stroke="#F6C330" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.5835 15.5835L24.7502 24.7502" stroke="#F6C330" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20.1667 34.8333C28.2668 34.8333 34.8333 28.2668 34.8333 20.1667C34.8333 12.0665 28.2668 5.5 20.1667 5.5C12.0665 5.5 5.5 12.0665 5.5 20.1667C5.5 28.2668 12.0665 34.8333 20.1667 34.8333Z" stroke="#F6C330" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                                <path d="M38.5 38.5L30.6167 30.6167" stroke="#F6C330" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <h3 className="text-xl font-fraunces font-semibold #00242F  mb-2">
                            No trips matched.
                        </h3>
                        <p className="text-center text-[15px] font-normal leading-relaxed tracking-wide text-slate-600 max-w-md mx-auto mb-4">
                            Try widening your dates by a few days, lifting the budget <br className="hidden sm:inline" />
                            cap, or removing the direct-only flight filter.
                        </p>

                        <div className="w-full  flex flex-col sm:flex-row items-center gap-2  justify-center px-0 sm:px-10 ">
                            <button className="text-sm w-full sm:w-auto  font-medium px-5 py-2 rounded-full bg-gray-100 backdrop-blur-lg border-l-2  border-r-2 border-black/10 shadow-[0_2px_6px_rgba(0,0,0,0.06),inset_0_1px_3px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.06)] transition-all">
                                Adjust Dates
                            </button>
                            <button className="text-sm w-full sm:w-auto   font-medium px-5 py-2 rounded-full bg-gray-100 backdrop-blur-lg border-l-2 border-r-2 border-black/10 shadow-[0_2px_6px_rgba(0,0,0,0.06),inset_0_1px_3px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.06)] transition-all">
                                Adjust Budget
                            </button>
                            <button
                                className="text-sm  w-full sm:w-auto text-nowrap  font-medium px-5 py-2 rounded-full text-white border border-[#8B6D12] transition-all"
                                style={{ background: "linear-gradient(134deg, rgba(64,118,189,0.50) 35.01%, rgba(30,58,95,0.50) 85.14%), #1E3A5F" }}
                            >
                                Run Again
                            </button>
                        </div>
                    </div>

                )}

                {error && <div className="flex flex-col items-center justify-center text-center px-6     py-8 rounded-2xl border border-dashed border-black/10 my-8">
                    <div className="mb-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                            <path d="M39.8384 33.0001L25.1718 7.33342C24.852 6.76913 24.3882 6.29976 23.8278 5.97321C23.2674 5.64666 22.6304 5.47461 21.9818 5.47461C21.3332 5.47461 20.6962 5.64666 20.1358 5.97321C19.5753 6.29976 19.1116 6.76913 18.7918 7.33342L4.12512 33.0001C3.80187 33.5599 3.63237 34.1952 3.6338 34.8417C3.63523 35.4881 3.80754 36.1227 4.13327 36.6811C4.45899 37.2395 4.92655 37.7018 5.48856 38.0213C6.05056 38.3407 6.68703 38.5059 7.33345 38.5001H36.6668C37.3101 38.4994 37.9419 38.3295 38.4988 38.0074C39.0557 37.6854 39.518 37.2224 39.8394 36.6651C40.1608 36.1078 40.3299 35.4758 40.3297 34.8325C40.3295 34.1892 40.1601 33.5572 39.8384 33.0001Z" stroke="#F6C330" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22 16.5V23.8333" stroke="#F6C330" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22 31.167H22.0183" stroke="#F6C330" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <h3 className="text-xl font-fraunces font-semibold #00242F  mb-2">
                        Something interrupted the search.
                    </h3>
                    <p className="text-center text-[15px] font-normal leading-relaxed tracking-wide text-slate-600 max-w-md mx-auto mb-4">
                        Something interrupted the search.
                    </p>

                    <div className="w-full  flex flex-col sm:flex-row items-center gap-2  justify-center px-0 sm:px-10 ">
                        
                        <button
                            className="text-sm  w-full sm:w-auto text-nowrap  font-medium px-5 py-2 rounded-full text-white border border-[#8B6D12] transition-all"
                            style={{ background: "linear-gradient(134deg, rgba(64,118,189,0.50) 35.01%, rgba(30,58,95,0.50) 85.14%), #1E3A5F" }}
                        >
                            Retry Now
                        </button>
                    </div>
                </div>
                }


            </main>

            <Footer />
        </div>
    );
}