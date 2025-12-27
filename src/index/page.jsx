"use client";

export default function Index() {
    return (
        <div className="relative w-full h-screen flex items-center justify-center">
            {/* Background image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/images/hero-image.jpg')" }}
            ></div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Text content */}
            <div className="relative z-10 text-center px-4 max-w-3xl">
                <div className="hero-content relative text-center">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white drop-shadow-2xl">
                        Plan Your Dream <br /> Vacation Today
                    </h2>
                </div>

                <p className="mt-4 text-white text-lg md:text-xl drop-shadow-md">
                    Discover Unbeatable Travel Deals Across the World. Luxury, Comfort, and Adventure—All in One Package
                </p>

                <a
                    href="#"
                    className="mt-8 inline-block bg-blue-500 text-[#193555] hover:bg-amber-800 font-bold px-6 py-4 rounded-full transition-colors duration-300 uppercase text-sm md:text-md"
                >
                    View All Tours
                </a>
            </div>
        </div>
    );
}
