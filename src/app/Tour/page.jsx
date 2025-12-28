import Image from "next/image";
import Link from "next/link";
import tours from "../data/tours";

export default function TourPage() {
    return (
        <main className="bg-[#FAF7F2] text-gray-800">

            {/* Hero */}
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image
                    src="/assets/section-banner.jpg"
                    alt="Our Tours"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <h1 className="relative text-4xl md:text-5xl font-bold text-white">
                    Our Tours
                </h1>
            </section>

            {/* Tours Grid */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tours.map((tour) => (
                        <div
                            key={tour.id}
                            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
                        >
                            <div className="relative h-56">
                                <Image
                                    src={tour.image}
                                    alt={tour.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-1">
                                    {tour.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-3">
                                    📍 {tour.location}
                                </p>

                                <div className="flex justify-between text-sm mb-4">
                                    <span>⏱ {tour.duration}</span>
                                    <span className="font-semibold text-[#193555]">
                                        {tour.price}
                                    </span>
                                </div>

                                <Link
                                    href={`/ToursDetails/${tour.id}`}
                                    className="block text-center bg-[#193555] text-white py-3 rounded-full hover:bg-blue-900 transition"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
