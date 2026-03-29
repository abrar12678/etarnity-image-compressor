import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <SiteHeader />

            <section className="border-b border-orange-100 bg-white">
                <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
                    <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-700">
                        Contact
                    </span>

                    <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        Contact Us
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        If you have questions, feedback, or business inquiries, feel free
                        to contact Etarnity Global Innovation.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
                <div className="rounded-3xl border border-orange-100 bg-orange-50 p-8">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Get in touch
                    </h2>

                    <p className="mt-4 leading-7 text-gray-600">
                        You can reach us by email for support, feedback, partnerships, or
                        general questions related to Etarnity Image Compressor.
                    </p>

                    <div className="mt-8 rounded-2xl border border-orange-100 bg-white p-6">
                        <p className="text-sm font-medium text-gray-500">Email</p>
                        <p className="mt-2 text-lg font-semibold text-gray-900">
                            info@email.com
                        </p>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
}