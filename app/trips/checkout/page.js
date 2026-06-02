"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import "react-phone-number-input/style.css"
import PhoneField from "@/app/components/PhoneField";

export default function CheckoutPage() {
    const [step, setStep] = useState(1);
    const [phone, setPhone] = useState("");
    // step 1: checking price (spinner)
    // step 2: price changed (accept banner)
    // step 3: accepted + save your trip modal
    // step 4: form fully enabled

    // Auto-advance step 1 → 2 after 3 seconds
    useEffect(() => {
        if (step === 1) {
            const timer = setTimeout(() => setStep(2), 3000);
            return () => clearTimeout(timer);
        }
    }, [step]);

    const formDisabled = step === 1 || step === 2;

    return (
        <div className="min-h-screen flex flex-col bg-[#F6FBFB] items-center justify-between">

            {/* Checkout Header */}
            <div className="w-full bg-[#F6FBFB]/85 border-b border-[#D5E0E2]/60 flex flex-col items-center justify-between">
                <header className="w-full max-w-360    px-6 py-4 flex items-center justify-between ">
                    <Link href="/results" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-navy transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 5l-7 7 7 7" />
                        </svg>
                        Back to trip
                    </Link>
                    <div className="flex items-center gap-1.5  text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        Secure checkout
                    </div>
                </header>
            </div>

            <main className="flex-1 w-full bg-[#F6FBFB] max-w-360 mx-auto  px-6 py-10 ">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] md:grid-cols-[1fr_1fr] gap-8 ">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col gap-5 order-2 md:order-1 ">

                        {/* Heading */}
                        <div>
                            <h1 className="font-fraunces text-4xl #00242F font-normal leading-10 mb-2">Almost there.</h1>
                            <p className="text-[16px] leading-6 text-[#57666B] mb-4">A few details and you're booked.</p>
                        </div>

                        {/* ── STEP 1: Checking price ── */}
                        {step === 1 && (
                            <div className="p-5 rounded-2xl border border-[#D5E0E2] bg-[#FFF] flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full border-2 border-l-[#969b9c] border-[#D5E0E2] animate-spin"></div>
                                    <p className="text-sm font-semibold leading-6 mb-1 text-[#00242F]">Checking the latest price and availability...</p>
                                </div>
                                <p className="text-xs text-[#57666B] ml-3">This takes a few seconds. Required before every booking.</p>
                            </div>
                        )}

                        {/* ── STEP 2: Price changed ── */}
                        {step === 2 && (
                            <div className="p-5 rounded-2xl border border-[#F2A618]/40 bg-[#F2A618]/10 flex   items-start gap-4">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M18.109 15.0001L11.4423 3.33344C11.1464 2.81126 10.5926 2.48853 9.99234 2.48853C9.39213 2.48853 8.83828 2.81126 8.54234 3.33344L1.87567 15.0001C1.57658 15.5181 1.578 16.1566 1.87938 16.6733C2.18076 17.1899 2.73589 17.5055 3.33401 17.5001H16.6673C17.2625 17.4995 17.8121 17.1816 18.1094 16.666C18.4067 16.1505 18.4066 15.5155 18.109 15.0001" stroke="#F2A618" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10 7.5V10.8333" stroke="#F2A618" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10 14.1667H10.0083" stroke="#F2A618" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex flex-col items-start justify-center ">
                                    <p className="text-[16px] font-medium leading-6 mb-1 text-[#00242F]">The price has changed.</p>
                                    <p className="text-sm text-[#57666B] leading-5 mb-3 ">
                                        New price <span className="font-semibold text-[#00242F]">€428</span> (was €412). Please confirm to continue.
                                    </p>
                                    <button
                                        onClick={() => setStep(3)}
                                        className="self-start flex items-center gap-3.5 text-sm font-medium text-white px-4 py-1.5 rounded-full border border-[#8B6D12] transition-all"
                                        style={{ background: "linear-gradient(134deg, rgba(64,118,189,0.50) 35.01%, rgba(30,58,95,0.50) 85.14%), #1E3A5F" }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M13.3327 8.66664C13.3327 12 10.9993 13.6666 8.22602 14.6333C8.08079 14.6825 7.92304 14.6802 7.77935 14.6266C4.99935 13.6666 2.66602 12 2.66602 8.66664V3.99997C2.66602 3.63203 2.96474 3.33331 3.33268 3.33331C4.66602 3.33331 6.33268 2.53331 7.49268 1.51997C7.78446 1.27069 8.21423 1.27069 8.50602 1.51997C9.67268 2.53997 11.3327 3.33331 12.666 3.33331C13.034 3.33331 13.3327 3.63203 13.3327 3.99997V8.66664" stroke="#F8FDFD" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6 8.00008L7.33333 9.33341L10 6.66675" stroke="#F8FDFD" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Accept new price
                                    </button>
                                </div>

                            </div>
                        )}

                        {/* ── STEP 3: Accepted + Save your trip ── */}
                        {step === 3 && (
                            <>
                                {/* Accepted banner */}
                                <div className="px-4 py-3.5 rounded-2xl border border-green-200 bg-green-50 flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" className="shrink-0">
                                            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                                            <line x1="12" y1="9" x2="12" y2="13" />
                                            <line x1="12" y1="17" x2="12.01" y2="17" />
                                        </svg>
                                        <p className="text-[16px] font-semibold text-[#00242F]">The price has changed.</p>
                                    </div>
                                    <p className="text-sm text-[#57666B] ml-6 mb-3">
                                        New price <span className="font-semibold text-navy">€428</span> (was €412). Please confirm to continue.
                                    </p>
                                    <p className="text-xs font-medium text-green-600 ml-6 mt-0.5">
                                        Accepted · Continue below
                                    </p>
                                </div>

                                {/* Save your trip box */}
                                <div className="w-full px-4 py-4 rounded-2xl border border-black/10 bg-white flex flex-col  ">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 text-amber-500">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                        <p className="text-[16px] font-medium leading-6 text-[#00242F]">Save your trip to continue</p>
                                    </div>

                                    <p className="text-xs text-[#57666B] ml-6 mb-3">
                                        We'll send confirmation to your inbox and let you manage booking later.
                                    </p>

                                    {/* Responsive Button Container: stacked on mobile, row on tablet/desktop */}
                                    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2 my-4">
                                        <button className=" w-full text-sm text-nowrap text-[#00242F] font-medium px-5 py-2 rounded-full bg-gray-100 backdrop-blur-lg border-l-2 border-r-2 border-black/10 shadow-[0_2px_6px_rgba(0,0,0,0.06),inset_0_1px_3px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.06)] transition-all">
                                            Continue with Google
                                        </button>
                                        <button className="w-full text-sm text-nowrap text-[#00242F] font-medium px-5 py-2 rounded-full bg-gray-100 backdrop-blur-lg border-l-2 border-r-2 border-black/10 shadow-[0_2px_6px_rgba(0,0,0,0.06),inset_0_1px_3px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.06)] transition-all">
                                            Continue with Email
                                        </button>
                                         
                                    </div>

                                    <button
                                        onClick={() => setStep(4)}
                                        className="text-sm text-[#57666B]  leading-5  transition-colors text-center"
                                    >
                                        Skip for now – I'll save it later
                                    </button>
                                </div>
                            </>
                        )}

                        {/* ── STEP 4: Accepted green banner (form enabled) ── */}
                        {step === 4 && (
                            <div className="p-5 rounded-2xl border border-[#269E5F]/40 bg-[#269E5F]/5 flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M18.109 14.9999L11.4423 3.3332C11.1464 2.81101 10.5926 2.48828 9.99234 2.48828C9.39213 2.48828 8.83828 2.81101 8.54234 3.3332L1.87567 14.9999C1.57658 15.5178 1.578 16.1564 1.87938 16.673C2.18076 17.1897 2.73589 17.5052 3.33401 17.4999H16.6673C17.2625 17.4993 17.8121 17.1813 18.1094 16.6658C18.4067 16.1502 18.4066 15.5153 18.109 14.9999" stroke="#269E5F" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10 7.5V10.8333" stroke="#269E5F" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10 14.1665H10.0083" stroke="#269E5F" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p className="text-sm font-semibold text-navy">The price has changed.</p>
                                </div>
                                <p className="text-xs text-[#57666B] ml-6">
                                    New price <span className="font-semibold text-navy">€428</span> (was €412). Please confirm to continue.
                                </p>
                                <p className="text-xs font-medium text-[#269E5F] ml-6 mt-0.5">
                                    Accepted · Continue below
                                </p>
                            </div>
                        )}

                        {/* Lead Traveler Form */}
                        <div className={`rounded-2xl bg-[#FFFFFF] border border-[#D5E0E2] p-6 mt-6 transition-opacity ${formDisabled ? "opacity-40" : "opacity-100"}`}>
                            <h2 className="font-fraunces text-xl font-normal leading-7 text-[#00242F] mb-5">Lead traveler</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-black tracking-widest font-inter uppercase block mb-1.5 ">First Name</label>
                                    <input type="text" placeholder="Sarah" disabled={formDisabled}
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 bg-white text-sm text-navy placeholder:text-gray-300 focus:outline-none focus:border-navy transition-colors disabled:cursor-not-allowed" />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-black tracking-widest uppercase block mb-1.5 ">Last Name</label>
                                    <input type="text" placeholder="Klein" disabled={formDisabled}
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 bg-white text-sm text-navy placeholder:text-gray-300 focus:outline-none focus:border-navy transition-colors disabled:cursor-not-allowed" />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-black tracking-widest uppercase block mb-1.5 ">Email</label>
                                    <input type="email" placeholder="sarah@example.com" disabled={formDisabled}
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 bg-white text-sm text-navy placeholder:text-gray-300 focus:outline-none focus:border-navy transition-colors disabled:cursor-not-allowed" />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-black tracking-widest uppercase block mb-1.5 ">
                                        Phone
                                    </label>
                                    <PhoneField disabled={formDisabled} />
                                </div>
                            </div>
                        </div>

                        {/* Payment Form */}
                        <div className={`bg-white rounded-2xl border border-black/10 p-6 mt-6 transition-opacity ${formDisabled ? "opacity-40" : "opacity-100"}`}>
                            <h2 className="font-fraunces text-lg font-normal text-black mb-5">Payment</h2>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <label className="text-sm font-medium text-black tracking-widest uppercase block mb-1.5">Card Number</label>
                                    <div className="relative">
                                        <input type="text" placeholder="1234 5678 9012 3456" disabled={formDisabled}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 bg-white text-sm text-navy placeholder:text-gray-300 focus:outline-none focus:border-navy transition-colors pr-10 disabled:cursor-not-allowed" />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#57666B]">
                                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                            <line x1="1" y1="10" x2="23" y2="10" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-black tracking-widest uppercase block mb-1.5">Expiry</label>
                                        <input type="text" placeholder="MM / YY" disabled={formDisabled}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 bg-white text-sm text-navy placeholder:text-gray-300 focus:outline-none focus:border-navy transition-colors disabled:cursor-not-allowed" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-black tracking-widest uppercase block mb-1.5">CVC</label>
                                        <input type="text" placeholder="123" disabled={formDisabled}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 bg-white text-sm text-navy placeholder:text-gray-300 focus:outline-none focus:border-navy transition-colors disabled:cursor-not-allowed" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pay Button */}
                        <div>
                            <button
                                disabled={formDisabled}
                                className="w-full py-2 my-2 rounded-full text-sm font-medium text-white border border-[#8B6D12] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{ background: "linear-gradient(134deg, rgba(64,118,189,0.50) 35.01%, rgba(30,58,95,0.50) 85.14%), #1E3A5F" }}
                            >
                                Pay €412 &amp; confirm
                            </button>
                            <p className="text-xs text-center text-[#57666B] mt-1">
                                Powered by Kyte · Your card is charged when the booking is confirmed.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN — Trip Summary */}
                    <div className="flex flex-col gap-4 order-1 lg:order-2">
                        <div className="bg-[#FFF] rounded-2xl border border-black/10 overflow-hidden">
                            <div className="relative h-48 w-full">
                                <Image src="/images/card-image.jpg" alt="Lisbon, Portugal" fill className="object-cover" />
                            </div>
                            <div className="p-5">
                                <p className="text-sm font-medium leading-4 text-[#F6C330] tracking-widest uppercase mb-1">Best Price</p>
                                <h3 className="font-fraunces text-xl font-medium text-[#00242F] mb-0.5">Lisbon, Portugal</h3>
                                <p className="text-sm  text-[#57666B]  mb-3">TAP Air Portugal · 3.5h</p>
                                <div className="border-t border-black/10 pt-4 flex flex-col gap-2">
                                    <div className="flex justify-between text-sm text-gray-500">
                                        <span>Trip cost</span>
                                        <span className="text-[#00242F]" >€412</span>
                                    </div>
                                    <div className="flex justify-between text-sm font-semibold text-[#00242F] border-t border-black/10 pt-2 mt-1">
                                        <span>Total</span>
                                        <span className="font-fraunces text-lg">€412</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}