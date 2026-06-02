"use client";
import { useState, useRef, useEffect } from "react";
import { getCountries, getCountryCallingCode } from "react-phone-number-input";
import en from "react-phone-number-input/locale/en.json";

export default function PhoneField({ disabled }) {
    const [country, setCountry] = useState("PK");
    const [phone, setPhone] = useState("");
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const ref = useRef(null);

    const countries = getCountries();
    const filtered = countries.filter((c) =>
        en[c]?.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
                setSearch("");
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    return (
        <div className="flex gap-2.5">

            {/* Country selector */}
            <div className="relative" ref={ref}>
                <button
                    type="button"
                    disabled={disabled}
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-1.5 px-3 py-2.25 rounded-xl border border-black/10   text-sm text-navy hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
                >
                    {/* Flag using twemoji CDN */}
                    <img
                        src={`https://flagcdn.com/20x15/${country.toLowerCase()}.png`}
                        alt={en[country]}
                        width={20}
                        height={15}
                        className="rounded-sm"
                    />
                    <span>+{getCountryCallingCode(country)}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        className={`transition-transform ${open ? "rotate-180" : ""}`}>
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </button>

                {/* Dropdown */}
                {open && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-black/10 rounded-xl shadow-lg z-50">
                        {/* Search */}
                        <div className="p-2 border-b border-black/10">
                            <input
                                type="text"
                                placeholder="Search country..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full px-3 py-1.5 text-sm rounded-lg border border-black/10 focus:outline-none focus:border-navy"
                            />
                        </div>
                        {/* List */}
                        <div className="max-h-52 overflow-y-auto">
                            {filtered.map((c) => (
                                <button
                                    key={c}
                                    type="button"
                                    onClick={() => { setCountry(c); setOpen(false); setSearch(""); }}
                                    className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-gray-50 transition-colors text-left
                                        ${country === c ? "bg-gray-50 font-medium" : ""}`}
                                >
                                    <img
                                        src={`https://flagcdn.com/20x15/${c.toLowerCase()}.png`}
                                        alt={en[c]}
                                        width={20}
                                        height={15}
                                        className="rounded-sm shrink-0"
                                    />
                                    <span className="text-navy truncate">{en[c]}</span>
                                    <span className="text-gray-400 ml-auto shrink-0">+{getCountryCallingCode(c)}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Phone number input */}
            <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="300 900123"
                disabled={disabled}
                className="flex-1 w-12 px-3 py-[8.5px] rounded-xl border border-black/10 bg-white text-sm  placeholder:text-gray-300 focus:outline-none  transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            />
        </div>
    );
}