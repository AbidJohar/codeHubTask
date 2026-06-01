"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import PhoneInput from "react-phone-number-input";
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
        <div className="min-h-screen flex flex-col bg-[#EEF2F7]">

            {/* Checkout Header */}
            <header className=" border-b  border-black/7 px-6 py-4 flex items-center justify-between">
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

            <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col gap-5 order-2 lg:order-1">

                        {/* Heading */}
                        <div>
                            <h1 className="font-fraunces text-4xl font-normal text-navy mb-1">Almost there.</h1>
                            <p className="text-sm text-gray-500">A few details and you're booked.</p>
                        </div>

                        {/* ── STEP 1: Checking price ── */}
                        {step === 1 && (
                            <div className="px-4 py-3.5 rounded-2xl border border-black/10 bg-white flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <svg className="animate-spin shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F6C330" strokeWidth="2">
                                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                                    </svg>
                                    <p className="text-sm font-semibold text-navy">Checking the latest price and availability...</p>
                                </div>
                                <p className="text-xs text-gray-400 ml-6">This takes a few seconds. Required before every booking.</p>
                            </div>
                        )}

                        {/* ── STEP 2: Price changed ── */}
                        {step === 2 && (
                            <div className="px-4 py-3.5 rounded-2xl border border-amber-200 bg-amber-50 flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F6C330" strokeWidth="2" className="shrink-0">
                                        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                                        <line x1="12" y1="9" x2="12" y2="13" />
                                        <line x1="12" y1="17" x2="12.01" y2="17" />
                                    </svg>
                                    <p className="text-sm font-semibold text-navy">The price has changed.</p>
                                </div>
                                <p className="text-xs text-gray-600 ml-6">
                                    New price <span className="font-semibold text-navy">€428</span> (was €412). Please confirm to continue.
                                </p>
                                <button
                                    onClick={() => setStep(3)}
                                    className="ml-6 mt-1 self-start flex items-center gap-1.5 text-sm font-medium text-white px-4 py-1.5 rounded-full border border-[#8B6D12] transition-all"
                                    style={{ background: "linear-gradient(134deg, rgba(64,118,189,0.50) 35.01%, rgba(30,58,95,0.50) 85.14%), #1E3A5F" }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                    Accept new price
                                </button>
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
                                        <p className="text-sm font-semibold text-navy">The price has changed.</p>
                                    </div>
                                    <p className="text-xs text-gray-500 ml-6">
                                        New price <span className="font-semibold text-navy">€428</span> (was €412). Please confirm to continue.
                                    </p>
                                    <p className="text-xs font-medium text-green-600 ml-6 mt-0.5">
                                        Accepted · Continue below
                                    </p>
                                </div>

                                {/* Save your trip box */}
                                <div className="px-4 py-4 rounded-2xl border border-black/10 bg-white flex flex-col gap-3">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                        <p className="text-sm font-semibold text-navy">Save your trip to continue</p>
                                    </div>
                                    <p className="text-xs text-gray-500 ml-6">
                                        We'll send confirmation to your inbox and let you manage booking later.
                                    </p>
                                    <div className="flex gap-2 ml-6 flex-wrap">
                                        <button className="flex-1 text-sm font-medium px-4 py-2 rounded-full border border-black/15 bg-white hover:bg-gray-50 transition-colors">
                                            Continue with Google
                                        </button>
                                        <button className="flex-1 text-sm font-medium px-4 py-2 rounded-full border border-black/15 bg-white hover:bg-gray-50 transition-colors">
                                            Continue with Email
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => setStep(4)}
                                        className="ml-6 text-xs text-gray-400 hover:text-navy underline underline-offset-2 transition-colors text-left"
                                    >
                                        Skip for now – I'll save it later
                                    </button>
                                </div>
                            </>
                        )}

                        {/* ── STEP 4: Accepted green banner (form enabled) ── */}
                        {step === 4 && (
                            <div className="px-4 py-3.5 rounded-2xl border border-green-200 bg-green-50 flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" className="shrink-0">
                                        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                                        <line x1="12" y1="9" x2="12" y2="13" />
                                        <line x1="12" y1="17" x2="12.01" y2="17" />
                                    </svg>
                                    <p className="text-sm font-semibold text-navy">The price has changed.</p>
                                </div>
                                <p className="text-xs text-gray-500 ml-6">
                                    New price <span className="font-semibold text-navy">€428</span> (was €412). Please confirm to continue.
                                </p>
                                <p className="text-xs font-medium text-green-600 ml-6 mt-0.5">
                                    Accepted · Continue below
                                </p>
                            </div>
                        )}

                        {/* Lead Traveler Form */}
                        <div className={`bg-white rounded-2xl border border-black/10 p-6 transition-opacity ${formDisabled ? "opacity-40" : "opacity-100"}`}>
                            <h2 className="font-fraunces text-lg font-normal text-black mb-5">Lead traveler</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-[11px] font-medium text-black tracking-widest font-inter uppercase block mb-1.5">First Name</label>
                                    <input type="text" placeholder="Sarah" disabled={formDisabled}
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 bg-white text-sm text-navy placeholder:text-gray-300 focus:outline-none focus:border-navy transition-colors disabled:cursor-not-allowed" />
                                </div>
                                <div>
                                    <label className="text-[11px] font-medium text-black tracking-widest uppercase block mb-1.5">Last Name</label>
                                    <input type="text" placeholder="Klein" disabled={formDisabled}
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 bg-white text-sm text-navy placeholder:text-gray-300 focus:outline-none focus:border-navy transition-colors disabled:cursor-not-allowed" />
                                </div>
                                <div>
                                    <label className="text-[11px] font-medium text-black tracking-widest uppercase block mb-1.5">Email</label>
                                    <input type="email" placeholder="sarah@example.com" disabled={formDisabled}
                                        className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 bg-white text-sm text-navy placeholder:text-gray-300 focus:outline-none focus:border-navy transition-colors disabled:cursor-not-allowed" />
                                </div>
                                <div>
                                    <label className="text-[11px] font-medium text-black tracking-widest uppercase block mb-1.5">
                                        Phone
                                    </label>
                                    <PhoneField disabled={formDisabled} />
                                </div>
                            </div>
                        </div>

                        {/* Payment Form */}
                        <div className={`bg-white rounded-2xl border border-black/10 p-6 transition-opacity ${formDisabled ? "opacity-40" : "opacity-100"}`}>
                            <h2 className="font-fraunces text-lg font-normal text-black mb-5">Payment</h2>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <label className="text-[11px] font-medium text-black tracking-widest uppercase block mb-1.5">Card Number</label>
                                    <div className="relative">
                                        <input type="text" placeholder="1234 5678 9012 3456" disabled={formDisabled}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 bg-white text-sm text-navy placeholder:text-gray-300 focus:outline-none focus:border-navy transition-colors pr-10 disabled:cursor-not-allowed" />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300">
                                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                            <line x1="1" y1="10" x2="23" y2="10" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-[11px] font-medium text-black tracking-widest uppercase block mb-1.5">Expiry</label>
                                        <input type="text" placeholder="MM / YY" disabled={formDisabled}
                                            className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 bg-white text-sm text-navy placeholder:text-gray-300 focus:outline-none focus:border-navy transition-colors disabled:cursor-not-allowed" />
                                    </div>
                                    <div>
                                        <label className="text-[11px] font-medium text-black tracking-widest uppercase block mb-1.5">CVC</label>
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
                                className="w-full py-2 rounded-full text-sm font-medium text-white border border-[#8B6D12] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{ background: "linear-gradient(134deg, rgba(64,118,189,0.50) 35.01%, rgba(30,58,95,0.50) 85.14%), #1E3A5F" }}
                            >
                                Pay €412 &amp; confirm
                            </button>
                            <p className="text-xs text-center text-gray-400 mt-2">
                                Powered by Kyte · Your card is charged when the booking is confirmed.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN — Trip Summary */}
                    <div className="flex flex-col gap-4 order-1 lg:order-2">
                        <div className="bg-white rounded-2xl border border-black/10 overflow-hidden">
                            <div className="relative h-48 w-full">
                                <Image src="/images/card-image.jpg" alt="Lisbon, Portugal" fill className="object-cover" />
                            </div>
                            <div className="p-4">
                                <p className="text-[11px] font-semibold text-amber-500 tracking-widest uppercase mb-1">Best Price</p>
                                <h3 className="font-fraunces text-xl font-medium text-navy mb-0.5">Lisbon, Portugal</h3>
                                <p className="text-xs text-gray-400 mb-4">TAP Air Portugal · 3.5h</p>
                                <div className="border-t border-black/10 pt-3 flex flex-col gap-2">
                                    <div className="flex justify-between text-sm text-gray-500">
                                        <span>Trip cost</span>
                                        <span>€412</span>
                                    </div>
                                    <div className="flex justify-between text-sm font-semibold text-navy border-t border-black/10 pt-2 mt-1">
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