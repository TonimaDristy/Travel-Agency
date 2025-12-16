"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faFlickr, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";





export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <nav className={`navbar fixed top-0 w-full z-50 transition-all duration-500 ease-in-out
        ${isScrolled ? "shadow-md bg-white py-3 scrolled" : "py-0"}
        `}>

            {/* Nav Top(hidden on scroll with transition)*/}

            <div className="nav-top w-full flex justify-between items-center px-[2%] sm:px-[8%] lg:px-[12%] py-3">
                {/* Left side: phone + email */}
                <ul className="hidden lg:flex items-center gap-6">
                    <li className="flex items-center gap-2 text-sm text-[#727272]">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>+91 20 9809 2342</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-[#091fc2]">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>Booking@Trip-Planner.com</span>
                    </li>
                </ul>

                {/* Right side: social icons */}
                <ul className="flex items-center gap-3">
                    <li><FontAwesomeIcon icon={faFacebook} className="text-[#8192a0]" /></li>
                    <li><FontAwesomeIcon icon={faFlickr} className="text-[#8192a0]" /></li>
                    <li><FontAwesomeIcon icon={faXTwitter} className="text-[#8192a0]" /></li>
                </ul>
            </div>

        </nav >
    )
}