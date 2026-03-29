import ImageCompressor from "@/components/ImageCompressor";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AdPlaceholder from "@/components/AdPlaceholder";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700">
              Free Online Tool
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
              Compress JPG, PNG, and WebP images in seconds
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Reduce image file size without unnecessary steps. Fast, simple,
              and built for creators, freelancers, students, and businesses.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#compressor"
                className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Start Compressing
              </a>

              <a
                href="#features"
                className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
              >
                Learn More
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 p-4">
                <p className="text-sm font-semibold text-gray-900">Free to use</p>
                <p className="mt-1 text-sm text-gray-500">
                  No sign up required
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-4">
                <p className="text-sm font-semibold text-gray-900">
                  Fast processing
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Compress in your browser
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-4">
                <p className="text-sm font-semibold text-gray-900">Secure</p>
                <p className="mt-1 text-sm text-gray-500">
                  Your files stay on your device
                </p>
              </div>
            </div>
          </div>

          <div id="compressor">
            <ImageCompressor />
          </div>
        </div>

        <div className="mt-10">
          <AdPlaceholder label="Top Banner Ad Space" />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900">
              How it works
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Compress your image in three simple steps.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                1
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Upload your image
              </h4>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Choose a JPG, PNG, or WebP image directly from your device.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                2
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Compress instantly
              </h4>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Adjust the compression quality and generate an optimized
                version of your image.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                3
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Download the result
              </h4>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Save the compressed image to your device and use it anywhere you
                need.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900">
              Why use Etarnity Image Compressor?
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Designed to be simple, fast, and practical for everyday image
              optimization.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Quick compression
              </h4>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Reduce file size in seconds for websites, social media, email,
                and online forms.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h4 className="text-lg font-semibold text-gray-900">
                No account needed
              </h4>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Use the tool instantly without creating an account or installing
                any software.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Works on all devices
              </h4>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Use it on desktop, laptop, tablet, or mobile browser with a
                smooth experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900">
              Who this tool is for
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Etarnity Image Compressor is built for anyone who needs smaller
              image files without complicated software.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h4 className="text-lg font-semibold text-gray-900">Creators</h4>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Optimize images for content publishing, portfolios, and social
                media.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Freelancers
              </h4>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Reduce file sizes for client work, websites, and digital
                delivery.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h4 className="text-lg font-semibold text-gray-900">Students</h4>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Make images smaller for assignments, forms, presentations, and
                uploads.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Businesses
              </h4>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Improve website speed and reduce image weight for better user
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900">
              Frequently Asked Questions
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Everything users need to know before compressing images online.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Is this image compressor free to use?
              </h4>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Yes, Etarnity Image Compressor is completely free to use.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Do I need to create an account?
              </h4>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                No, you can compress images instantly without signing up.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Are my images uploaded to a server?
              </h4>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                No. This tool compresses images directly in your browser, which
                helps keep your files private.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Which image formats are supported?
              </h4>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                The current version supports JPG, PNG, and WebP images.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-4">
        <div className="mx-auto max-w-4xl px-6">
          <AdPlaceholder label="Middle Content Ad Space" />
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border border-gray-200 bg-white p-8">
            <h3 className="text-2xl font-semibold text-gray-900">
              Important Notice
            </h3>
            <p className="mt-4 leading-7 text-gray-600">
              Etarnity Image Compressor is provided as a free online tool to
              help reduce image file sizes quickly and easily. Image processing
              is performed in the browser where possible, and compression
              results may vary depending on file type, quality settings, and
              image content.
            </p>
            <p className="mt-4 leading-7 text-gray-600">
              Users are responsible for reviewing compressed output before using
              it in production, publishing, printing, or client work.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl bg-black px-8 py-12 text-center text-white">
            <h3 className="text-3xl font-bold tracking-tight">
              Ready to compress your image?
            </h3>
            <p className="mt-4 text-lg text-gray-300">
              Use Etarnity Image Compressor to reduce image size quickly,
              securely, and for free.
            </p>

            <div className="mt-8">
              <a
                href="#compressor"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
              >
                Start Compressing Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}