import ImageCompressor from "@/components/ImageCompressor";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AdPlaceholder from "@/components/AdPlaceholder";
import {
  UploadIcon,
  LightningIcon,
  ShieldIcon,
  ImageIcon,
  DownloadIcon,
} from "@/components/Icons";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="animate-fade-up">
            <span className="interactive-smooth hover-grow-sm inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-700">
              <ImageIcon className="h-4 w-4" />
              Free Online Tool
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              Compress JPG, PNG, and WebP images in seconds
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Reduce image file size without unnecessary steps. Fast, simple,
              and built for creators, freelancers, students, and businesses.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#compressor"
                className="interactive-smooth hover-lift-sm inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200"
              >
                <UploadIcon className="h-4 w-4" />
                Start Compressing
              </a>

              <a
                href="#features"
                className="interactive-smooth hover-lift-sm inline-flex items-center justify-center gap-2 rounded-full border border-orange-200 bg-white px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-orange-50 hover:text-orange-600 hover:shadow-sm"
              >
                <LightningIcon className="h-4 w-4" />
                Learn More
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-2xl border border-orange-100 bg-white p-4">
                <div className="flex items-center gap-2 text-orange-600">
                  <ImageIcon className="h-4 w-4" />
                  <p className="text-sm font-semibold text-gray-900">
                    Free to use
                  </p>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  No sign up required
                </p>
              </div>

              <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-2xl border border-orange-100 bg-white p-4">
                <div className="flex items-center gap-2 text-orange-600">
                  <LightningIcon className="h-4 w-4" />
                  <p className="text-sm font-semibold text-gray-900">
                    Fast processing
                  </p>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Compress in your browser
                </p>
              </div>

              <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-2xl border border-orange-100 bg-white p-4">
                <div className="flex items-center gap-2 text-orange-600">
                  <ShieldIcon className="h-4 w-4" />
                  <p className="text-sm font-semibold text-gray-900">Secure</p>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Your files stay on your device
                </p>
              </div>
            </div>
          </div>

          <div id="compressor" className="animate-fade-up-delay-1">
            <div className="interactive-smooth hover-shadow-md rounded-[28px]">
              <ImageCompressor />
            </div>
          </div>
        </div>

        <div className="mt-10 animate-fade-up-delay-2">
          <AdPlaceholder label="Top Banner Ad Space" />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl animate-fade-up">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900">
              How it works
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Compress your image in three simple steps.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="interactive-smooth hover-lift-md hover-shadow-soft rounded-2xl border border-orange-100 bg-orange-50 p-6">
              <div className="interactive-smooth hover-grow-sm mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white">
                <UploadIcon className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Upload your image
              </h4>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Choose a JPG, PNG, or WebP image directly from your device.
              </p>
            </div>

            <div className="interactive-smooth hover-lift-md hover-shadow-soft rounded-2xl border border-orange-100 bg-orange-50 p-6">
              <div className="interactive-smooth hover-grow-sm mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white">
                <LightningIcon className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Compress instantly
              </h4>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Adjust the compression quality and generate an optimized
                version of your image.
              </p>
            </div>

            <div className="interactive-smooth hover-lift-md hover-shadow-soft rounded-2xl border border-orange-100 bg-orange-50 p-6">
              <div className="interactive-smooth hover-grow-sm mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white">
                <DownloadIcon className="h-5 w-5" />
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

      <section id="features" className="bg-orange-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl animate-fade-up">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900">
              Why use Etarnity Image Compressor?
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Designed to be simple, fast, and practical for everyday image
              optimization.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="interactive-smooth hover-lift-md hover-shadow-soft rounded-2xl border border-orange-100 bg-white p-6">
              <div className="interactive-smooth hover-grow-sm mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <LightningIcon className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Quick compression
              </h4>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Reduce file size in seconds for websites, social media, email,
                and online forms.
              </p>
            </div>

            <div className="interactive-smooth hover-lift-md hover-shadow-soft rounded-2xl border border-orange-100 bg-white p-6">
              <div className="interactive-smooth hover-grow-sm mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <ShieldIcon className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                No account needed
              </h4>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Use the tool instantly without creating an account or installing
                any software.
              </p>
            </div>

            <div className="interactive-smooth hover-lift-md hover-shadow-soft rounded-2xl border border-orange-100 bg-white p-6">
              <div className="interactive-smooth hover-grow-sm mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <ImageIcon className="h-5 w-5" />
              </div>
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

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl animate-fade-up">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900">
              Who this tool is for
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Etarnity Image Compressor is built for anyone who needs smaller
              image files without complicated software.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-2xl border border-orange-100 bg-orange-50 p-6">
              <h4 className="text-lg font-semibold text-gray-900">Creators</h4>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Optimize images for content publishing, portfolios, and social
                media.
              </p>
            </div>

            <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-2xl border border-orange-100 bg-orange-50 p-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Freelancers
              </h4>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Reduce file sizes for client work, websites, and digital
                delivery.
              </p>
            </div>

            <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-2xl border border-orange-100 bg-orange-50 p-6">
              <h4 className="text-lg font-semibold text-gray-900">Students</h4>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Make images smaller for assignments, forms, presentations, and
                uploads.
              </p>
            </div>

            <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-2xl border border-orange-100 bg-orange-50 p-6">
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

      <section className="bg-orange-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center animate-fade-up">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900">
              Frequently Asked Questions
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Everything users need to know before compressing images online.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-2xl border border-orange-100 bg-white p-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Is this image compressor free to use?
              </h4>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Yes, Etarnity Image Compressor is completely free to use.
              </p>
            </div>

            <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-2xl border border-orange-100 bg-white p-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Do I need to create an account?
              </h4>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                No, you can compress images instantly without signing up.
              </p>
            </div>

            <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-2xl border border-orange-100 bg-white p-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Are my images uploaded to a server?
              </h4>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                No. This tool compresses images directly in your browser, which
                helps keep your files private.
              </p>
            </div>

            <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-2xl border border-orange-100 bg-white p-6">
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 animate-fade-up">
          <AdPlaceholder label="Middle Content Ad Space" />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="interactive-smooth hover-lift-sm hover-shadow-soft rounded-3xl border border-orange-100 bg-orange-50 p-8">
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="interactive-smooth hover-lift-sm hover-shadow-md rounded-3xl bg-orange-500 px-6 py-10 text-center text-white sm:px-8 sm:py-12">
            <h3 className="text-3xl font-bold tracking-tight">
              Ready to compress your image?
            </h3>
            <p className="mt-4 text-lg text-orange-100">
              Use Etarnity Image Compressor to reduce image size quickly,
              securely, and for free.
            </p>

            <div className="mt-8">
              <a
                href="#compressor"
                className="interactive-smooth hover-lift-sm inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-orange-600 hover:bg-orange-100 hover:shadow-lg"
              >
                <UploadIcon className="h-4 w-4" />
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