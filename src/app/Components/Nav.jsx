"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faFlickr, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

export default function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? "shadow-md bg-white py-3" : "py-0"
                }`}
        >
            <div className="flex justify-between items-center px-6 sm:px-12 py-3 relative">
                {/* Center: Phone + Email */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-6">
                    <span className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <FontAwesomeIcon icon={faPhone} />
                        +91 20 9809 2342
                    </span>
                    <span className="flex items-center gap-2 text-sm text-blue-800 dark:text-blue-400">
                        <FontAwesomeIcon icon={faEnvelope} />
                        Booking@Trip-Planner.com
                    </span>
                </div>

                {/* Right: Social Icons */}
                <div className="flex items-center gap-4 ml-auto">
                    <FontAwesomeIcon icon={faFacebook} className="text-[#8192a0] cursor-pointer" />
                    <FontAwesomeIcon icon={faFlickr} className="text-[#8192a0] cursor-pointer" />
                    <FontAwesomeIcon icon={faXTwitter} className="text-[#8192a0] cursor-pointer" />
                </div>

                <ul className="flex items-center gap-4 ps-3">
                    <li className="lg:text-md text-sm cursor-pointer">
                        <i className="ri-lock-line pr-1 text-[#8192a0]"></i>
                        <span>Login</span>
                    </li>
                    <li className="lg:text-md text-sm cursor-pointer">
                        <FontAwesomeIcon icon={faUser} className="text-[#8192a0] cursor-pointer" />
                    </li>

                </ul>

            </div>
        </nav>
    );
}
