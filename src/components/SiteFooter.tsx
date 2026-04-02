import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer className="border-t border-orange-100 bg-white py-10">
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
                <div className="mb-3 flex justify-center">
                    <div className="interactive-smooth hover-lift-sm hover-shadow-soft flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-7 w-7"
                            aria-hidden="true"
                        >
                            <rect x="3" y="5" width="18" height="14" rx="2" />
                            <circle cx="8.5" cy="10" r="1.5" />
                            <path d="M21 16l-5-5-4 4-2-2-4 4" />
                        </svg>
                    </div>
                </div>

                <h5 className="text-xl font-bold text-gray-900">
                    Etarnity Image Compressor
                </h5>

                <p className="mx-auto mt-3 max-w-md text-sm text-gray-500">
                    A fast, lightweight, and free online image compressor for JPG, PNG,
                    and WebP files.
                </p>

                <p className="mt-3 text-sm text-gray-500">
                    Developed with ❤️ by{" "}
                    <span className="font-semibold text-gray-900">
                        Etarnity Global Innovation
                    </span>
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">
                    <Link
                        href="/privacy-policy"
                        className="interactive-smooth hover:text-orange-600 hover:-translate-y-0.5"
                    >
                        Privacy Policy
                    </Link>
                    <span className="text-orange-200">|</span>
                    <Link
                        href="/terms"
                        className="interactive-smooth hover:text-orange-600 hover:-translate-y-0.5"
                    >
                        Terms of Service
                    </Link>
                    <span className="text-orange-200">|</span>
                    <Link
                        href="/contact"
                        className="interactive-smooth hover:text-orange-600 hover:-translate-y-0.5"
                    >
                        Contact Us
                    </Link>
                </div>

                <div className="mt-8 border-t border-orange-100 pt-6">
                    <p className="text-sm font-medium text-gray-500">
                        © 2026 Etarnity Image Compressor. A Product of{" "}
                        <a
                            href="https://etarnity.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="interactive-smooth font-semibold text-orange-600 hover:text-orange-700"
                        >
                            Etarnity
                        </a>
                        .
                    </p>

                    <div className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-orange-500"
                        >
                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                            <path d="m22 7-10 7L2 7"></path>
                        </svg>

                        <span>Support:</span>
                        <a
                            href="mailto:your@email.com"
                            className="interactive-smooth font-medium text-orange-600 hover:text-orange-700"
                        >
                            your@email.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}