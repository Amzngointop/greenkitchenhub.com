import Link from 'next/link'
import { site } from '@/data/site'
import { articles } from '@/data/articles'

export function Footer() {
  return (
    <footer className="border-t border-dashed border-[#d4d4d4] dark:border-gray-800 bg-white dark:bg-gray-950 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <span className="block font-serif text-xl text-[#2D6B1A] dark:text-green-400 leading-none">
            GreenKitchen
          </span>
          <span className="block text-xs font-bold text-[#2D6B1A] dark:text-green-400 mb-3">
            Hub
          </span>
          <p className="text-sm text-[#444444] dark:text-gray-400">{site.tagline}</p>
        </div>

        <div>
          <h4 className="eyebrow text-[#666666] dark:text-gray-500 mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-[#444444] dark:text-gray-400">
            <li><Link href="/field-notes" className="hover:text-[#2D6B1A] dark:hover:text-green-300">Field Notes</Link></li>
            <li><Link href="/eco-glossary" className="hover:text-[#2D6B1A] dark:hover:text-green-300">Eco Glossary</Link></li>
            <li><Link href="/our-method" className="hover:text-[#2D6B1A] dark:hover:text-green-300">Our Method</Link></li>
            <li><Link href="/reach-us" className="hover:text-[#2D6B1A] dark:hover:text-green-300">Reach Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-[#666666] dark:text-gray-500 mb-3">The Swap</h4>
          <ul className="space-y-2 text-sm text-[#444444] dark:text-gray-400">
            {articles.slice(0, 6).map((a) => (
              <li key={a.slug}>
                <Link href={`/best/${a.slug}`} className="hover:text-[#2D6B1A] dark:hover:text-green-300">
                  {a.category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-[#666666] dark:text-gray-500 mb-3">Legal &amp; Contact</h4>
          <ul className="space-y-2 text-sm text-[#444444] dark:text-gray-400">
            <li><Link href="/privacy-policy" className="hover:text-[#2D6B1A] dark:hover:text-green-300">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-[#2D6B1A] dark:hover:text-green-300">Terms of Use</Link></li>
            <li><Link href="/affiliate-disclosure" className="hover:text-[#2D6B1A] dark:hover:text-green-300">Affiliate Disclosure</Link></li>
            <li className="pt-2">{site.address}</li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-[#2D6B1A] dark:hover:text-green-300">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-dashed border-[#d4d4d4] dark:border-gray-800">
        <p className="max-w-7xl mx-auto px-4 sm:px-6 py-5 text-xs text-[#666666] dark:text-gray-500">
          © {site.year} {site.name}. All rights reserved. As an Amazon Associate we earn from qualifying purchases.
        </p>
      </div>
    </footer>
  )
}
