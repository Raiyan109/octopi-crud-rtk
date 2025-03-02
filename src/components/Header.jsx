"use client"

import { useState, useEffect } from "react"

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll)

        // Clean up
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-sm py-4 shadow-sm" : "bg-transparent py-6"
                }`}
            data-scroll
            data-scroll-sticky
            data-scroll-target="#__next"
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-neutral-900">
                    Loco<span className="text-blue-600">Motion</span>
                </a>
                <nav className="hidden md:flex space-x-8">
                    <a href="#about" className="text-neutral-700 hover:text-blue-600 transition-colors">
                        About
                    </a>
                    <a href="#services" className="text-neutral-700 hover:text-blue-600 transition-colors">
                        Services
                    </a>
                    <a href="#work" className="text-neutral-700 hover:text-blue-600 transition-colors">
                        Work
                    </a>
                    <a href="#contact" className="text-neutral-700 hover:text-blue-600 transition-colors">
                        Contact
                    </a>
                </nav>
                <button className="md:hidden text-neutral-900">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </header>
    )
}

