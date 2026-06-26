import Link from 'next/link'
import { notFound } from 'next/navigation'
import { guides, getGuide } from '@/data/guides'
import { getArticle } from '@/data/articles'
import { ArticleSidebar } from '@/components/ArticleSidebar'
import { RelatedSidebar } from '@/components/RelatedSidebar'

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }))
}

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) return {}
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      images: [guide.coverImage],
      type: 'article',
    },
  }
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) notFound()

  const sidebarLinks = guide.sections.map((s) => ({
    id: slugify(s.heading),
    label: s.heading,
  }))
  const otherGuides = guides.filter((g) => g.slug !== slug)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="grid lg:grid-cols-[200px_minmax(0,1fr)_220px] gap-8">
        {/* Left sticky */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <ArticleSidebar links={sidebarLinks} heading="In This Guide" />
          </div>
        </aside>

        {/* Center */}
        <article className="min-w-0">
          <nav className="text-xs uppercase tracking-wide text-[#666666] dark:text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#2D6B1A] dark:hover:text-green-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/field-notes" className="hover:text-[#2D6B1A] dark:hover:text-green-400">Field Notes</Link>
            <span className="mx-2">/</span>
            <span className="text-[#444444] dark:text-gray-400 normal-case tracking-normal">{guide.title}</span>
          </nav>

          <p className="text-[11px] uppercase tracking-[0.1em] text-[#2D6B1A] dark:text-green-400 mb-2">
            {guide.category}
          </p>
          <h1 className="font-serif text-4xl leading-tight text-[#111111] dark:text-gray-100">
            {guide.title}
          </h1>
          <p className="text-sm text-[#666666] dark:text-gray-500 mt-3">
            Updated 2026 · {guide.readTime} min read
          </p>
          <p className="italic text-[#666666] dark:text-gray-400 mt-3">{guide.excerpt}</p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={guide.coverImage}
            alt={guide.title}
            style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block', borderRadius: '8px', margin: '24px 0' }}
          />

          {/* Body sections */}
          {guide.sections.map((sec, idx) => (
            <section key={sec.heading} id={slugify(sec.heading)} className="scroll-mt-24 mb-8">
              <h2 className="font-serif text-2xl text-[#111111] dark:text-gray-100 mb-3">{sec.heading}</h2>
              {sec.body.map((para, i) => (
                <p key={i} className="text-[#444444] dark:text-gray-400 mb-3 leading-[1.75]">{para}</p>
              ))}

              {/* Insert callouts after specific sections */}
              {idx === 0 && (
                <div className="border-l-4 border-[#2D6B1A] bg-[#EAF4E5] dark:bg-gray-800 dark:border-green-500 rounded-r-md p-5 mt-5">
                  <p className="font-serif text-lg text-[#111111] dark:text-gray-100">Start small, win early</p>
                  <p className="text-sm text-[#444444] dark:text-gray-300 mt-1">
                    Pick one swap from this section and make it today. Early momentum is the strongest predictor of a lasting change.
                  </p>
                </div>
              )}
              {idx === 2 && (
                <div className="border-l-4 border-[#2D6B1A] bg-[#EAF4E5] dark:bg-gray-800 dark:border-green-500 rounded-r-md p-5 mt-5">
                  <p className="font-serif text-lg text-[#111111] dark:text-gray-100">Worth remembering</p>
                  <p className="text-sm text-[#444444] dark:text-gray-300 mt-1">
                    Sustainability is a direction, not a finish line. Consistent small steps beat an unsustainable sprint every time.
                  </p>
                </div>
              )}
            </section>
          ))}

          {/* Diagram */}
          <section className="my-8">
            <h3 className="font-serif text-xl text-[#111111] dark:text-gray-100 mb-4">The Path to a Greener Kitchen</h3>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 text-sm">
              {['Audit', 'Swap', 'Habituate', 'Sustain'].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-3 flex-1">
                  <div className="flex-1 text-center rounded-lg bg-[#EAF4E5] dark:bg-gray-800 text-[#2D6B1A] dark:text-green-400 px-4 py-3 font-medium">
                    {step}
                  </div>
                  {i < arr.length - 1 && <span className="text-[#2D6B1A] dark:text-green-400 hidden sm:inline">→</span>}
                </div>
              ))}
            </div>
          </section>

          {/* Outbound links */}
          <section className="my-8">
            <h3 className="font-serif text-xl text-[#111111] dark:text-gray-100 mb-3">Authoritative Sources</h3>
            <ul className="list-disc pl-5 text-sm text-[#444444] dark:text-gray-400 space-y-1">
              <li>
                <a href="https://www.epa.gov/recycle/reducing-and-reusing-basics" target="_blank" rel="noopener noreferrer" className="text-[#2D6B1A] dark:text-green-400 hover:underline">
                  EPA: Reducing and Reusing Basics
                </a>
              </li>
              <li>
                <a href="https://www.epa.gov/sustainable-management-food" target="_blank" rel="noopener noreferrer" className="text-[#2D6B1A] dark:text-green-400 hover:underline">
                  EPA: Sustainable Management of Food
                </a>
              </li>
            </ul>
          </section>

          {/* Further reading / internal links to best-pick articles */}
          <section className="my-8">
            <h3 className="font-serif text-xl text-[#111111] dark:text-gray-100 mb-3">Further Reading</h3>
            <ul className="space-y-2 text-sm">
              {guide.relatedArticles.map((aslug) => {
                const a = getArticle(aslug)
                if (!a) return null
                return (
                  <li key={aslug}>
                    <Link href={`/best/${a.slug}`} className="text-[#2D6B1A] dark:text-green-400 hover:underline">
                      {a.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </section>
        </article>

        {/* Right sticky */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <RelatedSidebar
              heading="More Field Notes"
              items={otherGuides.map((g) => ({ href: `/guides/${g.slug}`, label: g.title }))}
              footerLink={{ href: '/field-notes', label: 'All Guides →' }}
            />
          </div>
        </aside>
      </div>
    </div>
  )
}
