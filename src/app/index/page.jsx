"use client"


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";
import Link from "next/link";


export default function Index() {
    return (
        <>
            <div className="hero h-screen min-h-screen flex justify-items-center items-center z-10">
                <div className="hero-content relative text-center">
                    <h1 className="xl:text-8xl lg:text-7xl md:text-6xl text-4xl unbounded-font font-bold text-white">
                        Plan Your Dream <br /> Vacation Today
                    </h1>
                    <p className="pt-3 text-blue-300 md:pb-10 pb-5">
                        Discover Unbeatable Travel Deals Across the World.Luxury, Comfort, and Adventure—All in One Package
                    </p>
                    <button className=" btn bg-blue-500 group text-amber-200 hover:bg-amber-700 font-bold px-6 w-auto py-4 rounded-full cursor-pointer transition-colors duration-300">
                        <a href="#" className="unbounded-font text-sm xl:text-md uppercase group-hover:text-white tarnsition-colors duration-300">
                            View All Tours
                        </a>

                    </button>
                </div>
            </div>
        </>
    )
}