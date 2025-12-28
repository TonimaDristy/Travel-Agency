"use client";

import Image from "next/image";

export default function ContactPage() {
    return (
        <main className="bg-[#FAF7F2] text-gray-800">

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center">
                <Image
                    src="/assets/section-banner.jpg"
                    alt="Contact Trip Planner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <h1 className="relative text-4xl md:text-5xl font-bold text-white">
                    Contact Us
                </h1>
            </section>

            {/* Contact Info */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-2xl shadow text-center">
                        <h3 className="text-xl font-semibold mb-2">📍 Our Office</h3>
                        <p className="text-gray-600">
                            Dhaka, Bangladesh
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow text-center">
                        <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
                        <p className="text-gray-600">
                            +880 1234 567 890
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow text-center">
                        <h3 className="text-xl font-semibold mb-2">✉ Email</h3>
                        <p className="text-gray-600">
                            support@trip-planner.com
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-[#193555]">
                            Get in Touch
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Have questions or need help planning your trip?
                            Fill out the form and our team will get back to you shortly.
                        </p>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-[#193555]"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-[#193555]"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-[#193555]"
                            />
                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                className="w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-[#193555]"
                            ></textarea>

                            <button
                                type="submit"
                                className="bg-[#193555] text-white px-8 py-4 rounded-full hover:bg-blue-900 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Image */}
                    <div>
                        <Image
                            src="/assets/hero-image.jpg"
                            alt="Contact Travel"
                            width={600}
                            height={500}
                            className="rounded-2xl shadow-lg"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
