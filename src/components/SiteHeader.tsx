import Link from "next/link";

export default function SiteHeader() {
    return (
        <header className="border-b border-orange-100 bg-white/90 backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
                <div>
                    <Link href="/" className="block">
                        <h1 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
                            Etarnity Image Compressor
                        </h1>
                    </Link>
                    <p className="text-sm text-gray-500">
                        By Etarnity Global Innovation
                    </p>
                </div>

                <nav className="flex flex-wrap items-center gap-2">
                    <Link
                        href="/"
                        className="rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-orange-50"
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className="rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-orange-50"
                    >
                        About
                    </Link>

                    <Link
                        href="/privacy-policy"
                        className="rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-orange-50"
                    >
                        Privacy
                    </Link>

                    <Link
                        href="/terms"
                        className="rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-orange-50"
                    >
                        Terms
                    </Link>

                    <Link
                        href="/contact"
                        className="rounded-full border border-orange-500 bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}