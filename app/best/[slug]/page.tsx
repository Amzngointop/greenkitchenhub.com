import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle2, XCircle } from 'lucide-react'
import { articles, getArticle } from '@/data/articles'
import { getGuide } from '@/data/guides'
import { productsByArticle } from '@/data/products'
import { disclosure } from '@/data/site'
import { ArticleSidebar } from '@/components/ArticleSidebar'
import { RelatedSidebar } from '@/components/RelatedSidebar'
import { AccordionSection } from '@/components/AccordionSection'
import { FAQ } from '@/components/FAQ'
import { CTAButton } from '@/components/CTAButton'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.coverImage],
      type: 'article',
    },
  }
}

export default async function BestArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const products = productsByArticle(slug)
  const sidebarLinks = products.map((p) => ({
    id: `product-${p.rank}`,
    label: `${p.rank}. ${p.name.split(' – ')[0].split(' (')[0]}`,
  }))

  const relatedArticles = articles.filter((a) => a.slug !== slug)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="grid lg:grid-cols-[200px_minmax(0,1fr)_220px] gap-8">
        {/* Left sticky */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <ArticleSidebar links={sidebarLinks} heading="Jump To" />
          </div>
        </aside>

        {/* Center */}
        <article className="min-w-0">
          {/* Breadcrumb */}
          <nav className="text-xs uppercase tracking-wide text-[#666666] dark:text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#2D6B1A] dark:hover:text-green-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/field-notes" className="hover:text-[#2D6B1A] dark:hover:text-green-400">The Swap</Link>
            <span className="mx-2">/</span>
            <span className="text-[#444444] dark:text-gray-400 normal-case tracking-normal">{article.title}</span>
          </nav>

          <p className="text-[11px] uppercase tracking-[0.1em] text-[#2D6B1A] dark:text-green-400 mb-2">
            {article.category}
          </p>
          <h1 className="font-serif text-4xl leading-tight text-[#111111] dark:text-gray-100">
            {article.title}
          </h1>
          <p className="text-sm text-[#666666] dark:text-gray-500 mt-3">
            Updated {article.updatedDate} · {article.readTime} min read · 6 products reviewed
          </p>

          <p className="text-[13px] italic text-[#666666] dark:text-gray-300 bg-[#EAF4E5] dark:bg-gray-800 rounded-md px-4 py-3 my-6">
            {disclosure}
          </p>

          {article.intro.map((para, i) => (
            <p key={i} className="text-[#444444] dark:text-gray-400 mb-4 leading-[1.75]">
              {para}
            </p>
          ))}

          {/* Product sections */}
          {products.map((p) => (
            <section
              key={p.id}
              id={`product-${p.rank}`}
              className="scroll-mt-24 pt-4"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2D6B1A] text-white text-sm font-bold">
                  {p.rank}
                </span>
                {p.badge && (
                  <span className="px-2 py-0.5 rounded-full bg-[#EAF4E5] text-[#2D6B1A] text-xs uppercase tracking-wide dark:bg-gray-800 dark:text-green-400">
                    {p.badge}
                  </span>
                )}
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.imageUrl}
                alt={p.name}
                style={{
                  width: '100%',
                  maxHeight: '280px',
                  objectFit: 'contain',
                  backgroundColor: '#f9f9f9',
                  borderRadius: '8px',
                  marginBottom: '16px',
                  padding: '12px',
                }}
              />
              <h3 className="font-serif text-2xl text-[#111111] dark:text-gray-100">{p.name}</h3>
              <p className="text-[#444444] dark:text-gray-400 mt-2">{p.summary}</p>

              <div className="grid sm:grid-cols-2 gap-4 my-5">
                <div>
                  <p className="eyebrow text-[#666666] dark:text-gray-500 mb-2">Pros</p>
                  <ul className="space-y-1.5">
                    {p.pros.map((pro) => (
                      <li key={pro} className="flex gap-2 text-sm text-[#444444] dark:text-gray-300">
                        <CheckCircle2 size={16} className="text-[#2D6B1A] shrink-0 mt-0.5" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow text-[#666666] dark:text-gray-500 mb-2">Cons</p>
                  <ul className="space-y-1.5">
                    {p.cons.map((con) => (
                      <li key={con} className="flex gap-2 text-sm text-[#444444] dark:text-gray-300">
                        <XCircle size={16} className="text-[#666666] dark:text-gray-500 shrink-0 mt-0.5" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <AccordionSection title="Why We Picked It" defaultOpen>
                <p>{p.whyWePicked}</p>
              </AccordionSection>
              <AccordionSection title="Who It's For">
                <p>{p.bestFor}. If that describes your routine, this option slots in with minimal friction and pays off over years of use.</p>
              </AccordionSection>
              <AccordionSection title="How to Use It">
                <p>{p.howToUse}</p>
              </AccordionSection>

              <div className="my-5">
                <CTAButton href={p.affiliateUrl} external>View on Amazon →</CTAButton>
              </div>

              <div className="border-t border-dashed border-[#d4d4d4] dark:border-gray-800 my-8" />
            </section>
          ))}

          {/* Tip box 1 */}
          <div className="border-l-4 border-[#2D6B1A] bg-[#EAF4E5] dark:bg-gray-800 dark:border-green-500 rounded-r-md p-5 my-8">
            <p className="font-serif text-lg text-[#111111] dark:text-gray-100">{article.tips[0].title}</p>
            <p className="text-sm text-[#444444] dark:text-gray-300 mt-1">{article.tips[0].body}</p>
          </div>

          {/* Buying guide */}
          <section className="my-8">
            <h2 className="font-serif text-3xl text-[#111111] dark:text-gray-100 mb-5">Buying Guide</h2>
            {article.buyingGuide.map((sec) => (
              <div key={sec.heading} className="mb-6">
                <h3 className="font-serif text-xl text-[#111111] dark:text-gray-100 mb-2">{sec.heading}</h3>
                {sec.body.map((para, i) => (
                  <p key={i} className="text-[#444444] dark:text-gray-400 mb-3 leading-[1.75]">{para}</p>
                ))}
              </div>
            ))}
          </section>

          {/* Diagram */}
          <section className="my-8">
            <h3 className="font-serif text-xl text-[#111111] dark:text-gray-100 mb-4">{article.diagramTitle}</h3>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 text-sm">
              {article.diagramSteps.map((step, i, arr) => (
                <div key={step} className="flex items-center gap-3 flex-1">
                  <div className="flex-1 text-center rounded-lg bg-[#EAF4E5] dark:bg-gray-800 text-[#2D6B1A] dark:text-green-400 px-4 py-3 font-medium">
                    {step}
                  </div>
                  {i < arr.length - 1 && <span className="text-[#2D6B1A] dark:text-green-400 hidden sm:inline">→</span>}
                </div>
              ))}
            </div>
          </section>

          {/* Tip box 2 */}
          <div className="border-l-4 border-[#2D6B1A] bg-[#EAF4E5] dark:bg-gray-800 dark:border-green-500 rounded-r-md p-5 my-8">
            <p className="font-serif text-lg text-[#111111] dark:text-gray-100">{article.tips[1].title}</p>
            <p className="text-sm text-[#444444] dark:text-gray-300 mt-1">{article.tips[1].body}</p>
          </div>

          {/* FAQ */}
          <FAQ items={article.faqs} />

          {/* Outbound links */}
          <section className="my-8">
            <h3 className="font-serif text-xl text-[#111111] dark:text-gray-100 mb-3">Authoritative Sources</h3>
            <ul className="list-disc pl-5 text-sm text-[#444444] dark:text-gray-400 space-y-1">
              <li>
                <a href="https://www.epa.gov/recycle" target="_blank" rel="noopener noreferrer" className="text-[#2D6B1A] dark:text-green-400 hover:underline">
                  EPA: Reducing and Reusing Basics
                </a>
              </li>
              <li>
                <a href="https://www.ewg.org" target="_blank" rel="noopener noreferrer" className="text-[#2D6B1A] dark:text-green-400 hover:underline">
                  Environmental Working Group
                </a>
              </li>
            </ul>
          </section>

          {/* Further Reading */}
          <section className="my-8">
            <h3 className="font-serif text-xl text-[#111111] dark:text-gray-100 mb-3">Further Reading</h3>
            <ul className="space-y-2 text-sm">
              {article.relatedGuides.map((gslug) => {
                const g = getGuide(gslug)
                if (!g) return null
                return (
                  <li key={gslug}>
                    <Link href={`/guides/${g.slug}`} className="text-[#2D6B1A] dark:text-green-400 hover:underline">
                      {g.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </section>

          {/* Disclosure again (2nd) */}
          <p className="text-[13px] italic text-[#666666] dark:text-gray-300 bg-[#EAF4E5] dark:bg-gray-800 rounded-md px-4 py-3 my-6">
            {disclosure}
          </p>

          {/* Related articles internal links */}
          <section className="my-8">
            <h3 className="font-serif text-xl text-[#111111] dark:text-gray-100 mb-3">Related Swap Guides</h3>
            <ul className="space-y-2 text-sm">
              {relatedArticles.slice(0, 3).map((a) => (
                <li key={a.slug}>
                  <Link href={`/best/${a.slug}`} className="text-[#2D6B1A] dark:text-green-400 hover:underline">
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </article>

        {/* Right sticky */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <RelatedSidebar
              heading="More Swap Guides"
              items={relatedArticles.map((a) => ({ href: `/best/${a.slug}`, label: a.title }))}
              footerLink={{ href: '/field-notes', label: 'All Reviews →' }}
            />
          </div>
        </aside>
      </div>
    </div>
  )
}
