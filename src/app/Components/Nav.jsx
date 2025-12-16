"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faFlickr, faTwitter } from "@fortawesome/free-brands-svg-icons";
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

            <div className={`nav-top w-full flex justify-between items-center gap-3
            px-[2%] sm:px-[8%] lg:px-[12%] overflow-hidden transition-all duration-500 ease-in-out
            ${isScrolled ? "max-h-0 opacity-0 py-0" : " amx-h- [200px] opacity-100 py-3"}

            
            `}>
                <ul className="hidden lg:flex items-center gap-3 text-[#727272]">
                    <li className="text-Sm">
                        <FontAwesomeIcon icon={faPhone} className='pr-1 text-[#727272]' />
                        <span>+91 20 9809 2342</span>
                    </li>

                    <li className="text-Sm">
                        <FontAwesomeIcon icon={faEnvelope} className='pr-1 text-[#c20909]' />
                        <span>Booking@Trip-Planner.com</span>
                    </li>


                </ul>



            </div>

        </nav >
    )
}