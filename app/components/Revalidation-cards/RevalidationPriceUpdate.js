export default function RevalidationPriceUpdated({ previousPrice = 412, newPrice = 201, currency = "€" }) {
    return (
        <main className="flex-1 flex items-center justify-center">
            <div className="border border-[#000000]/10
          w-full max-w-xs sm:max-w-sm md:max-w-md
          bg-white rounded-[30px]
          p-6
          flex flex-col items-center
        ">
                {/* Warning icon */}
                <div className="w-14 h-14 mb-7.75 rounded-full border-2 border-[#F2A618] bg-[#F2A618]/10 flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E8A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                </div>

                {/* Text */}
                <div className="text-center space-y-3.75 mb-6">
                    <p className="text-[21px] font-normal font-fraunces leading-[25.2px] text-[#333] tracking-tight">
                        Price has been updated
                    </p>
                    <p className="text-[18px] text-black/50 leading-6">
                        The price for this trip has changed since you last checked.
                    </p>
                </div>

                {/* Price comparison */}
                <div className="w-full border border-[#000000]/10 rounded-2xl px-5 py-4 flex items-center justify-between mb-4">
                    <div className="flex flex-col gap-0.5">
                        <span className="text-[13px] text-black/50">Previous Price</span>
                        <span className="text-[17px] line-through text-black/50">{currency}{previousPrice}</span>
                    </div>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                    <div className="flex flex-col gap-0.5 items-end">
                        <span className="text-[13px] text-black/50">New Price</span>
                        <span className="text-[21px] font-semibold text-[#005BB5]">{currency}{newPrice}</span>
                    </div>
                </div>


                 {/* buttons */}
                 <div className="w-full flex flex-col gap-3">
                {/* Accept button */}
                <button className="w-full text-center text-sm font-medium text-[#F8FDFD] rounded-full p-4 
    border border-[#8B6D12]
   
    transition-all flex items-center justify-center gap-2"
                    style={{
                        background: "linear-gradient(134deg, rgba(64,118,189,0.50) 35.01%, rgba(30,58,95,0.50) 85.14%), #1E3A5F",
                    }}>
                    Accept new price&nbsp;&nbsp;{currency}{newPrice}
                </button>

                {/* Go back button */}
                <button className="w-full text-center text-sm text-[#00242F] font-medium   border-l-2 border-r-2 border-[#666666]/20  rounded-full p-4 bg-[#EDF1F1] hover:bg-gray-50 transition-colors">
                    Go back to results
                </button>
                </div>


            </div>
        </main>
    );
}