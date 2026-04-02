import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <SiteHeader />

            <section className="border-b border-orange-100 bg-white">
                <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 animate-fade-up">
                    <span className="interactive-smooth hover-grow-sm inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-700">
                        Privacy Policy
                    </span>

                    <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        Privacy Policy
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        This Privacy Policy explains how Etarnity Image Compressor handles
                        user data and protects privacy.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
                <div className="space-y-8 text-gray-600">
                    <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-3xl border border-orange-100 bg-orange-50 p-8">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            1. File Processing
                        </h2>
                        <p className="mt-4 leading-7">
                            Etarnity Image Compressor is designed to process images directly
                            in the user&apos;s browser. Your uploaded images are not sent to our
                            server during normal compression use.
                        </p>
                    </div>

                    <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-3xl border border-orange-100 bg-orange-50 p-8">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            2. Personal Information
                        </h2>
                        <p className="mt-4 leading-7">
                            We do not require users to create an account or provide personal
                            information to use the tool.
                        </p>
                    </div>

                    <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-3xl border border-orange-100 bg-orange-50 p-8">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            3. Analytics and Advertising
                        </h2>
                        <p className="mt-4 leading-7">
                            In the future, this website may use analytics tools and
                            advertising partners to understand usage and support the free
                            service. Those services may use cookies or similar technologies
                            according to their own privacy policies.
                        </p>
                    </div>

                    <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-3xl border border-orange-100 bg-orange-50 p-8">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            4. Changes to This Policy
                        </h2>
                        <p className="mt-4 leading-7">
                            We may update this Privacy Policy from time to time. Any updates
                            will be posted on this page.
                        </p>
                    </div>

                    <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-3xl border border-orange-100 bg-orange-50 p-8">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            5. Contact
                        </h2>
                        <p className="mt-4 leading-7">
                            If you have questions about this Privacy Policy, you can contact
                            Etarnity Global Innovation through the contact information
                            published on this website.
                        </p>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
}