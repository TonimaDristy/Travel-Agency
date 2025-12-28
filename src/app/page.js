import Link from "next/link";
export default function Home() {
  return (
    <section className="hero flex items-center justify-center text-center">
      <div>
        <p className="text-white mb-6">
          Discover Unbeatable Travel Deals Across the World. Luxury, Comfort,
          and Adventure—All in One Package
        </p>


        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white drop-shadow-2xl">
            Plan Your Dream <br /> Vacation Today
          </h2>
        </div>



        <Link
          href="/Tour"
          className="mt-8 inline-block bg-blue-500 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-800 transition"
        >
          VIEW ALL TOURS
        </Link>

      </div>
    </section>
  );
}
