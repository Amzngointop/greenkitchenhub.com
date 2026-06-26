import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { site } from '@/data/site'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: 'GreenKitchenHub',
    template: '%s | GreenKitchenHub',
  },
  description:
    'Smarter swaps for a zero-waste kitchen. Eco-friendly kitchen product reviews, guides, and practical sustainability tips.',
  openGraph: {
    type: 'website',
    siteName: 'GreenKitchenHub',
    locale: 'en_US',
    url: `https://${site.domain}`,
    title: 'GreenKitchenHub',
    description: 'Smarter swaps for a zero-waste kitchen.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#111111] dark:bg-gray-950 dark:text-gray-100">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
