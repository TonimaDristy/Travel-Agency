"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faUser,
    faEnvelope,
    faBars,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faFlickr,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500
      ${isScrolled ? "shadow-md bg-white" : "bg-transparent"}`}
        >
            {/* Top Bar */}
            <div className="relative flex justify-between items-center px-6 sm:px-12 py-3">
                {/* Center: Phone + Email */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-6">
                    <span className="flex items-center gap-2 text-sm text-gray-700">
                        <FontAwesomeIcon icon={faPhone} />
                        +91 20 9809 2342
                    </span>
                    <span className="flex items-center gap-2 text-sm text-blue-800">
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

                {/* Login / Signup */}
                <ul className="flex items-center gap-4 pl-4">
                    <li className="text-sm">
                        <Link href="/Login" className="cursor-pointer hover:text-blue-600">
                            Login
                        </Link>
                    </li>
                    <li className="text-sm flex items-center gap-1">
                        <FontAwesomeIcon icon={faUser} className="text-[#8192a0]" />
                        <Link href="/Signup" className="cursor-pointer hover:text-blue-600">
                            Sign Up
                        </Link>
                    </li>
                </ul>

            </div>

            {/* Main Navigation */}
            <div
                className={`w-full px-[2%] sm:px-[8%] lg:px-[12%]
        flex justify-between lg:justify-center items-center transition-all duration-500
        ${isScrolled ? "bg-amber-50" : "bg-transparent"}`}
            >
                {/* Mobile Logo */}
                <div className="lg:hidden text-2xl font-semibold uppercase">
                    <Link href="/" className="unbounded-font">
                        Trip<span>Planner</span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-14 py-5">
                    <li>
                        <Link href="/" className="font-[500] hover:text-black">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link href="/About" className="font-[500] text-[#697e8a] hover:text-black">
                            About
                        </Link>
                    </li>

                    {/* Center Logo */}
                    <li className="text-3xl font-semibold uppercase">
                        <Link href="/" className="unbounded-font">
                            Trip<span>Planner</span>
                        </Link>
                    </li>

                    {/* TOUR — placed right after logo */}
                    <li>
                        <Link href="/Tour" className="font-[500] text-[#697e8a] hover:text-black">
                            Tour
                        </Link>
                    </li>

                    <li>
                        <Link href="/Contact" className="font-[500] text-[#697e8a] hover:text-black">
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Mobile Toggle */}
                <div
                    className="lg:hidden cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FontAwesomeIcon
                        icon={isOpen ? faTimes : faBars}
                        className="text-[#193555] text-xl"
                    />
                </div>

                {/* Mobile Menu */}
                <ul
                    className={`lg:hidden absolute left-0 top-full w-full bg-[#f7f7f7]
          flex flex-col items-center gap-6 shadow-md transition-all duration-500 overflow-hidden
          ${isOpen ? "max-h-[400px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"}`}
                >
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/About">About</Link></li>
                    <li><Link href="/Tour">Tour</Link></li>
                    <li><Link href="/Contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}
