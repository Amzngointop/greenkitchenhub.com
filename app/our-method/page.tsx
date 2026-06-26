import { disclosure } from '@/data/site'

export const metadata = {
  title: 'Our Method & Editorial Standards',
  description:
    'How GreenKitchenHub researches and selects eco-friendly kitchen products, who writes our guides, and how our affiliate relationships work.',
}

const steps = [
  {
    n: '1',
    t: 'Research the Materials',
    d: 'We start with what a product is made of, favoring renewable, recyclable, and non-toxic materials such as bamboo, glass, stainless steel, and food-grade silicone over short-lived plastics.',
  },
  {
    n: '2',
    t: 'Weigh Durability and Use',
    d: 'We evaluate how a product holds up to everyday kitchen use and real maintenance demands, because the most sustainable item is the one you rarely have to replace.',
  },
  {
    n: '3',
    t: 'Score Environmental Impact',
    d: 'We consider the full lifecycle, from sourcing and manufacturing to end-of-life, and prioritize products that meaningfully reduce waste compared with the disposable status quo.',
  },
]

const editors = [
  {
    name: 'Maya Chen',
    role: 'Sustainability Editor',
    bio: 'Maya leads editorial direction at GreenKitchenHub, focusing on practical zero-waste habits that hold up in busy households. She is happiest translating dense sustainability research into swaps anyone can make this week.',
  },
  {
    name: "James O'Brien",
    role: 'Kitchen Lab Writer',
    bio: 'James covers materials and durability, with a soft spot for bamboo and well-made stainless steel. He writes about how kitchen tools age over years of real use rather than how they look in a box.',
  },
  {
    name: 'Sofia Park',
    role: 'Zero Waste Contributor',
    bio: 'Sofia writes about storage, food waste, and the small habits that compound into a lower-waste kitchen. She is a firm believer that systems beat willpower every time.',
  },
]

export default function OurMethodPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <p className="text-[11px] uppercase tracking-[0.1em] text-[#2D6B1A] dark:text-green-400 mb-2">About</p>
      <h1 className="font-serif text-4xl text-[#111111] dark:text-gray-100">Our Method &amp; Editorial Standards</h1>
      <p className="text-[#444444] dark:text-gray-400 mt-3">
        GreenKitchenHub exists to make the sustainable kitchen choice the easy one. Here is how we research products,
        who writes our content, and how we stay independent.
      </p>

      <h2 className="font-serif text-2xl text-[#111111] dark:text-gray-100 mt-10 mb-5">How We Pick Products</h2>
      <div className="space-y-5">
        {steps.map((s) => (
          <div key={s.n} className="flex gap-4">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#2D6B1A] text-white font-bold shrink-0">
              {s.n}
            </span>
            <div>
              <h3 className="font-serif text-lg text-[#111111] dark:text-gray-100">{s.t}</h3>
              <p className="text-sm text-[#444444] dark:text-gray-400 mt-1">{s.d}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-serif text-2xl text-[#111111] dark:text-gray-100 mt-12 mb-5">Who We Are</h2>
      <div className="space-y-6">
        {editors.map((e) => (
          <div key={e.name} className="border-l-2 border-[#2D6B1A] pl-4">
            <h3 className="font-serif text-lg text-[#111111] dark:text-gray-100">{e.name}</h3>
            <p className="eyebrow text-[#666666] dark:text-gray-500">{e.role}</p>
            <p className="text-sm text-[#444444] dark:text-gray-400 mt-2">{e.bio}</p>
          </div>
        ))}
      </div>

      <h2 className="font-serif text-2xl text-[#111111] dark:text-gray-100 mt-12 mb-3">How Affiliate Links Work</h2>
      <p className="text-sm text-[#444444] dark:text-gray-400 mb-3">
        GreenKitchenHub participates in the Amazon Associates program. When you buy through some of our links, we may
        earn a small commission at no additional cost to you. Those commissions help fund our research and keep the
        site free to read.
      </p>
      <p className="text-sm text-[#444444] dark:text-gray-400">
        Crucially, our recommendations are never for sale. We choose products on their merits, and an affiliate
        relationship never buys a better placement or a more favorable write-up.
      </p>

      <p className="text-[13px] italic text-[#666666] dark:text-gray-300 bg-[#EAF4E5] dark:bg-gray-800 rounded-md px-4 py-3 mt-8">
        {disclosure}
      </p>
    </div>
  )
}
