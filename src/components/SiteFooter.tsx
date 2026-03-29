import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer className="border-t border-orange-100 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-gray-500 sm:px-6 md:flex-row md:items-center md:justify-between">
                <div>
                    <p>© 2026 Etarnity Global Innovation. All rights reserved.</p>
                    <p className="mt-1">Free online image compression tool.</p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <Link href="/" className="transition hover:text-orange-600">
                        Home
                    </Link>
                    <Link href="/about" className="transition hover:text-orange-600">
                        About
                    </Link>
                    <Link
                        href="/privacy-policy"
                        className="transition hover:text-orange-600"
                    >
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className="transition hover:text-orange-600">
                        Terms
                    </Link>
                    <Link href="/contact" className="transition hover:text-orange-600">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}