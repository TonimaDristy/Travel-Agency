"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faFlickr, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

import Link from "next/link";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


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
                        <span>Sing Up</span>
                    </li>

                </ul>

            </div>

            {/* Main Nav Menu */}
            <div className={`w-full px-[2%] sm:px-[8%] lg:px-[12%] 
            text-start lg:text-center relative flex justify-between lg:justify-center nav-menu-container
            transition-all duration-500 ease-in-out ${isScrolled ? "bg-amber-50" : "bg-transparent"}
            `}>

                {/*Logo For Mobile */}
                <div className="lg:hidden flex logo text-2xl uppercase font-semibold">
                    <a href="#" className="unbounded-font">Trip<span className="unbounded-font">Planner</span></a>
                </div>

                {/*Desktop Menu */}
                <ul className="nav-menu hidden lg:flex w-full justify-center items-center gap-14 py-5 relative">
                    <li><Link href='/' className="active font-[500] hover:text-black transition-colors duration-500">Home</Link></li>
                    <li><Link href='/About' className="active font-[500] text-[#697e8a] hover:text-black transition-colors duration-500">About</Link></li>
                    <li><Link href='/Tour' className="active font-[500] text-[#697e8a] hover:text-black transition-colors duration-500">Tour</Link></li>
                    <div className="logo text-3xl uppercase font-semibold">
                        <Link href="/" className="unbounded-font">Trip<span className="unbounded-font">Planner</span></Link>
                    </div>
                    <li><Link href='/Faq' className="active font-[500] text-[#697e8a] hover:text-black transition-colors duration-500">Faq</Link></li>
                    <li><Link href='/Blog' className="active font-[500] text-[#697e8a] hover:text-black transition-colors duration-500">Blog</Link></li>
                    <li><Link href='/Contact' className="active font-[500] text-[#697e8a] hover:text-black transition-colors duration-500">Contact</Link></li>

                </ul>
                {/* Mobile Toggle*/}
                <div className="flex justify-center items-center">
                    <div
                        className="toggle-btn lg:hidden cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <FontAwesomeIcon
                            icon={isOpen ? faTimes : faBars}
                            className="text-[#193555] text-xl" />

                    </div>
                </div>

                {/*MObile Menu Drowdown*/}
                <ul className={`lg:hidden flex flex-col items-center gap-6 bg-[#f7f7f7] shadow-md absolute left-0 w-full
            overflow-hidden transition-all-500 ease-in-out
            ${isOpen ? "max-h-[500px] top-full mt-3 opacity-100 py-6" : "max-h-0 opacity-0 py-0 top-full"}
            
            `}>
                    <li><a href="#" className="font-[500] hover:text-black">Home</a></li>
                    <li><a href="#" className="font-[500] hover:text-black">About</a></li>
                    <li><a href="#" className="font-[500] hover:text-black">Tours</a></li>
                    <li><a href="#" className="font-[500] hover:text-black">Faq's</a></li>
                    <li><a href="#" className="font-[500] hover:text-black">Blog</a></li>
                    <li><a href="#" className="font-[500] hover:text-black">Contact</a></li>



                </ul>

            </div >
        </nav >
    );
}
