import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="bg-[#FAF7F2] text-gray-800">

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <Image
                    src="/assets/section.jpg"
                    alt="About Trip Planner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <h1 className="relative text-4xl md:text-5xl font-bold text-white">
                    About Us
                </h1>
            </section>

            {/* About Content */}
            <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-[#193555]">
                        Who We Are
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Trip-Planner is a trusted travel agency dedicated to creating
                        unforgettable travel experiences. From luxury tours to adventure
                        trips, we help travelers explore the world with comfort and ease.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Our expert team carefully plans every journey to ensure safety,
                        quality, and memorable moments—because your journey matters to us.
                    </p>
                </div>

                <div>
                    <Image
                        src="/assets/hero-image.jpg"
                        alt="Travel Experience"
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-lg"
                    />
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-[#193555]">
                        Why Choose Trip-Planner?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow">
                            <h3 className="text-xl font-semibold mb-3">
                                Expert Planning
                            </h3>
                            <p className="text-gray-600">
                                Our experienced planners design trips that match your dreams
                                and budget perfectly.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow">
                            <h3 className="text-xl font-semibold mb-3">
                                Affordable Prices
                            </h3>
                            <p className="text-gray-600">
                                We offer the best travel deals without compromising quality
                                or comfort.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow">
                            <h3 className="text-xl font-semibold mb-3">
                                24/7 Support
                            </h3>
                            <p className="text-gray-600">
                                Our team is always available to assist you before, during,
                                and after your trip.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <h3 className="text-4xl font-bold text-[#193555]">10+</h3>
                        <p className="text-gray-600">Years Experience</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-[#193555]">500+</h3>
                        <p className="text-gray-600">Destinations</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-[#193555]">5k+</h3>
                        <p className="text-gray-600">Happy Travelers</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-[#193555]">99%</h3>
                        <p className="text-gray-600">Positive Reviews</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
