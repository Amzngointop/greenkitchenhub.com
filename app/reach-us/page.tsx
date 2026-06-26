import { site } from '@/data/site'
import { Mail, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Reach Us',
  description:
    'Get in touch with the GreenKitchenHub team. Send us a message, suggest a product to review, or share feedback on our zero-waste kitchen guides.',
}

const inputClass =
  'w-full rounded-lg border border-[#e5e5e5] px-4 py-2 text-sm bg-white text-[#111111] placeholder-[#999999] focus:outline-none focus:border-[#2D6B1A] dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 dark:placeholder-gray-500'

export default function ReachUsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <p className="text-[11px] uppercase tracking-[0.1em] text-[#2D6B1A] dark:text-green-400 mb-2">Contact</p>
      <h1 className="font-serif text-4xl text-[#111111] dark:text-gray-100">Reach Us</h1>
      <p className="text-[#444444] dark:text-gray-400 mt-3">
        Questions, feedback, or a product you think we should review? We would love to hear from you.
      </p>

      <div className="grid sm:grid-cols-2 gap-5 mt-8">
        <div className="flex items-start gap-3 rounded-lg border border-[#e5e5e5] dark:border-gray-800 p-5 bg-white dark:bg-gray-900">
          <Mail className="text-[#2D6B1A] dark:text-green-400 shrink-0" size={22} />
          <div>
            <p className="eyebrow text-[#666666] dark:text-gray-500">Email</p>
            <a href={`mailto:${site.email}`} className="text-sm text-[#2D6B1A] dark:text-green-400 hover:underline">
              {site.email}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-[#e5e5e5] dark:border-gray-800 p-5 bg-white dark:bg-gray-900">
          <MapPin className="text-[#2D6B1A] dark:text-green-400 shrink-0" size={22} />
          <div>
            <p className="eyebrow text-[#666666] dark:text-gray-500">Mailing Address</p>
            <p className="text-sm text-[#444444] dark:text-gray-400">{site.address}</p>
          </div>
        </div>
      </div>

      <h2 className="font-serif text-2xl text-[#111111] dark:text-gray-100 mt-10 mb-5">Send a Message</h2>
      <form className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-[#444444] dark:text-gray-400 mb-1">Name</label>
            <input type="text" className={inputClass} placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm text-[#444444] dark:text-gray-400 mb-1">Email</label>
            <input type="email" className={inputClass} placeholder="you@example.com" />
          </div>
        </div>
        <div>
          <label className="block text-sm text-[#444444] dark:text-gray-400 mb-1">Subject</label>
          <input type="text" className={inputClass} placeholder="What is this about?" />
        </div>
        <div>
          <label className="block text-sm text-[#444444] dark:text-gray-400 mb-1">Message</label>
          <textarea rows={5} className={inputClass} placeholder="Your message" />
        </div>
        <button type="button" className="btn-3d">Send Message →</button>
      </form>
    </div>
  )
}
