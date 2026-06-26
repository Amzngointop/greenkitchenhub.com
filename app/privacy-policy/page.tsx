import { site } from '@/data/site'

export const metadata = {
  title: 'Privacy Policy',
  description:
    'How GreenKitchenHub collects, uses, and protects information when you visit our site, including cookies, analytics, and affiliate link tracking.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 prose-none">
      <h1 className="font-serif text-4xl text-[#111111] dark:text-gray-100">Privacy Policy</h1>
      <p className="text-sm text-[#666666] dark:text-gray-500 mt-2">Last updated: January 2026</p>

      <div className="mt-8 space-y-4 text-[#444444] dark:text-gray-400 text-sm leading-[1.75]">
        <p>
          This Privacy Policy explains how {site.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) handles
          information when you visit {site.domain}. By using the site, you agree to the practices described here.
        </p>

        <h2 className="font-serif text-2xl text-[#111111] dark:text-gray-100 pt-4">Information We Collect</h2>
        <p>
          We aim to collect as little personal information as possible. We do not require you to create an account to
          read our content. If you choose to contact us by email, we receive the information you provide in that
          message. Like most websites, our servers may automatically log standard technical data such as browser type
          and pages visited.
        </p>

        <h2 className="font-serif text-2xl text-[#111111] dark:text-gray-100 pt-4">Cookies and Analytics</h2>
        <p>
          We may use cookies and privacy-respecting analytics to understand how visitors use the site so we can
          improve it. You can disable cookies in your browser settings, though some features may not function as
          intended if you do.
        </p>

        <h2 className="font-serif text-2xl text-[#111111] dark:text-gray-100 pt-4">Affiliate Links</h2>
        <p>
          Our pages contain affiliate links, including links to Amazon. When you click these links, the destination
          site may use cookies to attribute any resulting purchase to us. We never see your payment details; those are
          handled entirely by the retailer.
        </p>

        <h2 className="font-serif text-2xl text-[#111111] dark:text-gray-100 pt-4">Third-Party Services</h2>
        <p>
          Some third parties, such as Amazon, operate under their own privacy policies. We encourage you to review the
          privacy practices of any external site you visit through our links.
        </p>

        <h2 className="font-serif text-2xl text-[#111111] dark:text-gray-100 pt-4">Your Choices</h2>
        <p>
          You may contact us at any time to ask what information we hold about you or to request its deletion. We will
          respond to reasonable requests in a timely manner.
        </p>

        <h2 className="font-serif text-2xl text-[#111111] dark:text-gray-100 pt-4">Contact</h2>
        <p>
          Questions about this policy can be sent to{' '}
          <a href={`mailto:${site.email}`} className="text-[#2D6B1A] dark:text-green-400 hover:underline">
            {site.email}
          </a>{' '}
          or by mail to {site.address}.
        </p>
      </div>
    </div>
  )
}
