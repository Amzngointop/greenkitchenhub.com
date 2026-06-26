import Link from 'next/link'
import {
  Leaf,
  Trees,
  UtensilsCrossed,
  Container,
  FlaskConical,
  ShoppingBag,
} from 'lucide-react'
import { articles } from '@/data/articles'
import { guides } from '@/data/guides'
import { topRankedProducts, getProduct } from '@/data/products'
import { disclosure } from '@/data/site'
import { ProductCard } from '@/components/ProductCard'
import { CTAButton } from '@/components/CTAButton'
import { ArticleSidebar } from '@/components/ArticleSidebar'
import { RelatedSidebar } from '@/components/RelatedSidebar'
import { WasteCalculator } from '@/components/WasteCalculator'

export const metadata = {
  title: 'Eco-Friendly Kitchen Reviews & Zero-Waste Guides',
  description:
    'GreenKitchenHub reviews the best eco-friendly kitchen products and shares practical zero-waste guides to help you cut plastic and waste at home in 2026.',
}

const sidebarLinks = [
  { id: 'top-rated', label: 'Top-Rated Tools' },
  { id: 'browse-by-category', label: 'Browse by Category' },
  { id: 'field-notes', label: 'Field Notes' },
  { id: 'waste-calculator', label: 'Waste Calculator' },
  { id: 'eco-glossary', label: 'Eco Glossary' },
  { id: 'how-we-pick', label: 'How We Pick' },
]

const quotes = [
  {
    name: 'Maya Chen',
    title: 'Sustainability Editor',
    quote:
      'Switching to reusable dishcloths was the single easiest swap we made — and we haven’t looked back since.',
  },
  {
    name: "James O'Brien",
    title: 'Kitchen Lab Writer',
    quote:
      'Bamboo cutting boards age beautifully. Ours developed a patina after two years that plastic can never replicate.',
  },
  {
    name: 'Sofia Park',
    title: 'Zero Waste Contributor',
    quote:
      'The glass container habit takes a week to build. After that, you’ll never understand why you used plastic wrap at all.',
  },
]

const categories = [
  { icon: Leaf, name: 'Reusable Paper Towels', desc: 'Ditch single-use paper forever.', slug: 'best-reusable-paper-towels' },
  { icon: Trees, name: 'Bamboo Cutting Boards', desc: 'Renewable and naturally antimicrobial.', slug: 'best-bamboo-cutting-boards' },
  { icon: UtensilsCrossed, name: 'Stainless Steel Flatware', desc: 'Lifetime durability, zero plastic.', slug: 'best-stainless-steel-flatware' },
  { icon: Container, name: 'Glass Food Containers', desc: 'Non-toxic storage that lasts decades.', slug: 'best-glass-food-containers' },
  { icon: FlaskConical, name: 'Silicone Kitchen Tools', desc: 'BPA-free heat resistance up to 446°F.', slug: 'best-silicone-kitchen-tools' },
  { icon: ShoppingBag, name: 'Reusable Grocery Bags', desc: 'End the single-use plastic bag habit.', slug: 'best-reusable-grocery-bags' },
]

const glossary = [
  { term: 'BPA-Free', def: 'Made without bisphenol A, a chemical used in some plastics that has been linked to hormonal effects in research.' },
  { term: 'Compostable', def: 'Able to break down into nutrient-rich soil under composting conditions, leaving no toxic residue behind.' },
  { term: 'Biodegradable', def: 'Capable of being broken down by microorganisms over time, though the timeframe and conditions vary widely.' },
  { term: 'Carbon Footprint', def: 'The total greenhouse gas emissions caused directly and indirectly by a product, person, or activity.' },
  { term: 'Zero Waste (5R)', def: 'A philosophy built on refuse, reduce, reuse, recycle, and rot, applied in that order to minimize landfill waste.' },
  { term: 'Food Miles', def: 'The distance food travels from where it is grown to where it is eaten, a rough proxy for transport emissions.' },
]

const Divider = () => (
  <div className="border-t border-dashed border-[#d4d4d4] dark:border-gray-800" />
)

export default function Home() {
  const topProducts = topRankedProducts()
  const editorChoice = getProduct('best-glass-food-containers', 1)!
  const firstGuide = guides[0]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* ZONE A */}
      <section className="py-10 grid gap-8 lg:grid-cols-3">
        {/* Left: The Swap Guide */}
        <div className="space-y-6">
          <p className="eyebrow text-[#666666] dark:text-gray-500">From the Editors</p>
          {quotes.map((q) => (
            <div key={q.name}>
              <p className="text-sm italic text-[#444444] dark:text-gray-400">“{q.quote}”</p>
              <p className="mt-1 text-xs font-semibold text-[#111111] dark:text-gray-200">
                {q.name}
                <span className="font-normal text-[#666666] dark:text-gray-500"> — {q.title}</span>
              </p>
            </div>
          ))}
          <div className="rounded-lg bg-[#EAF4E5] dark:bg-gray-900 dark:border dark:border-gray-800 p-5">
            <p className="eyebrow text-[#666666] dark:text-gray-500 mb-1">Quick Stat</p>
            <p className="font-serif text-4xl text-[#2D6B1A] dark:text-green-400">$620</p>
            <p className="text-xs text-[#444444] dark:text-gray-400 mt-1">
              average annual savings when switching to reusable kitchen essentials
            </p>
          </div>
        </div>

        {/* Center: Field Notes */}
        <div>
          <p className="eyebrow text-[#666666] dark:text-gray-500 mb-4">Field Notes</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={firstGuide.coverImage}
            alt={firstGuide.title}
            style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block', borderRadius: '8px' }}
          />
          <h2 className="font-serif text-2xl mt-4 leading-tight text-[#111111] dark:text-gray-100">
            <Link href={`/guides/${firstGuide.slug}`} className="hover:text-[#2D6B1A] dark:hover:text-green-400">
              {firstGuide.title}
            </Link>
          </h2>
          <p className="text-sm text-[#444444] dark:text-gray-400 mt-2">{firstGuide.excerpt}</p>
          <Link href={`/guides/${firstGuide.slug}`} className="inline-block mt-2 text-sm text-[#2D6B1A] dark:text-green-400 hover:underline">
            Read Guide →
          </Link>

          <div className="my-6"><Divider /></div>

          <div className="grid grid-cols-2 gap-4">
            {[guides[1], guides[2]].map((g) => (
              <div key={g.slug}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.coverImage}
                  alt={g.title}
                  style={{ width: '100%', height: '120px', objectFit: 'cover', display: 'block', borderRadius: '8px' }}
                />
                <h3 className="font-serif text-base mt-2 leading-snug text-[#111111] dark:text-gray-100">
                  <Link href={`/guides/${g.slug}`} className="hover:text-[#2D6B1A] dark:hover:text-green-400">
                    {g.title}
                  </Link>
                </h3>
              </div>
            ))}
          </div>
          <Link href="/field-notes" className="inline-block mt-5 eyebrow text-[#2D6B1A] dark:text-green-400 hover:underline">
            → Browse All Field Notes
          </Link>
        </div>

        {/* Right: Editor's Choice */}
        <div className="rounded-lg border border-[#e5e5e5] dark:border-gray-800 p-5 bg-white dark:bg-gray-900 self-start">
          <p className="eyebrow text-[#666666] dark:text-gray-500 mb-4">Editor&apos;s Choice</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={editorChoice.imageUrl}
            alt={editorChoice.name}
            style={{ width: '100%', maxHeight: '220px', objectFit: 'contain', backgroundColor: '#f9f9f9', borderRadius: '8px', padding: '12px' }}
          />
          <span className="inline-block mt-3 px-2 py-0.5 rounded-full bg-[#EAF4E5] text-[#2D6B1A] text-xs uppercase tracking-wide dark:bg-gray-800 dark:text-green-400">
            Best Value
          </span>
          <h3 className="font-serif text-lg mt-2 text-[#111111] dark:text-gray-100">{editorChoice.name}</h3>
          <p className="text-sm text-[#444444] dark:text-gray-400 mt-1">{editorChoice.summary}</p>
          <a
            href={editorChoice.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block mt-3 text-sm text-[#2D6B1A] dark:text-green-400 hover:underline"
          >
            View on Amazon →
          </a>
          <p className="text-[13px] italic text-[#666666] dark:text-gray-500 mt-1">We may earn a commission</p>
          <div className="mt-4">
            <CTAButton href="#top-rated">See Top Eco Picks →</CTAButton>
          </div>
        </div>
      </section>

      <Divider />

      {/* ZONE B */}
      <div className="grid lg:grid-cols-[200px_minmax(0,1fr)_220px] gap-8 py-10">
        {/* Left sticky sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <ArticleSidebar links={sidebarLinks} heading="On This Page" />
          </div>
        </aside>

        {/* Center column */}
        <div className="min-w-0 space-y-16">
          {/* Top-Rated */}
          <section id="top-rated" className="scroll-mt-24">
            <h2 className="font-serif text-3xl mb-3 text-[#111111] dark:text-gray-100">
              Top-Rated Eco Kitchen Tools
            </h2>
            <p className="text-[13px] italic text-[#666666] dark:text-gray-400 bg-[#EAF4E5] dark:bg-gray-800 rounded-md px-4 py-3 mb-6">
              {disclosure}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {topProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>

          {/* Browse by Category */}
          <section id="browse-by-category" className="scroll-mt-24">
            <h2 className="font-serif text-3xl mb-6 text-[#111111] dark:text-gray-100">Shop by Eco Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map((c) => {
                const Icon = c.icon
                return (
                  <Link
                    key={c.slug}
                    href={`/best/${c.slug}`}
                    className="block rounded-lg border border-[#e5e5e5] dark:border-gray-800 p-5 bg-white dark:bg-gray-900 hover:border-[#2D6B1A] dark:hover:border-green-500 transition-colors"
                  >
                    <Icon size={26} className="text-[#2D6B1A] dark:text-green-400 mb-2" />
                    <h3 className="font-serif text-lg text-[#111111] dark:text-gray-100">{c.name}</h3>
                    <p className="text-sm text-[#444444] dark:text-gray-400 mt-1">{c.desc}</p>
                  </Link>
                )
              })}
            </div>
          </section>

          {/* Field Notes */}
          <section id="field-notes" className="scroll-mt-24">
            <h2 className="font-serif text-3xl mb-6 text-[#111111] dark:text-gray-100">
              Field Notes: Guides for Zero-Waste Living
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {guides.map((g) => (
                <div key={g.slug} className="rounded-lg border border-[#e5e5e5] dark:border-gray-800 p-5 bg-white dark:bg-gray-900 flex flex-col">
                  <span className="eyebrow text-[#2D6B1A] dark:text-green-400 mb-2">{g.category}</span>
                  <h3 className="font-serif text-base leading-snug text-[#111111] dark:text-gray-100">
                    <Link href={`/guides/${g.slug}`} className="hover:text-[#2D6B1A] dark:hover:text-green-400">
                      {g.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#444444] dark:text-gray-400 mt-2 flex-grow line-clamp-3">{g.excerpt}</p>
                  <span className="text-xs text-[#666666] dark:text-gray-500 mt-3">{g.readTime} min read</span>
                </div>
              ))}
            </div>
          </section>

          {/* Waste Calculator */}
          <section id="waste-calculator" className="scroll-mt-24">
            <h2 className="font-serif text-3xl mb-6 text-[#111111] dark:text-gray-100">
              Calculate Your Kitchen Waste Footprint
            </h2>
            <WasteCalculator />
          </section>

          {/* Eco Glossary */}
          <section id="eco-glossary" className="scroll-mt-24">
            <h2 className="font-serif text-3xl mb-6 text-[#111111] dark:text-gray-100">The Green Kitchen Glossary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {glossary.map((g) => (
                <div key={g.term} className="border-l-2 border-[#2D6B1A] pl-4">
                  <h3 className="font-serif text-lg text-[#111111] dark:text-gray-100">{g.term}</h3>
                  <p className="text-sm text-[#444444] dark:text-gray-400 mt-1">{g.def}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <CTAButton href="/eco-glossary">Explore Full Eco Glossary →</CTAButton>
            </div>
          </section>

          {/* How We Pick */}
          <section id="how-we-pick" className="scroll-mt-24">
            <h2 className="font-serif text-3xl mb-6 text-[#111111] dark:text-gray-100">How We Pick Our Eco Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
              {[
                { t: 'Material Quality', d: 'We favor renewable, recyclable, and non-toxic materials like bamboo, glass, and stainless steel over short-lived plastics.' },
                { t: 'Durability Score', d: 'We weigh how long a product lasts in real kitchens, because the most sustainable item is the one you never have to replace.' },
                { t: 'Environmental Impact', d: 'We consider the full lifecycle, from sourcing to disposal, and prioritize products that reduce waste at every stage.' },
              ].map((c) => (
                <div key={c.t} className="rounded-lg border border-[#e5e5e5] dark:border-gray-800 p-5 bg-white dark:bg-gray-900">
                  <h3 className="font-serif text-lg text-[#111111] dark:text-gray-100">{c.t}</h3>
                  <p className="text-sm text-[#444444] dark:text-gray-400 mt-1">{c.d}</p>
                </div>
              ))}
            </div>
            {/* Process flow diagram */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 text-sm">
              {['Research materials', 'Assess durability', 'Score eco impact'].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-3 flex-1">
                  <div className="flex-1 text-center rounded-lg bg-[#EAF4E5] dark:bg-gray-800 text-[#2D6B1A] dark:text-green-400 px-4 py-3 font-medium">
                    {step}
                  </div>
                  {i < arr.length - 1 && <span className="text-[#2D6B1A] dark:text-green-400 hidden sm:inline">→</span>}
                </div>
              ))}
            </div>
            <p className="text-sm text-[#444444] dark:text-gray-400 mt-6">
              We ground our standards in independent guidance, including the{' '}
              <a href="https://www.epa.gov/smm" target="_blank" rel="noopener noreferrer" className="text-[#2D6B1A] dark:text-green-400 hover:underline">
                EPA on sustainable materials management
              </a>{' '}
              and the{' '}
              <a href="https://www.ewg.org" target="_blank" rel="noopener noreferrer" className="text-[#2D6B1A] dark:text-green-400 hover:underline">
                Environmental Working Group
              </a>.
            </p>
          </section>

          {/* Newsletter */}
          <section id="newsletter" className="scroll-mt-24">
            <div className="rounded-xl p-8 text-white bg-[#0D1B2A] dark:bg-gray-900 dark:border dark:border-gray-700">
              <h2 className="font-serif text-2xl">Join the Zero-Waste Kitchen Community</h2>
              <p className="text-sm text-gray-300 mt-2 mb-5">
                Weekly swaps, guides, and eco picks. No spam, ever.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="flex-grow rounded-lg px-4 py-2 text-sm bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                />
                <CTAButton href="#newsletter">Subscribe Free →</CTAButton>
              </form>
            </div>
          </section>
        </div>

        {/* Right sticky sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <RelatedSidebar
              heading="The Swap Guide"
              items={articles.map((a) => ({ href: `/best/${a.slug}`, label: a.category }))}
              footerLink={{ href: '/field-notes', label: 'All Reviews →' }}
            />
          </div>
        </aside>
      </div>
    </div>
  )
}
