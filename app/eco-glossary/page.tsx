export const metadata = {
  title: 'The Green Kitchen Glossary',
  description:
    'An A-to-Z glossary of eco-friendly and zero-waste kitchen terms, from BPA-free and biodegradable to upcycling and VOCs, with clear original definitions.',
}

interface Term {
  term: string
  def: string
}

const terms: Term[] = [
  { term: 'Bagasse', def: 'A compostable material made from sugarcane fiber left over after juice extraction, often used for plates and takeout containers.' },
  { term: 'Bamboo', def: 'A fast-growing grass that regenerates in a few years, prized as a renewable alternative to plastic and slow-growing hardwoods.' },
  { term: 'Biodegradable', def: 'Capable of being broken down by microorganisms over time, though the rate and required conditions vary considerably between materials.' },
  { term: 'BPA-Free', def: 'Made without bisphenol A, a chemical used in some plastics that research has linked to hormonal effects.' },
  { term: 'Borosilicate Glass', def: 'A durable glass with high resistance to thermal shock, allowing it to move between freezer and oven with less risk of cracking.' },
  { term: 'Carbon Footprint', def: 'The total greenhouse gas emissions caused directly and indirectly by a product, person, or activity.' },
  { term: 'Circular Economy', def: 'An economic model that keeps materials in use through reuse, repair, and recycling rather than discarding them after one life.' },
  { term: 'Compostable', def: 'Able to break down into nutrient-rich soil under composting conditions, leaving no toxic residue behind.' },
  { term: 'Composting', def: 'The managed process of letting organic matter decompose into a soil-enriching material instead of sending it to landfill.' },
  { term: 'Downcycling', def: 'Recycling a material into a product of lower quality or value, a common fate for many plastics.' },
  { term: 'Food Miles', def: 'The distance food travels from where it is grown to where it is eaten, used as a rough proxy for transport emissions.' },
  { term: 'Food Waste', def: 'Edible food that is discarded uneaten, a major source of both wasted money and landfill methane.' },
  { term: 'Greenwashing', def: 'Marketing that overstates or fabricates the environmental benefits of a product to appear more sustainable than it is.' },
  { term: 'Landfill', def: 'A site where waste is buried; materials there break down slowly and can release methane and leachate.' },
  { term: 'Lifecycle Assessment', def: 'A method of evaluating a product’s total environmental impact from raw material sourcing through disposal.' },
  { term: 'Microplastics', def: 'Tiny plastic particles shed by degrading plastic items that accumulate in water, soil, and food chains.' },
  { term: 'Mineral Oil (Food-Grade)', def: 'A food-safe oil used to season and seal wooden and bamboo kitchenware, protecting it from moisture and cracking.' },
  { term: 'PFAS', def: 'A class of long-lasting synthetic chemicals, sometimes called forever chemicals, found in some nonstick and stain-resistant products.' },
  { term: 'Plastic-Free', def: 'Describing products or routines that avoid plastic entirely in favor of materials like glass, metal, wood, or cloth.' },
  { term: 'Recyclable', def: 'Able to be processed and remade into new products, though actual recycling depends on local facilities and demand.' },
  { term: 'Reusable', def: 'Designed to be used many times rather than once, lowering per-use cost and waste over its lifespan.' },
  { term: 'Silicone', def: 'A flexible, heat-stable material used for utensils and lids that resists melting and protects nonstick cookware.' },
  { term: 'Single-Use', def: 'Designed to be used once and discarded, the defining trait of the disposable products zero-waste living seeks to replace.' },
  { term: 'Stainless Steel', def: 'A corrosion-resistant alloy of steel, chromium, and often nickel, valued for durable, long-lived kitchenware.' },
  { term: 'Upcycling', def: 'Repurposing waste or unwanted items into products of equal or greater value and quality.' },
  { term: 'VOCs', def: 'Volatile organic compounds released as gases from some cleaners and materials, which can affect indoor air quality.' },
  { term: 'Zero Waste (5R)', def: 'A philosophy built on refuse, reduce, reuse, recycle, and rot, applied in that order to minimize landfill waste.' },
]

export default function EcoGlossaryPage() {
  const grouped = terms.reduce<Record<string, Term[]>>((acc, t) => {
    const letter = t.term[0].toUpperCase()
    ;(acc[letter] ||= []).push(t)
    return acc
  }, {})
  const letters = Object.keys(grouped).sort()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <p className="text-[11px] uppercase tracking-[0.1em] text-[#2D6B1A] dark:text-green-400 mb-2">Reference</p>
      <h1 className="font-serif text-4xl text-[#111111] dark:text-gray-100">The Green Kitchen Glossary</h1>
      <p className="text-[#444444] dark:text-gray-400 mt-3">
        Plain-language definitions for the eco and zero-waste terms you will run into across our reviews and guides.
      </p>

      {/* A-Z index */}
      <div className="flex flex-wrap gap-2 mt-6 mb-10">
        {letters.map((l) => (
          <a
            key={l}
            href={`#letter-${l}`}
            className="w-8 h-8 flex items-center justify-center rounded border border-[#e5e5e5] dark:border-gray-800 text-sm text-[#2D6B1A] dark:text-green-400 hover:bg-[#EAF4E5] dark:hover:bg-gray-800"
          >
            {l}
          </a>
        ))}
      </div>

      {letters.map((l) => (
        <section key={l} id={`letter-${l}`} className="scroll-mt-24 mb-8">
          <h2 className="font-serif text-2xl text-[#2D6B1A] dark:text-green-400 mb-4">{l}</h2>
          <div className="space-y-4">
            {grouped[l].map((t) => (
              <div key={t.term} className="border-l-2 border-[#2D6B1A] pl-4">
                <h3 className="font-serif text-lg text-[#111111] dark:text-gray-100">{t.term}</h3>
                <p className="text-sm text-[#444444] dark:text-gray-400 mt-1">{t.def}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
