import Link from "next/link";

const KEY_PROCEDURES = [
  { href: "/procedures/robotic-surgery", label: "Robotic Surgery" },
  { href: "/procedures/gastroesophageal-reflux-disease-gord", label: "Acid Reflux & GORD" },
  { href: "/procedures/hernia-repair-surgery", label: "Hernia Repair" },
  { href: "/procedures/gallbladder-surgery-cholecystectomy", label: "Gallbladder Surgery" },
  { href: "/procedures/linx-device-gord-treatment", label: "LINX Device" },
];

export default function KeyProceduresSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black/20 border-y border-white/10">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide mb-2" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
          Key treatments
        </h2>
        <p className="text-white/80 text-sm sm:text-base mb-8">
          Upper GI and general surgical procedures in London and Hertfordshire
        </p>
        <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {KEY_PROCEDURES.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-block px-5 py-3 rounded-full border-2 border-white/40 bg-white/5 text-white font-medium text-sm sm:text-base hover:bg-white/15 hover:border-white/60 transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link
            href="/procedures"
            className="text-white/90 hover:text-white font-semibold text-sm sm:text-base underline underline-offset-2 transition-colors"
          >
            View all procedures →
          </Link>
        </p>
      </div>
    </section>
  );
}
