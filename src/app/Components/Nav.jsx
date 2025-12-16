"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Faphone,
    faEnvelope,
    faUser,
    faBars,
    faTimes,


} from '@fortawesome/free-brands-svg-icons';


import { faFacebook, faFlicker } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { useEffect, useState } from "react";





export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };


    })


    return (
        <div>Nav</div>
    )
}