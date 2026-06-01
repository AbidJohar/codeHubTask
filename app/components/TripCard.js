import Link from "next/link";
import Image from "next/image";

const badgeStyles = {
    "Best Price": "bg-navy text-white",
    "Best Value": "bg-gold text-navy",
    "Best Comfort": "bg-blue-600 text-white",
};

/**
 * TripCard — reusable card component for trip results
 *
 * Props:
 *  - id          {string}  unique trip id
 *  - badge       {string}  "Best Price" | "Best Value" | "Best Comfort"
 *  - image       {string}  image src (optional)
 *  - city        {string}  destination city name
 *  - country     {string}  destination country
 *  - price       {string}  price string e.g. "€412"
 *  - airline     {string}  airline name
 *  - duration    {string}  e.g. "3.5h · Direct"
 *  - aiNote      {string}  AI explanation text
 *  - featured    {bool}    highlight with gold border
 */
export default function TripCard({
    id,
    badge,
    image,
    city,
    country,
    price,
    airline,
    duration,
    aiNote,
    featured,
}) {
    return (
        <article
            className={`bg-white  rounded-3xl md:flex-row lg:flex-col overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border hover:border-[#233957]  hover:shadow-lg  border border-black/15 `}
        >
            {/* Image */}
            <div className="relative aspect-4/3 md:aspect-4/3  md:shrink-0 lg:w-full lg:aspect-4/3  overflow-hidden">
                {image ? (
                    <Image src={image} alt={`${city}, ${country}`} fill className="object-cover" />
                ) : (
                    <div className="w-full h-full bg-linear-to-br from-[#1a2a3a] via-[#2d4a6a] to-[#1a3050] flex items-center justify-center text-white/20 text-4xl">
                        🏛
                    </div>
                )}

                {/* Badge top-left */}
                {badge && (
                    <span className={`absolute top-2.5 left-2.5 text-[11px]  text-white font-semibold px-2.5 py-1 rounded-full
          ${featured ? " border-white" : "bg-white/20 border border-white/60"}
          `}
                        style={featured ? {
                            background: "linear-gradient(134deg, rgba(253,199,37,0.50) 35.01%, rgba(139,109,18,0.50) 85.14%), #FDC725"
                        } : {}}
                    >
                        {badge}
                    </span>
                )}

                {/* Verified badge top-right */}
                <span className="absolute top-2.5 right-2.5 text-[11px] font-medium px-2 py-1 rounded-full bg-green-600 text-white flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <g clipPath="url(#clip0_375_2453)">
                            <path d="M10 6.49998C10 8.99998 8.25 10.25 6.17 10.975C6.06108 11.0119 5.94277 11.0101 5.835 10.97C3.75 10.25 2 8.99998 2 6.49998V2.99998C2 2.86737 2.05268 2.7402 2.14645 2.64643C2.24021 2.55266 2.36739 2.49998 2.5 2.49998C3.5 2.49998 4.75 1.89998 5.62 1.13998C5.72593 1.04948 5.86068 0.999756 6 0.999756C6.13932 0.999756 6.27407 1.04948 6.38 1.13998C7.255 1.90498 8.5 2.49998 9.5 2.49998C9.63261 2.49998 9.75979 2.55266 9.85355 2.64643C9.94732 2.7402 10 2.86737 10 2.99998V6.49998Z" stroke="#F6F9FB" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.5 6L5.5 7L7.5 5" stroke="#F6F9FB" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_375_2453">
                                <rect width="12" height="12" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    Price verified
                </span>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col  flex-1 ">
                {/* Destination + Price */}
                <div className="flex justify-between items-start ">
                    <div className="flex flex-col gap-4.5">
                        <h3 className="font-fraunces text-2xl font-medium text-navy leading-tight">{city}</h3>
                        <p className="text-xs text-gray-400 ">{country}</p>
                    </div>
                    <div className="text-right">
                        <div className="flex  items-center gap-2 text-[8px] text-black/40 bg-yellow-100 rounded-full px-2 py-0.2">
                            <span>Price generated</span>
                            <span className="font-semibold text-gray-600">0s ago</span>
                            <span>22:46</span>
                        </div>
                        <p className="font-fraunces leading-9 text-xl font-normal tracking-tight text-[30px]">{price}</p>
                        <p className="text-[11px] leading-4 text-gray-400">per person</p>
                    </div>
                </div>

                {/* Airline + Duration */}
                <div className="w-full flex items-center  py-5  gap-2 text-[14px] text-gray-500">
                    <div className="w-1/2 flex justify-start gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M10.3833 11.2L9.33333 6.41667L11.375 4.375C12.25 3.5 12.5417 2.33333 12.25 1.75C11.6667 1.45833 10.5 1.75 9.625 2.625L7.58333 4.66667L2.8 3.61667C2.50833 3.55833 2.275 3.675 2.15833 3.90833L1.98333 4.2C1.86667 4.49167 1.925 4.78333 2.15833 4.95833L5.25 7L4.08333 8.75H2.33333L1.75 9.33333L3.5 10.5L4.66667 12.25L5.25 11.6667V9.91667L7 8.75L9.04167 11.8417C9.21667 12.075 9.50833 12.1333 9.8 12.0167L10.0917 11.9C10.325 11.725 10.4417 11.4917 10.3833 11.2Z" stroke="#F6C330" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {airline}
                    </div>

                    <div className="w-1/2 flex gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <g clip-path="url(#clip0_375_2481)">
                                <path d="M6.99984 12.8333C10.2215 12.8333 12.8332 10.2216 12.8332 6.99996C12.8332 3.7783 10.2215 1.16663 6.99984 1.16663C3.77818 1.16663 1.1665 3.7783 1.1665 6.99996C1.1665 10.2216 3.77818 12.8333 6.99984 12.8333Z" stroke="#F6C330" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7 3.5V7L9.33333 8.16667" stroke="#F6C330" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_375_2481">
                                    <rect width="14" height="14" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        {duration}
                    </div>
                </div>

                {/* AI Explanation */}
                <div className=" rounded-lg p-2 flex gap-2 items-start bg-black/6">
                    <div
                        className="w-8 h-8 shrink-0 rounded-full border border-[rgba(250,208,82,0.91)]   backdrop-blur-md flex flex-col items-center justify-center mt-0.5"
                        style={{
                            background: "linear-gradient(134deg, rgba(253,199,37,0.50) 35.01%, rgba(139,109,18,0.50) 85.14%), #FDC725"
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.34447 1.87605C7.37304 1.72312 7.45419 1.58499 7.57387 1.4856C7.69355 1.3862 7.84423 1.33179 7.99981 1.33179C8.15538 1.33179 8.30606 1.3862 8.42574 1.4856C8.54542 1.58499 8.62657 1.72312 8.65514 1.87605L9.35581 5.58138C9.40557 5.84482 9.53359 6.08713 9.72316 6.2767C9.91273 6.46627 10.155 6.59429 10.4185 6.64405L14.1238 7.34472C14.2767 7.37328 14.4149 7.45443 14.5143 7.57412C14.6137 7.6938 14.6681 7.84447 14.6681 8.00005C14.6681 8.15563 14.6137 8.3063 14.5143 8.42599C14.4149 8.54567 14.2767 8.62682 14.1238 8.65538L10.4185 9.35605C10.155 9.40581 9.91273 9.53383 9.72316 9.7234C9.53359 9.91297 9.40557 10.1553 9.35581 10.4187L8.65514 14.1241C8.62657 14.277 8.54542 14.4151 8.42574 14.5145C8.30606 14.6139 8.15538 14.6683 7.99981 14.6683C7.84423 14.6683 7.69355 14.6139 7.57387 14.5145C7.45419 14.4151 7.37304 14.277 7.34447 14.1241L6.64381 10.4187C6.59404 10.1553 6.46602 9.91297 6.27645 9.7234C6.08688 9.53383 5.84457 9.40581 5.58114 9.35605L1.87581 8.65538C1.72287 8.62682 1.58475 8.54567 1.48535 8.42599C1.38595 8.3063 1.33154 8.15563 1.33154 8.00005C1.33154 7.84447 1.38595 7.6938 1.48535 7.57412C1.58475 7.45443 1.72287 7.37328 1.87581 7.34472L5.58114 6.64405C5.84457 6.59429 6.08688 6.46627 6.27645 6.2767C6.46602 6.08713 6.59404 5.84482 6.64381 5.58138L7.34447 1.87605Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.3335 1.33337V4.00004" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.6667 2.66663H12" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2.66683 14.6667C3.40321 14.6667 4.00016 14.0697 4.00016 13.3333C4.00016 12.597 3.40321 12 2.66683 12C1.93045 12 1.3335 12.597 1.3335 13.3333C1.3335 14.0697 1.93045 14.6667 2.66683 14.6667Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-[10px] font-semibold text-black mb-0.5">AI Explanation</p>
                        <p className="text-[14px] leading-5.5 text-gray-500 ">{aiNote}</p>
                    </div>
                </div>

                {/* Actions */}
                <div className=" w-full mt-5  flex gap-2 md:gap-3      ">
                    <Link
                        href={`/trips/${id}`}
                        className="flex-1 text-center text-sm font-medium border-l-2 border-r-2 border-black/10  rounded-full py-1.5 bg-black/6 hover:bg-gray-50 transition-colors"
                    >
                        View details
                    </Link>
                    <Link
                        href={`/trips/${id}/select`}
                        className="flex-1 text-center text-sm font-medium text-white rounded-full py-1.5 
    border border-[#8B6D12]
    shadow-[0_18px_17px_0_rgba(0,0,0,0.10)]
    backdrop-blur-md
    transition-all flex items-center justify-center gap-1.5"
                        style={{
                            background: "linear-gradient(134deg, rgba(64,118,189,0.50) 35.01%, rgba(30,58,95,0.50) 85.14%), #1E3A5F",
                        }}
                    >
                        Select
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

            </div>


        </article>
    );
}