import { site, disclosure } from '@/data/site'

export const metadata = {
  title: 'Affiliate Disclosure',
  description:
    'GreenKitchenHub is reader-supported and participates in the Amazon Associates program. Learn how our affiliate links work and how we stay independent.',
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-serif text-4xl text-[#111111] dark:text-gray-100">Affiliate Disclosure</h1>
      <p className="text-sm text-[#666666] dark:text-gray-500 mt-2">Last updated: January 2026</p>

      <p className="text-[13px] italic text-[#666666] dark:text-gray-300 bg-[#EAF4E5] dark:bg-gray-800 rounded-md px-4 py-3 my-6">
        {disclosure}
      </p>

      <div className="space-y-4 text-[#444444] dark:text-gray-400 text-sm leading-[1.75]">
        <h2 className="font-serif text-2xl text-[#111111] dark:text-gray-100 pt-2">How We Fund Our Work</h2>
        <p>
          {site.name} is reader-supported. To keep our content free, we participate in affiliate programs, most notably
          the Amazon Associates program, an affiliate advertising program designed to provide a means for sites to earn
          fees by linking to Amazon and affiliated sites.
        </p>

        <h2 className="font-serif text-2xl text-[#111111] dark:text-gray-100 pt-4">What This Means for You</h2>
        <p>
          When you click an affiliate link on our site and make a qualifying purchase, we may receive a small
          commission. This never increases the price you pay. The cost is the same whether you use our link or navigate
          to the retailer directly.
        </p>

        <h2 className="font-serif text-2xl text-[#111111] dark:text-gray-100 pt-4">Our Independence</h2>
        <p>
          Affiliate commissions never influence which products we recommend or how we rank them. We select products
          based on materials, durability, and environmental impact, and our editorial opinions are entirely our own. A
          brand cannot pay for a better review or a higher placement.
        </p>

        <h2 className="font-serif text-2xl text-[#111111] dark:text-gray-100 pt-4">Questions</h2>
        <p>
          If you have any questions about our affiliate relationships, reach us at{' '}
          <a href={`mailto:${site.email}`} className="text-[#2D6B1A] dark:text-green-400 hover:underline">
            {site.email}
          </a>.
        </p>
      </div>
    </div>
  )
}
