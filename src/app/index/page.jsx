"use client";

import React from "react";

export default function Index() {
    return (
        <div className="relative w-full h-screen bg-[url('/images/hero-image.jpg')] bg-cover bg-center flex items-center justify-center">
            <div className="text-center px-4 max-w-3xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white unbounded-font">
                    Plan Your Dream <br /> Vacation Today
                </h1>
                <p className="mt-4 text-blue-300 max-w-xl mx-auto">
                    Discover Unbeatable Travel Deals Across the World. Luxury, Comfort, and Adventure—All in One Package
                </p>
                <a
                    href="#"
                    className="mt-6 inline-block bg-blue-500 text-[#193555] hover:bg-amber-700 font-bold px-6 py-4 rounded-full transition-colors duration-300 uppercase text-sm md:text-md unbounded-font"
                >
                    View All Tours
                </a>
            </div>
        </div>
    );
}
