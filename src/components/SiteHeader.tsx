"use client";

import Link from "next/link";
import { useState } from "react";

function MenuIcon({ className = "h-5 w-5" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            <path d="M3 6h18" />
            <path d="M3 12h18" />
            <path d="M3 18h18" />
        </svg>
    );
}

function CloseIcon({ className = "h-5 w-5" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
        </svg>
    );
}

export default function SiteHeader() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/90 backdrop-blur-sm">
            <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between gap-4">
                    <div className="animate-fade-up">
                        <Link href="/" className="block interactive-smooth hover-lift-sm">
                            <h1 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
                                Etarnity Image Compressor
                            </h1>
                        </Link>
                        <p className="text-sm text-gray-500">
                            By Etarnity Global Innovation
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="interactive-smooth hover-lift-sm inline-flex items-center justify-center rounded-full border border-orange-200 bg-white p-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 hover:shadow-sm md:hidden"
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? (
                            <CloseIcon className="h-5 w-5" />
                        ) : (
                            <MenuIcon className="h-5 w-5" />
                        )}
                    </button>

                    <nav className="hidden items-center gap-2 md:flex">
                        <Link
                            href="/"
                            className="interactive-smooth hover-lift-sm rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 hover:shadow-sm"
                        >
                            Home
                        </Link>

                        <Link
                            href="/about"
                            className="interactive-smooth hover-lift-sm rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 hover:shadow-sm"
                        >
                            About
                        </Link>

                        <Link
                            href="/privacy-policy"
                            className="interactive-smooth hover-lift-sm rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 hover:shadow-sm"
                        >
                            Privacy
                        </Link>

                        <Link
                            href="/terms"
                            className="interactive-smooth hover-lift-sm rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 hover:shadow-sm"
                        >
                            Terms
                        </Link>

                        <Link
                            href="/contact"
                            className="interactive-smooth hover-lift-sm rounded-full border border-orange-500 bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>

                <div
                    className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${isOpen ? "mt-4 max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <nav className="flex flex-col gap-2 border-t border-orange-100 pt-4">
                        <Link
                            href="/"
                            className="interactive-smooth hover-lift-sm rounded-2xl border border-orange-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 hover:shadow-sm"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>

                        <Link
                            href="/about"
                            className="interactive-smooth hover-lift-sm rounded-2xl border border-orange-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 hover:shadow-sm"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>

                        <Link
                            href="/privacy-policy"
                            className="interactive-smooth hover-lift-sm rounded-2xl border border-orange-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 hover:shadow-sm"
                            onClick={() => setIsOpen(false)}
                        >
                            Privacy
                        </Link>

                        <Link
                            href="/terms"
                            className="interactive-smooth hover-lift-sm rounded-2xl border border-orange-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 hover:shadow-sm"
                            onClick={() => setIsOpen(false)}
                        >
                            Terms
                        </Link>

                        <Link
                            href="/contact"
                            className="interactive-smooth hover-lift-sm rounded-2xl border border-orange-500 bg-orange-500 px-4 py-3 text-sm font-medium text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}