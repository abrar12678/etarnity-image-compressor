import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <SiteHeader />

            <section className="border-b border-gray-100 bg-white">
                <div className="mx-auto max-w-4xl px-6 py-16">
                    <span className="inline-block rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700">
                        Terms of Service
                    </span>

                    <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        Terms of Service
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        These Terms of Service govern your use of Etarnity Image
                        Compressor.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-4xl px-6 py-16">
                <div className="space-y-10 text-gray-600">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">
                            1. Acceptance of Terms
                        </h2>
                        <p className="mt-4 leading-7">
                            By using this website, you agree to these Terms of Service. If
                            you do not agree, please do not use the site.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">
                            2. Use of the Tool
                        </h2>
                        <p className="mt-4 leading-7">
                            Etarnity Image Compressor is provided as a free online utility.
                            You agree to use it only for lawful purposes and in a way that
                            does not harm the website or other users.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">
                            3. No Guarantees
                        </h2>
                        <p className="mt-4 leading-7">
                            We aim to keep the tool available and accurate, but we do not
                            guarantee uninterrupted service or that the tool will meet every
                            specific requirement.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">
                            4. Limitation of Liability
                        </h2>
                        <p className="mt-4 leading-7">
                            Etarnity Global Innovation is not liable for any loss, damage, or
                            issue resulting from the use of this website or its tools.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">
                            5. Changes
                        </h2>
                        <p className="mt-4 leading-7">
                            We may update these terms at any time. Continued use of the site
                            means you accept any revised terms.
                        </p>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
}