import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { INSURANCE_PROVIDERS, isAxaLogo } from "@/lib/insurance-providers";

export const metadata: Metadata = {
  title: "Private medical insurance",
  description:
    "Mr Osama Moussa accepts patients covered by leading private medical insurers. Quick links open each insurer’s website; book a consultation via our contact page.",
  alternates: {
    canonical: "https://www.osamamoussa.co.uk/insurance",
  },
};

export default function InsurancePage() {
  return (
    <main className="relative min-h-screen bg-gradient-grey">
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-40 h-32 header-gradient-overlay" />
      <Header backgroundColor="grey" />

      {/* Page title — matches /procedures PageTitleSection */}
      <section className="w-full pt-32 pb-2 sm:pb-12">
        <div className="container mx-auto px-4 text-center sm:px-6 sm:text-left lg:px-8">
          <div className="inline-block bg-black px-6 py-4">
            <h1 className="page-title page-title-main font-bold leading-tight text-white normal-case">
              Private medical insurance
            </h1>
          </div>
        </div>
      </section>

      {/* Intro — matches /procedures desktop intro container */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="paragraph-block paragraph-block-full space-y-8 text-center text-lg leading-relaxed text-gray-200 sm:text-xl lg:text-left">
            <p>
              If you are insured with any of the providers below, you can typically use your cover
              to see <strong className="font-semibold text-white">Mr Osama Moussa</strong> for
              eligible private treatment, subject to your policy terms and insurer authorisation.
            </p>
            <p>
              Use the quick links to open each insurer&apos;s website in a new tab — to check your
              benefits, obtain an authorisation code, or follow their process before you book your
              appointment.
            </p>
            <p className="text-base text-gray-300 sm:text-lg">
              When you are ready to arrange a consultation with Mr Moussa, use our{" "}
              <Link
                href="/procedures/contact"
                className="font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
              >
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Provider grid — matches /procedures ProceduresGrid shell */}
      <section className="w-full py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {INSURANCE_PROVIDERS.map((p) => {
              const axa = isAxaLogo(p.logoSrc);
              return (
                <li
                  key={p.id}
                  className="flex flex-col gap-4 border border-white/15 bg-white/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative flex h-14 w-28 shrink-0 items-center justify-center bg-white/95 p-2">
                      <Image
                        src={p.logoSrc}
                        alt={`${p.name} logo`}
                        width={axa ? 150 : 100}
                        height={axa ? 75 : 50}
                        className="object-contain"
                        style={{
                          maxWidth: axa ? 120 : 90,
                          maxHeight: axa ? 48 : 40,
                          width: "auto",
                          height: "auto",
                        }}
                      />
                    </div>
                    <span
                      className="text-lg font-semibold text-white"
                      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                    >
                      {p.name}
                    </span>
                  </div>
                  <a
                    href={p.contactUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center border-2 border-white bg-white/10 px-4 py-2.5 text-center text-sm font-medium text-white transition-all duration-300 button-swipe text-white sm:min-w-[200px]"
                    style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                  >
                    {p.linkLabel}
                    <span className="ml-1.5" aria-hidden>
                      ↗
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
