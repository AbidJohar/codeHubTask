export default function RevalidationLoader() {
    return (
        <main className="flex-1 flex items-center justify-center ">
            <div className=" border border-[#000000]/10
          w-full max-w-xs sm:max-w-sm md:max-w-md
          bg-white rounded-[30px] 
          p-6
          flex flex-col items-center 
        ">
                {/* Spinner */}
                <div className="relative w-14 h-14 mb-7.75 border-2 border-[#005BB5] border-l-[#F9CF29] rounded-full animate-spin" />

                {/* Text */}
                <div className="text-center space-y-3.75">
                    <p className="text-[21px] font-normal font-fraunces leading-[25.2px] text-[#333] tracking-tight">
                        Checking price and availability
                    </p>
                    <p className="text-[18px] text-black/50 leading-6 mb-1">
                        We're verifying the latest price and seat<br className="hidden sm:block" />
                        availability before you continue…
                    </p>
                </div>
            </div>
        </main>
    );
}