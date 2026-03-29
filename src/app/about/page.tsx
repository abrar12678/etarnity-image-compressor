import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <SiteHeader />

            <section className="border-b border-gray-100 bg-white">
                <div className="mx-auto max-w-4xl px-6 py-16">
                    <span className="inline-block rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700">
                        About Us
                    </span>

                    <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        Built by Etarnity Global Innovation
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Etarnity Image Compressor is a product of Etarnity Global
                        Innovation, a growing digital company focused on building useful,
                        simple, and accessible online tools for everyday users.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-4xl px-6 py-16">
                <div className="space-y-10">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Our Mission
                        </h2>
                        <p className="mt-4 text-base leading-7 text-gray-600">
                            Our mission is to create practical digital tools that help
                            creators, freelancers, students, and businesses complete tasks
                            faster and more easily online.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Why We Built This Tool
                        </h2>
                        <p className="mt-4 text-base leading-7 text-gray-600">
                            Large image files can slow down websites, make uploads difficult,
                            and create unnecessary friction. We built Etarnity Image
                            Compressor to offer a fast, secure, and user-friendly way to
                            reduce image size directly in the browser.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Privacy First
                        </h2>
                        <p className="mt-4 text-base leading-7 text-gray-600">
                            This tool is designed to process images locally in the browser,
                            helping users keep their files private while compressing them
                            quickly and efficiently.
                        </p>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
}