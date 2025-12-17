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
                        Find Your Best <br /> travel Package
                    </h1>


                </div>
            </div>
        </>
    )
}