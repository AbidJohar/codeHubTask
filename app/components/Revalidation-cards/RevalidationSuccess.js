export default function RevalidationSuccess() {
    return (
        <main className="flex-1 flex items-center justify-center">
            <div className="border border-[#000000]/10
          w-full max-w-xs sm:max-w-sm md:max-w-md
          bg-white rounded-[30px]
          p-6
          flex flex-col items-center
        ">
                {/* Green check icon */}
                <div className="w-14 h-14 mb-7.75 rounded-full bg-[#0F9A59] flex items-center justify-center">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>

                {/* Text */}
                <div className="text-center space-y-3.75">
                    <p className="text-[21px] font-normal font-fraunces leading-[25.2px] text-[#333] tracking-tight">
                        All good
                    </p>
                    <p className="text-[18px] text-black/50 leading-6 mb-1">
                        Price and availability confirmed.<br className="hidden sm:block" />
                        Heading to booking..
                    </p>
                </div>
            </div>
        </main>
    );
}