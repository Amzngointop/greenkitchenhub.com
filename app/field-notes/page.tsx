import Link from 'next/link'
import { guides } from '@/data/guides'

export const metadata = {
  title: 'Field Notes: Zero-Waste Kitchen Guides',
  description:
    'Browse every GreenKitchenHub field note: practical, original guides to building a zero-waste kitchen, cutting food waste, and choosing sustainable materials.',
}

export default function FieldNotesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <p className="text-[11px] uppercase tracking-[0.1em] text-[#2D6B1A] dark:text-green-400 mb-2">
        The Guides
      </p>
      <h1 className="font-serif text-4xl text-[#111111] dark:text-gray-100">Field Notes</h1>
      <p className="text-[#444444] dark:text-gray-400 mt-3 max-w-2xl">
        Original, practical guides for a lower-waste kitchen, from your first five-minute swaps to a decade-long
        sustainability plan.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {guides.map((g) => (
          <article key={g.slug} className="rounded-lg border border-[#e5e5e5] dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900 flex flex-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={g.coverImage}
              alt={g.title}
              style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
            />
            <div className="p-5 flex flex-col flex-grow">
              <span className="eyebrow text-[#2D6B1A] dark:text-green-400 mb-2">{g.category}</span>
              <h2 className="font-serif text-lg leading-snug text-[#111111] dark:text-gray-100">
                <Link href={`/guides/${g.slug}`} className="hover:text-[#2D6B1A] dark:hover:text-green-400">
                  {g.title}
                </Link>
              </h2>
              <p className="text-sm text-[#444444] dark:text-gray-400 mt-2 flex-grow line-clamp-3">{g.excerpt}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs text-[#666666] dark:text-gray-500">{g.readTime} min read</span>
                <Link href={`/guides/${g.slug}`} className="text-sm text-[#2D6B1A] dark:text-green-400 hover:underline">
                  Read Guide →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
