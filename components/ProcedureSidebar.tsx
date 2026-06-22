"use client";

import Link from "next/link";
import { trackContact, getDevice } from "@/lib/contact-analytics";
import type { ProcedureItem } from "@/app/procedures/procedures-data";

type Props = { slug: string; procedures: ProcedureItem[] };

export default function ProcedureSidebar({ slug, procedures }: Props) {
  const others = procedures.filter((p) => p.slug !== slug).slice(0, 5);

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start space-y-6 text-center lg:text-left">
      {/* Book / Contact CTA */}
      <div className="bg-white/10 border border-white/20 rounded-lg p-5 text-white">
        <h3 className="page-title mb-3 text-sm font-bold text-white">
          Book a consultation
        </h3>
        <p className="text-sm text-gray-200 mb-4">
          Discuss this procedure with Mr Moussa. Available at Spire Bushey, Circle Health Group, and West Hertfordshire NHS Trust.
        </p>
        <Link
          href="/procedures/contact"
          className="block w-full text-center py-3 px-4 border-2 border-white text-white font-medium hover:bg-white hover:text-black transition-colors duration-200 rounded mb-3"
        >
          Book now
        </Link>
        <a
          href="tel:07352167642"
          onClick={() => trackContact("call", getDevice(), "procedure_sidebar")}
          className="block text-center text-sm text-gray-200 hover:text-white transition-colors"
        >
          07352 167642
        </a>
      </div>

      {/* Related procedures */}
      <div className="bg-white/10 border border-white/20 rounded-lg p-5 text-white">
        <h3 className="page-title mb-3 text-sm font-bold text-white">
          Other procedures
        </h3>
        <ul className="space-y-2 lg:text-left">
          {others.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/procedures/${p.slug}`}
                className="text-gray-200 hover:text-white transition-colors text-sm underline"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/procedures"
          className="inline-block mt-3 text-sm text-white/80 hover:text-white transition-colors font-medium"
        >
          View all procedures →
        </Link>
      </div>
    </aside>
  );
}
