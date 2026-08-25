"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  complianceNotice,
  daVinciFeatures,
  daVinciHero,
  galleryImages,
  proceduresSection,
  surgeonSection,
  systemComponents,
  videoSection,
} from "@/lib/da-vinci-content";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`fade-in-on-scroll ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function HeroFade({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`animate-fade-in-up ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function GallerySpanClass(span: (typeof galleryImages)[number]["span"]) {
  switch (span) {
    case "hero":
      return "col-span-2 row-span-2 min-h-[280px] sm:min-h-[360px]";
    case "wide":
      return "col-span-2 min-h-[180px] sm:min-h-[220px]";
    case "tall":
      return "row-span-2 min-h-[280px] sm:min-h-[360px]";
    default:
      return "min-h-[160px] sm:min-h-[200px]";
  }
}

export default function DaVinciPageContent() {
  const [activeComponent, setActiveComponent] = useState<(typeof systemComponents)[number]["id"]>(
    systemComponents[0].id
  );
  const [heroVideoReady, setHeroVideoReady] = useState(false);
  const active = systemComponents.find((c) => c.id === activeComponent) ?? systemComponents[0];

  useEffect(() => {
    const enableVideo = () => setHeroVideoReady(true);
    const ric = window.requestIdleCallback?.bind(window);
    if (ric) {
      const id = ric(enableVideo, { timeout: 2500 });
      return () => window.cancelIdleCallback?.(id);
    }
    const t = window.setTimeout(enableVideo, 1200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      {/* ── Cinematic hero ── */}
      <section className="relative flex min-h-[100dvh] w-full items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={daVinciHero.posterSrc}
            alt=""
            fill
            className="object-cover"
            priority
            quality={75}
            sizes="100vw"
            aria-hidden
          />
          {heroVideoReady ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster={daVinciHero.posterSrc}
              aria-hidden
            >
              <source src={daVinciHero.videoSrc} type="video/mp4" />
            </video>
          ) : null}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 45%, rgba(82,82,82,0.35) 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(255,255,255,0.08) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-40 bg-gradient-to-b from-[#525252]/90 to-transparent" />

        <div className="container relative z-20 mx-auto w-full px-4 pb-16 pt-32 sm:px-6 sm:pb-20 lg:px-8">
          <HeroFade>
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 sm:text-sm"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              {daVinciHero.eyebrow}
            </p>
          </HeroFade>
          <HeroFade delay={120}>
            <h1
              className="max-w-4xl whitespace-pre-line text-[2rem] font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl"
              style={{
                fontFamily: '"ITC Avant Garde Gothic", "Century Gothic", sans-serif',
                fontWeight: 700,
              }}
            >
              {daVinciHero.title}
            </h1>
          </HeroFade>
          <HeroFade delay={240}>
            <p
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              {daVinciHero.subtitle}
            </p>
          </HeroFade>
          <HeroFade delay={360}>
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/procedures/contact"
                className="button-swipe inline-flex items-center justify-center border-2 border-white bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-black sm:text-base"
              >
                Book a consultation
              </Link>
              <a
                href="#system"
                className="inline-flex items-center justify-center border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/20 sm:text-base"
              >
                Explore the system
              </a>
            </div>
          </HeroFade>
          <HeroFade delay={480}>
            <p className="mt-8 max-w-xl text-[10px] leading-relaxed text-white/45 sm:text-xs">
              {daVinciHero.videoCopyright}. Video courtesy of Intuitive Surgical press resources.
            </p>
          </HeroFade>
        </div>
      </section>

      {/* ── Surgeon section ── */}
      <section className="relative w-full py-20 sm:py-28">
        <div className="container mx-auto grid min-w-0 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <Reveal>
              <h2 className="page-title page-title-main font-bold leading-tight text-white">
                {surgeonSection.heading}
              </h2>
            </Reveal>
            <div className="paragraph-block mt-8 space-y-6 text-lg leading-relaxed text-gray-200 sm:text-xl">
              {surgeonSection.paragraphs.map((p, i) => (
                <Reveal key={p.slice(0, 40)} delay={80 + i * 80}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 shadow-2xl sm:aspect-[3/2]">
              <Image
                src={surgeonSection.image.src}
                alt={surgeonSection.image.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Da Vinci 5 features ── */}
      <section className="w-full border-t border-white/10 bg-black/25 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="page-title page-title-main mx-auto font-bold leading-tight text-white sm:mx-0">
                da Vinci 5 technology
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-gray-200 sm:text-xl">
              The latest generation of Intuitive&apos;s robotic platform, engineered for
              enhanced visualisation, ergonomic control, and precision in minimally invasive
              surgery.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {daVinciFeatures.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 80}>
                <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.07]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <h3
                      className="absolute bottom-4 left-4 right-4 text-lg font-bold text-white sm:text-xl"
                      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                    >
                      {feature.title}
                    </h3>
                  </div>
                  <p className="p-5 text-sm leading-relaxed text-gray-300 sm:p-6 sm:text-base">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── System explorer ── */}
      <section id="system" className="w-full py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="page-title page-title-main font-bold leading-tight text-white">
              The system, explained
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-200">
              Four integrated components work together, each designed to support the surgical
              team during robotic Upper GI and general surgery.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-10">
            <div
              className="flex flex-wrap gap-2 sm:gap-3"
              role="tablist"
              aria-label="da Vinci system components"
            >
              {systemComponents.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={activeComponent === c.id}
                  onClick={() => setActiveComponent(c.id)}
                  className={`rounded-full border-2 px-4 py-2 text-sm font-medium transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-base ${
                    activeComponent === c.id
                      ? "border-white bg-white text-black"
                      : "border-white/30 bg-transparent text-white hover:border-white/60 hover:bg-white/10"
                  }`}
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160} className="mt-8">
            <div className="grid overflow-hidden rounded-2xl border border-white/15 bg-white/5 lg:grid-cols-2">
              <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[400px]">
                <Image
                  key={active.image}
                  src={active.image}
                  alt={active.alt}
                  fill
                  className="object-cover transition-opacity duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={false}
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
                <h3
                  className="text-2xl font-bold text-white sm:text-3xl"
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                >
                  {active.label}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
                  {active.text}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Video ── */}
      <section className="w-full border-y border-white/10 bg-black/30 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="page-title page-title-main mx-auto font-bold leading-tight text-white sm:mx-0">
                {videoSection.heading}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-gray-200">
              {videoSection.intro}
            </p>
          </Reveal>

          <Reveal delay={160} className="mx-auto mt-12 max-w-5xl">
            <div className="overflow-hidden border border-white/20 shadow-2xl">
              <video
                className="aspect-video w-full bg-black object-cover"
                controls
                playsInline
                preload="metadata"
                poster={videoSection.poster}
              >
                <source src={videoSection.src} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </div>
          </Reveal>
          <Reveal delay={240} className="mx-auto mt-4 max-w-5xl">
            <p className="text-center text-xs text-gray-400">
              {videoSection.copyright}. Video courtesy of Intuitive Surgical press resources.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="w-full py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="page-title page-title-main font-bold leading-tight text-white">
              In the operating room
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-200">
              Official Intuitive Surgical imagery of the da Vinci platform in real operating
              room settings, with surgeons, staff, and system configuration in theatre.
            </p>
          </Reveal>

          <div
            className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-4"
            role="list"
            aria-label="da Vinci surgical system gallery"
          >
            {galleryImages.map((img, i) => (
              <Reveal key={img.src} delay={i * 50} className={GallerySpanClass(img.span)}>
                <figure className="group relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-black/20">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes={
                      img.span === "hero" || img.span === "wide"
                        ? "(max-width: 1024px) 100vw, 960px"
                        : "(max-width: 768px) 50vw, 25vw"
                    }
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={350}>
            <p className="mt-6 text-xs leading-relaxed text-gray-400">
              {complianceNotice.copyright}. Images courtesy of Intuitive Surgical press resources.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Procedures ── */}
      <section className="w-full border-t border-white/10 bg-black/20 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="page-title page-title-main font-bold leading-tight text-white">
              {proceduresSection.heading}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-200">
              {proceduresSection.intro}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {proceduresSection.links.map((link, i) => (
              <Reveal key={link.href} delay={i * 60}>
                <Link
                  href={link.href}
                  className="button-swipe button-swipe-rounded-xl group flex h-full flex-col border border-white/15 bg-white/5 p-5 text-white transition-all duration-300 hover:border-white/30 sm:p-6"
                >
                  <h3
                    className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-black"
                    style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                  >
                    {link.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-black/85">
                    {link.description}
                  </p>
                  <span className="mt-4 text-sm font-medium text-white/70 transition-colors duration-300 group-hover:text-black">
                    Learn more →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance ── */}
      <section className="w-full border-t border-white/10 py-12 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="border-l-2 border-white/50 pl-3 text-sm font-semibold text-white/70">
              {complianceNotice.heading}
            </h2>
          </Reveal>
          <div className="mt-3 max-w-3xl space-y-3 text-sm leading-relaxed text-gray-300">
            {complianceNotice.paragraphs.map((p, i) => (
              <Reveal key={p.slice(0, 48)} delay={60 + i * 60}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={240}>
            <p className="mt-4 max-w-3xl border-t border-white/10 pt-4 text-sm leading-relaxed text-white/90">
              {complianceNotice.copyright}{" "}
              <a
                href={complianceNotice.pressUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-2 hover:text-white/80"
              >
                Intuitive Surgical press resources
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
