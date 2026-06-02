import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#FFFFFF]/80 font-sans ">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-start justify-start py-32 px-16 bg-white  sm:items-start">
        <h1>Pages navigation links:</h1>
        <div className="flex gap-6 mt-4">
          <Link href="/results" className="text-sm underline underline-offset-1 text-blue-600 hover:underline">
            Results Page
          </Link>
          <Link href="/trips/checkout" className="text-sm underline underline-offset-1 text-blue-600 hover:underline">
            Checkout Page
          </Link>
          <Link href="/revalidation-screens" className="text-sm underline underline-offset-1 text-blue-600 hover:underline">
            revalidation-screens
          </Link>
        </div>
      </main>
    </div>
  );
}