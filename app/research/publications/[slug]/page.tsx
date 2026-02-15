import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import {
  getPublicationBySlug,
  getPublicationSlugs,
  publications,
  type PublicationTable,
} from "../../publications-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPublicationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pub = getPublicationBySlug(slug);
  if (!pub) return { title: "Publication" };
  const shortTitle =
    pub.title.length > 60 ? pub.title.slice(0, 57) + "…" : pub.title;
  return {
    title: shortTitle,
    description: pub.abstract || `Publication: ${shortTitle}`,
  };
}

function PublicationTableBlock({ table }: { table: PublicationTable }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border border-white/30 text-left text-white">
        <thead>
          <tr>
            {table.headers.map((h, i) => (
              <th
                key={i}
                className="border-b border-white/30 px-4 py-3 font-semibold bg-white/5"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={ri} className="border-b border-white/20">
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function PublicationPage({ params }: Props) {
  const { slug } = await params;
  const pub = getPublicationBySlug(slug);
  if (!pub) notFound();

  return (
    <main className="min-h-screen bg-gradient-grey relative">
      <div className="absolute top-0 left-0 right-0 h-32 header-gradient-overlay z-40 pointer-events-none" />
      <Header backgroundColor="grey" />

      <article className="relative z-10 pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back link */}
          <p className="mb-4">
            <Link
              href="/research"
              className="text-white/80 hover:text-white underline transition-colors"
            >
              Back to Research & Publications
            </Link>
          </p>

          {/* Publication tabs – navigate between all publications */}
          <nav
            className="mb-8 overflow-x-auto"
            aria-label="Publications in this section"
          >
            <div className="flex gap-2 pb-2 min-w-max">
              {publications.map((p) => {
                const isActive = p.slug === slug;
                return (
                  <Link
                    key={p.slug}
                    href={isActive ? "#" : `/research/publications/${p.slug}`}
                    aria-current={isActive ? "page" : undefined}
                    title={p.title}
                    className={`shrink-0 px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                      isActive
                        ? "bg-white text-black pointer-events-none"
                        : "bg-white/10 text-white border border-white/30 hover:bg-white/20 hover:border-white/50"
                    }`}
                  >
                    {publications.indexOf(p) + 1}
                  </Link>
                );
              })}
            </div>
            <p className="text-white/60 text-xs mt-1">
              Publication {publications.findIndex((p) => p.slug === slug) + 1} of{" "}
              {publications.length}
            </p>
          </nav>

          {/* Title */}
          <h1 className="page-title font-bold text-white text-left leading-tight normal-case mb-4">
            {pub.title}
          </h1>

          {pub.authors && (
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4">
              {pub.authors}
            </p>
          )}

          {pub.citation && (
            <p className="text-white/70 text-sm sm:text-base mb-6">
              {pub.citation}
            </p>
          )}

          {pub.abstract && (
            <div className="prose prose-invert max-w-none mb-8">
              <h2 className="text-xl font-semibold text-white mb-3">
                Abstract
              </h2>
              <p className="text-white leading-relaxed whitespace-pre-line">
                {pub.abstract}
              </p>
            </div>
          )}

          {/* PDF viewer when we have a local PDF; otherwise link to journal (sites block iframe embedding) */}
          {(!pub.sections || pub.sections.length === 0) && (
            <div className="mb-8">
              {pub.pdfPath ? (
                <div className="rounded-lg overflow-hidden border border-white/20 bg-black/20">
                  <iframe
                    src={`${pub.pdfPath}#toolbar=0&navpanes=0`}
                    title={pub.title}
                    className="w-full h-[100vh]"
                  />
                </div>
              ) : (
                <div className="rounded-lg border border-white/20 bg-white/5 p-8 text-center">
                  <p className="text-white/80 mb-6">
                    This article is available on the publisher&apos;s site. Journals do not allow embedding, so open it in a new tab to read.
                  </p>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-full border-2 border-white bg-white/10 text-white font-medium transition-colors duration-200 text-center button-swipe text-white"
                  >
                    Open article (journal / PDF)
                  </a>
                </div>
              )}
            </div>
          )}

          {pub.sections && pub.sections.length > 0 && (
            <div className="space-y-8 mb-8">
              {pub.sections.map((sec, i) => (
                <div key={i}>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    {sec.heading}
                  </h2>
                  {sec.blocks ? (
                    <div className="space-y-4">
                      {sec.blocks.map((block, bi) => (
                        <span key={bi}>
                          {block.body && (
                            <div className="text-white leading-relaxed whitespace-pre-line mb-4">
                              {block.body}
                            </div>
                          )}
                          {block.tableIndex != null &&
                            pub.tables?.[block.tableIndex] && (
                              <PublicationTableBlock
                                key={`t-${block.tableIndex}`}
                                table={pub.tables[block.tableIndex]!}
                              />
                            )}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <>
                      {sec.body && (
                        <div className="text-white leading-relaxed whitespace-pre-line">
                          {sec.body}
                        </div>
                      )}
                      {sec.tableIndices &&
                        pub.tables &&
                        sec.tableIndices.map((tableIdx) => {
                          const table = pub.tables![tableIdx];
                          return table ? (
                            <PublicationTableBlock
                              key={tableIdx}
                              table={table}
                            />
                          ) : null;
                        })}
                    </>
                  )}
                </div>
              ))}
            </div>
          )}

          {pub.tables && pub.tables.length > 0 && (() => {
            const placedIndices = new Set<number>();
            pub.sections?.forEach((s) => {
              s.tableIndices?.forEach((i) => placedIndices.add(i));
              s.blocks?.forEach(
                (b) =>
                  b.tableIndex != null && placedIndices.add(b.tableIndex)
              );
            });
            const anySectionHasTables = placedIndices.size > 0;
            const indicesToShow = anySectionHasTables
              ? pub.tables
                  .map((_, i) => i)
                  .filter((i) => !placedIndices.has(i))
              : pub.tables.map((_, i) => i);
            if (indicesToShow.length === 0) return null;
            return (
              <div className="mb-8">
                {indicesToShow.map((i) => (
                  <PublicationTableBlock key={i} table={pub.tables![i]} />
                ))}
              </div>
            );
          })()}

          {/* Visit original publication */}
          <div className="flex flex-wrap gap-4 items-center pt-4 border-t border-white/20">
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full border-2 border-white bg-white/10 text-white font-medium transition-colors duration-200 text-center button-swipe text-white"
            >
              Visit publication (journal / PDF)
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
