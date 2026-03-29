"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
    const pathname = usePathname();

    const navLinkStyle = (path: string) =>
        `rounded-full px-4 py-2 text-sm font-medium transition ${pathname === path
            ? "bg-black text-white" // Active style
            : "border border-gray-300 text-gray-700 hover:bg-gray-50" // Inactive style
        }`;

    return (
        <header className="border-b border-gray-100 bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                <div>
                    <Link href="/" className="block">
                        <h1 className="text-xl font-bold tracking-tight text-gray-900">
                            Etarnity Image Compressor
                        </h1>
                    </Link>
                    <p className="text-sm text-gray-500">
                        By Etarnity Global Innovation
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        href="/"
                        className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                    >
                        About
                    </Link>

                    <Link
                        href="/privacy-policy"
                        className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                    >
                        Privacy
                    </Link>

                    <Link
                        href="/terms"
                        className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                    >
                        Terms
                    </Link>
                    <Link
                        href="/contact"
                        className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </header>
    );
}