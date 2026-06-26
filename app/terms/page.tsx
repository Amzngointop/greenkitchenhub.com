import { site } from '@/data/site'

export const metadata = {
  title: 'Terms of Use',
  description:
    'The terms governing your use of GreenKitchenHub, including content accuracy, intellectual property, affiliate disclosures, and limitation of liability.',
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-serif text-4xl text-[#111111] dark:text-gray-100">Terms of Use</h1>
      <p className="text-sm text-[#666666] dark:text-gray-500 mt-2">Last updated: January 2026</p>

      <div className="mt-8 space-y-4 text-[#444444] dark:text-gray-400 text-sm leading-[1.75]">
        <p>
          Welcome to {site.name}. By accessing {site.domain}, you agree to these Terms of Use. If you do not agree,
          please discontinue use of the site.
        </p>

        <h2 className="font-serif text-2xl text-[#111111] dark:text-gray-100 pt-4">Use of Content</h2>
        <p>
          Our articles, guides, and reviews are provided for general informational purposes. You may read and share
          links to our content, but you may not republish or reproduce substantial portions without permission.
        </p>

        <h2 className="font-serif text-2xl text-[#111111] dark:text-gray-100 pt-4">No Professional Advice</h2>
        <p>
          The information on this site reflects our editorial opinions and research. It is not professional,
          environmental, or financial advice. Always use your own judgment and consult relevant professionals where
          appropriate.
        </p>

        <h2 className="font-serif text-2xl text-[#111111] dark:text-gray-100 pt-4">Accuracy and Availability</h2>
        <p>
          We work to keep our content accurate and current, but we make no guarantee that every detail is free of
          error or that the site will always be available. Product details and availability on external retailers can
          change without notice.
        </p>

        <h2 className="font-serif text-2xl text-[#111111] dark:text-gray-100 pt-4">Affiliate Relationships</h2>
        <p>
          This site contains affiliate links and participates in the Amazon Associates program. We may earn a
          commission on qualifying purchases made through our links, at no additional cost to you.
        </p>

        <h2 className="font-serif text-2xl text-[#111111] dark:text-gray-100 pt-4">Intellectual Property</h2>
        <p>
          The original text and design of this site are the property of {site.name}. Product names and images belong to
          their respective owners and are used for identification and reference.
        </p>

        <h2 className="font-serif text-2xl text-[#111111] dark:text-gray-100 pt-4">Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, {site.name} is not liable for any loss or damage arising from your
          use of the site or reliance on its content.
        </p>

        <h2 className="font-serif text-2xl text-[#111111] dark:text-gray-100 pt-4">Contact</h2>
        <p>
          Questions about these terms can be directed to{' '}
          <a href={`mailto:${site.email}`} className="text-[#2D6B1A] dark:text-green-400 hover:underline">
            {site.email}
          </a>.
        </p>
      </div>
    </div>
  )
}
